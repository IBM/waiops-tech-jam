---
title: "7. Cloning an ObjectServer"
sidebar_position: 7
---

## Objective

Create a separate ObjectServer named `EVENTS_BACKUP` by exporting the configuration of the existing `EVENTS` ObjectServer and using that export to initialize a new instance.

By the end of this lab, you will be able to:

- Export an ObjectServer configuration with `nco_osreport -dbinit`.
- Identify which exported configuration content is appropriate for a training or test clone.
- Initialize a new ObjectServer with `nco_dbinit`.
- Add a unique communications entry for the new ObjectServer.
- Start and verify the clone independently of the source ObjectServer.

## Scenario

`EVENTS` is the existing ObjectServer used by the lab environment. You will create `EVENTS_BACKUP` as a separate ObjectServer on the same host.

The clone is intended for controlled testing and training. It will contain the source ObjectServer’s schema and selected configuration, but it will **not** include historical event rows from `alerts.status`.

```text
EVENTS
  │
  ├─ nco_osreport -dbinit
  │
  ├─ Reviewed SQL export
  │
  └─ nco_dbinit
       │
       └─ EVENTS_BACKUP
            ├─ Separate ObjectServer database
            ├─ Separate omni.dat endpoint
            ├─ Separate Process Agent process
            └─ No historical alerts.status data
```

## How cloning works

`nco_dbinit` creates and initializes an ObjectServer from SQL definition files. It does not connect to an existing ObjectServer and copy its configuration automatically.

The clone workflow is therefore:

1. Export the source ObjectServer configuration.
2. Review the export and decide what should be replicated.
3. Initialize a new ObjectServer using selected SQL files.
4. Configure communications and process control for the new instance.
5. Start and validate the clone.

The export can contain more than tables and columns. Depending on the source configuration, it can include custom schema, ObjectServer triggers, automations, users, groups, roles, desktop configuration, and historical alert data.

> **Important:** Treat exported SQL files as configuration artifacts. They may contain credentials, user definitions, automation actions, script paths, gateway configuration, hostnames, and other environment-specific details.

---

## Prerequisites

Before beginning, confirm:

- The `EVENTS` ObjectServer is running.
- You have authorized ObjectServer administrator credentials.
- `OMNIHOME` is defined.
- You can write to a temporary working directory.
- `EVENTS_BACKUP` is not already configured or running.
- You know the fully qualified host name and an unused port for `EVENTS_BACKUP`.

Confirm the source ObjectServer is reachable:

```sh
$OMNIHOME/bin/nco_ping EVENTS
```

Confirm that `EVENTS_BACKUP` is not already running:

```sh
ps -efww | grep '[n]co_objserv'
```

---

# 7.1 Export the source configuration

## Objective

Export the `EVENTS` ObjectServer configuration into SQL files for review and reuse.

1. Create and enter a dedicated export directory:

```sh
mkdir -p /tmp/events-backup-export
cd /tmp/events-backup-export
```

2. Export the source ObjectServer:

```sh
$OMNIHOME/bin/nco_osreport \
  -server EVENTS \
  -user root \
  -password 'netcool' \
  -dbinit
```

3. Confirm that the export completed and that the expected SQL files were generated:

```sh
ls -1 *.sql
```

The output includes the following files:

| File | Purpose |
|---|---|
| `system.sql` | Creates the core ObjectServer system database structure, including system tables and default security foundations: system users, groups, roles, and permissions. IBM advises that this file should not be edited. |
| `application.sql` | Creates the initial alert and tools database tables—the standard structures used for `alerts.*` and related application data. Use it when creating a clean ObjectServer without importing the source system's table contents. |
| `alertsdata.sql` | Contains exported row data from non-system tables, potentially including `alerts.status`, `alerts.details`, `alerts.journal`, tools, conversions, and other configured data. Import it only when a clone requires the source data. When used with `nco_dbinit`, specify both `-alertsdata` and `-alertsdatafile alertsdata.sql`; otherwise, many application tables can remain empty. |
| `desktop.sql` | Defines initial desktop configuration, including colors, conversions, tools, and menus used by classic desktop clients. It is often empty in modern environments, but `nco_dbinit` expects it as part of the standard initialization set. |
| `automation.sql` | Defines ObjectServer automations: trigger groups, database triggers, and internal procedures. Review this file carefully before cloning across environments because its content may invoke scripts, gateways, notifications, or other source-environment-specific actions. |
| `security.sql` | Adds security configuration beyond the basic system security created by `system.sql`, including additional users, groups, roles, role assignments, and grants. Ownership of exported entities transfers to `root` in the destination ObjectServer; original owners receive permissions on the entities they owned rather than retaining ownership. [IBM documentation](https://www.ibm.com/docs/en/netcoolomnibus/8.1.0?topic=utility-about-nco-osreport) |

## Validation

You should have a set of SQL files in `/tmp/events-backup-export`.

Do not continue if `nco_osreport` reports an authentication, communications, permission, or SQL export error.

---

# 7.2 Select the clone content

## Objective

Choose the configuration that belongs in a clean training/test ObjectServer.

For this lab, initialize `EVENTS_BACKUP` with:

```text
system.sql
application.sql
desktop.sql
automation.sql
security.sql
```

Do **not** import:

```text
alertsdata.sql
```

`alertsdata.sql` contains exported event data. Omitting it creates a clean ObjectServer without the source system’s existing `alerts.status` rows.

## Review before use

Review the following files sufficiently to understand what is being carried into the clone:

```sh
less system.sql
less automation.sql
less security.sql
```

Pay particular attention to:

- Custom `alerts.status` columns and database objects.
- Automations that invoke scripts, commands, gateways, email, or external integrations.
- Hostnames, filesystem paths, Process Agent names, and external endpoint references.
- User, group, role, and security definitions.

For this training environment, the exported configuration is presumed approved for use. In a production-to-test clone, you would normally sanitize or omit source-specific automations and security content before initialization.

## Validation

You should be able to explain the difference between:

- A **configuration clone**, which copies selected schema/configuration.
- A **data clone**, which additionally imports historical alert rows.

---

# 7.3 Initialize EVENTS_BACKUP

## Objective

Create a new ObjectServer named `EVENTS_BACKUP` from the selected export files.

From the export directory, run:

```sh
$OMNIHOME/bin/nco_dbinit \
  -server EVENTS_BACKUP \
  -systemfile system.sql \
  -applicationfile application.sql \
  -desktopfile desktop.sql \
  -automationfile automation.sql \
  -securityfile security.sql
```

Do not add the `-alertsdata` or `-alertsdatafile` options. This lab intentionally creates a clean clone.

`nco_dbinit` creates the ObjectServer database and imports the selected SQL definitions. It does not start the ObjectServer.

> On Linux and UNIX systems, `nco_dbinit` can appear as a symbolic link to `nco_run`. This is expected. `nco_run` is a Netcool/OMNIbus launcher that prepares the required runtime environment and invokes the utility associated with the command name. Continue to run `nco_dbinit`; do not invoke `nco_run` directly.

## Validation

Confirm that a properties file was created for the new ObjectServer:

```sh
ls -l $OMNIHOME/etc/EVENTS_BACKUP.props
```

> Note: nco_osreport -dbinit does not clone the ObjectServer .props file, and that is intentional. It exports database-resident ObjectServer configuration into SQL, while an ObjectServer properties file is a local, file-based runtime configuration artifact.



---

# 7.4 Configure communications

## Objective

Create a unique client communications endpoint for `EVENTS_BACKUP`.

Every ObjectServer requires its own name, host, and port. `EVENTS_BACKUP` must not reuse the communications port already assigned to `EVENTS`. 

`omni.dat` is the Netcool/OMNIbus connections data file. It maps component names—such as **ObjectServers**, **Process Agents**, **gateways**, and **proxies** to the hostnames and ports where those components listen.

On UNIX and Linux, OMNIbus components do not normally read `omni.dat` directly. It is the source file used to generate the platform-specific interfaces file with nco_igen or the Server Editor (nco_xigen - the XWindows equivalent tool). After changing omni.dat, regenerate the interfaces file and restart any affected components so they use the updated communications information.

The `omni.dat` file is located under `$NCHOME/etc/omni.dat`, rather than `$OMNIHOME/etc` because it is a shared Netcool communications configuration, not an OMNIbus-component-specific configuration file. 

1. Back up `omni.dat`:

```sh
cp $NCHOME/etc/omni.dat \
  $NCHOME/etc/omni.dat.before-events-backup
```

2. Edit the communications file:

```sh
vi $NCHOME/etc/omni.dat
```

3. Add an entry for `EVENTS_BACKUP`.

Use the hostname and an unused port. For example:

```text
[EVENTS_BACKUP]
{
        Primary: <your-fqdn> 4101
}
```

4. Regenerate the UNIX interfaces file:

```sh
$NCHOME/bin/nco_igen
```

5. Confirm the new ObjectServer is present in the generated interfaces:

```sh
grep -A4 -B2 EVENTS_BACKUP $NCHOME/etc/interfaces.linux2x86
```

## Validation

The new ObjectServer name should resolve in the communications configuration, even though the ObjectServer is not yet running:

```sh
grep -n EVENTS_BACKUP $NCHOME/etc/omni.dat
```

---

# 7.5 Add the clone to Process Agent

## Objective

Allow Process Agent to start and monitor `EVENTS_BACKUP` independently of `EVENTS`.

The new ObjectServer is PA-aware. Its process definition must include `-pa NCO_PA` and use `ProcessType = PaPA_AWARE`.

1. Back up the Process Agent configuration:

    ```sh
    cp $OMNIHOME/etc/nco_pa.conf \
    $OMNIHOME/etc/nco_pa.conf.before-events-backup
    ```

2. Edit the configuration:

    ```sh
    vi $OMNIHOME/etc/nco_pa.conf
    ```

3. Add another process definition to the `nco_process` section for our backup object server.

    Replace **\<YOUR-FQDN\>** with the fully qualified name for your system:

    ```conf
    nco_process 'BackupObjectServer'
    {
        Command '$OMNIHOME/bin/nco_objserv -name EVENTS_BACKUP -pa NCO_PA' run as 0
        Host            =       '<YOUR-FQDN>'
        Managed         =       True
        RestartMsg      =       '${NAME} running as ${EUID} has been restored on ${HOST}.'
        AlertMsg        =       '${NAME} running as ${EUID} has died on ${HOST}.'
        RetryCount      =       0
        ProcessType     =       PaPA_AWARE
    }

    ```

4. Add an additional service definition:

    ```conf
    nco_service 'BackupObjectServerService'
    {
        ServiceType = Non-Master
        ServiceStart = Non-Auto
        process 'BackupObjectServer' NONE
    }
    ```

    For illustration, we set the `BackupObjectServerService` to `Non-Auto` so the training clone does not start automatically each time Process Agent starts. We must explicitly start it upon starting up `Process Control`.

## Validation

Before restarting Process Agent, confirm:

- The existing `MasterObjectServer` definition still uses `-name EVENTS`.
- `BackupObjectServer` uses `-name EVENTS_BACKUP`.
- The clone has its own service.
- The clone is `PaPA_AWARE`.
- The service uses `ServiceStart = Non-Auto`.

---

# 7.6 Start and validate the clone

## Objective

Start `EVENTS_BACKUP`, confirm that it is running under Process Agent, and validate its schema and clean alert table.

1. Shut down and restart the Process Agent so it reads the updated configuration:

    ```sh
    nco_pa_shutdown
    ```

    At the shutdown prompt, select option `2` to shut down Process Agent and stop all managed processes. Because this lab runs Process Agent with `-authenticate NONE`, press Enter at any login or password prompt.

    Then restart Process Agent:

    ```sh
    nco_pad -authenticate NONE
    ```

    Confirm that Process Agent has restarted before continuing. The `Core` service and the existing `MasterObjectServer` should be available again; the backup service remains DEAD because it is configured with `ServiceStart = Non-Auto`.

2. Start the clone service:

    ```sh
    nco_pa_start -service BackupObjectServerService
    ```

3. Check status:

    ```sh
    nco_pa_status
    ```

    Both of your ObjectServers should now be running:

    ```text
    Core                         MasterObjectServer      RUNNING
    BackupObjectServerService    BackupObjectServer      RUNNING
    ```

4. Confirm that the new ObjectServer responds and connect to it with `nco_sql`:

    ```sh
    $OMNIHOME/bin/nco_ping EVENTS_BACKUP
    ```

    ```sh
    $OMNIHOME/bin/nco_sql \
    -server EVENTS_BACKUP \
    -user root \
    -password 'netcool'
    ```

5. Confirm that the expected `alerts.status` schema exists:

    ```sql
    DESCRIBE alerts.status;
    go
    ```

    Confirm that the custom fields added in the previous ObjectServer database lab, including `CustomerID` and `CircuitID`, exist in the cloned `alerts.status` table.

6. Confirm that the user created in the previous ObjectServer database lab also exists in the cloned ObjectServer:

    ```sql
    SELECT * FROM security.users WHERE UserName = 'jdoe';
    go
    ```

    Confirm that the query returns the `jdoe` user.

7. Exit `nco_sql`:

    ```sql
    quit
    ```

## Validation

The lab is successful when:

- `EVENTS` remains running.
- `EVENTS_BACKUP` is independently running under Process Agent.
- `nco_ping EVENTS_BACKUP` succeeds.
- The clone contains the expected schema and custom fields.
- `alerts.status` contains no source historical events.

---

# Lab summary

In this lab, you:

- Exported the `EVENTS` ObjectServer configuration with `nco_osreport -dbinit`.
- Selected configuration SQL files suitable for a clean training clone.
- Initialized `EVENTS_BACKUP` with `nco_dbinit`.
- Deliberately omitted `alertsdata.sql`.
- Added a unique `EVENTS_BACKUP` communications endpoint.
- Added the clone as an independently controlled PA-aware ObjectServer process.
- Started and validated the clone without affecting `EVENTS`.

The important operational model is:

```text
Export source configuration
  → review and select content
  → initialize a separate ObjectServer
  → configure communications
  → add Process Agent control
  → start and validate independently
```

IBM documents `nco_osreport -dbinit` exports as input for `nco_dbinit` when cloning an ObjectServer, including the option to explicitly include or omit exported alert data. [web:118]
