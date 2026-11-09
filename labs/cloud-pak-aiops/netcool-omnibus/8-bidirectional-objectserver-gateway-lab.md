---
title: "8. Configuring a Bidirectional ObjectServer Gateway"
sidebar_position: 8
---

## Objective

Configure a bidirectional ObjectServer Gateway between `EVENTS` and `EVENTS_BACKUP`, verify that required custom alert fields are mapped, place the gateway under Process Agent control, and validate alert replication in both directions.

At the end of this lab, you will be able to:

- Explain the role of a bidirectional ObjectServer Gateway.
- Confirm that both ObjectServers have compatible schemas.
- Configure the gateway to connect `EVENTS` and `EVENTS_BACKUP`.
- Verify that custom `alerts.status` fields are mapped.
- Add the gateway to Process Agent as a separately managed service.
- Validate inserts and updates in both replication directions.

> **Scope:** This lab uses `EVENTS` and `EVENTS_BACKUP` on the same host. It demonstrates ObjectServer replication and gateway process control. It does not provide host-level high availability. Probe peer-to-peer high availability is intentionally out of scope for this lab.

---

## Scenario

The previous lab created `EVENTS_BACKUP` as a separate ObjectServer. In this lab, you will configure a bidirectional ObjectServer Gateway so alerts and selected updates can flow between the two ObjectServers.

```text
                    Bidirectional ObjectServer Gateway

       EVENTS  <------------------------------------->  EVENTS_BACKUP
         |                                                     |
         |                                                     |
   Primary training                                  Backup/training
   ObjectServer                                      ObjectServer
```

A bidirectional gateway synchronizes configured ObjectServer tables in both directions. The gateway uses a map definition file to map source fields to target fields. For `alerts.status`, any custom fields required by the lab must:

1. Exist in the source ObjectServer.
2. Exist in the destination ObjectServer.
3. Be compatible in type and length.
4. Be explicitly mapped by the gateway.

A gateway map cannot create a missing ObjectServer column. Resolve schema differences before starting the gateway.

---

## How bidirectional replication works

The ObjectServer Gateway listens for changes in configured source tables, transforms those changes according to its map definition, and applies the corresponding changes to the destination ObjectServer. In bidirectional mode, the gateway is designed to replicate eligible changes in both directions while preventing the replicated update from being endlessly returned to its origin.

For this lab, the primary replication target is:

```text
alerts.status
```

Depending on deployment requirements, the gateway may also map:

```text
alerts.details
alerts.journal
```

 Replicating configuration, security, or automation tables is outside the scope of this exercise.

---

## Prerequisites

Before beginning, verify:

- `EVENTS` is running.
- `EVENTS_BACKUP` is running.
- Both ObjectServers are reachable through `omni.dat` and the generated interfaces file.
- The ObjectServer Gateway package is installed.
- You have authorized ObjectServer administrator credentials.
- The custom alert fields required by the lab are known.
- Process Agent `NCO_PA` is running on the lab host.

Confirm connectivity:

```sh
$OMNIHOME/bin/nco_ping EVENTS
$OMNIHOME/bin/nco_ping EVENTS_BACKUP
```

Confirm the gateway installation and identify the supplied templates and executable:

```sh
find $OMNIHOME/gates -type f \( -name 'nco_g_objserv*' -o -name '*objserv*.props' -o -name '*objserv*.map' \) -print
```



---

# 8.1 Verify schema compatibility

## Objective

Confirm that `EVENTS` and `EVENTS_BACKUP` have compatible `alerts.status` schemas before configuring replication.

A bidirectional gateway can replicate a custom field only when the field exists on both ObjectServers and has a compatible definition. Compare field names, data types, and string lengths.

1. Export the `EVENTS` schema description to a raw output file:

   ```sh
   printf 'DESCRIBE alerts.status;\ngo\n' \
     | $OMNIHOME/bin/nco_sql -server EVENTS -user root -password 'netcool' \
     > /tmp/EVENTS-schema-raw.txt
   ```

2. Export the `EVENTS_BACKUP` schema description to a raw output file:

   ```sh
   printf 'DESCRIBE alerts.status;\ngo\n' \
     | $OMNIHOME/bin/nco_sql -server EVENTS_BACKUP -user root -password 'netcool' \
     > /tmp/EVENTS_BACKUP-schema-raw.txt
   ```

3. Identify the schema differences:

   ```sh
   diff -u /tmp/EVENTS-schema-raw.txt /tmp/EVENTS_BACKUP-schema-raw.txt
   ```

  If the `diff` command produces no output, the schema descriptions already match. If it produces output, review the differences in field names, data types, and string lengths, especially for the custom fields used by this lab.

## Validation

Before continuing, confirm that every required custom field:

- Exists in both ObjectServers.
- Uses the same or compatible type.
- Uses the same or sufficient string length.

If a field is missing from `EVENTS_BACKUP`, add it through the approved schema-management procedure before continuing. Do not attempt to solve a schema mismatch only by editing the gateway map.

---

# 8.2 Create a gateway working area

## Objective

Create a working directory for our bi-directional gateway, and copy the installed bi-directional gateway template map and configuration files.

1. Create the working directories:

   ```sh
   mkdir -p $OMNIHOME/gates/events_backup
   ```

2. Copy the template properties and mapping files:


   ```sh
   cp -R $OMNIHOME/gates/objserv_bi/* $OMNIHOME/gates/events_backup
   ```

3. Restrict access to the configuration directory because gateway properties can contain connection credentials:

   ```sh
   chmod 750 $OMNIHOME/gates/events_backup
   chmod 640 $OMNIHOME/gates/events_backup/*
   ```

## Validation

You should have a dedicated gateway configuration area that is separate from the installed defaults and from any other gateway instances.

---

# 8.3 Configure the gateway properties

## Objective

Configure a dedicated bidirectional gateway instance that connects `EVENTS` and `EVENTS_BACKUP`.

1. Open the copied properties file:

   ```sh
   vi $OMNIHOME/gates/events_backup/objserv_bi.props
   ```

   As we saw with the **probe** property files, in this property file you can see all of the default property settings, and note that they are commented out. 

2. At the bottom of the properties file, configure the source and destination ObjectServer connection settings, as well as our custom mapping and startup command file locations:

   ```text
   Name                                    : 'EVENTS_GATE'
   Gate.ObjectServerA.Server               : 'EVENTS'
   Gate.ObjectServerA.Username             : 'root'
   Gate.ObjectServerA.Password             : 'netcool'
   Gate.ObjectServerB.Server               : 'EVENTS_BACKUP'
   Gate.ObjectServerB.Username             : 'root'
   Gate.ObjectServerB.Password             : 'netcool'
   Gate.MapFile                            : '$OMNIHOME/gates/events_backup/objserv_bi.map'
   Gate.StartupCmdFile                     : '$OMNIHOME/gates/events_backup/objserv_bi.startup.cmd'
   ```

3. Save the properties file and exit the editor.

## Validation

Before starting the gateway, verify that the properties identify both ObjectServers and reference the dedicated map file. 

---

# 8.4 Map standard and custom alert fields

## Objective

The gateway mapping file, also called a **map definition file**, tells the ObjectServer Gateway how to translate data between the ObjectServers it connects. It defines which source table columns are copied to which destination columns and can also apply transformations, lookups, default values, or conditional mapping logic where required. The gateway properties file identifies the map file through the Gate.MapFile setting; when the gateway processes an alert, it uses the map definitions to determine what data is replicated and how it is represented at the destination.

The `CREATE MAPPING StatusMap` section defines how fields from an ObjectServer alerts.status row are mapped to fields in the gateway’s destination. Each mapping entry identifies a destination field on the left and the source ObjectServer alert field on the right.

For a direct field-to-field mapping, the general format is:

```text
'DestinationField' = '@SourceField'
```
The @ prefix means “read this field from the current ObjectServer alert.” Gateway map entries are comma-separated, and the final entry is followed by the closing );

In this section we will confirm that the map definition includes the required standard fields and all custom `alerts.status` fields used by the lab.

1. Open the copied map file:

    ```sh
    vi $OMNIHOME/gates/events_backup/objserv_bi.map
    ```

2. Locate the `CREATE MAPPING StatusMap` mapping section near the top of the file.

3. Confirm that the standard alert fields required for normal event synchronization are mapped. Typical examples include:

    ```text
    Identifier
    Node
    Summary
    Severity
    Class
    Type
    AlertGroup
    Manager
    Agent
    FirstOccurrence
    LastOccurrence
    Tally
    Acknowledged
    OwnerUID
    StateChange
    ```

4. Add mappings for our custom fields.

   At the end of the mapping section, you will see a mapping for the column `BSM_Identity`. Add a comma to the end of that line, then add another line and map the two custom fields as such:

      ```text
              'BSM_Identity'    =   '@BSM_Identity',
              'CustomerID'      =   '@CustomerID',
              'CircuitID'       =   '@CircuitID
        
        );
      ```

      Do not end the `CircuitID` mapping with a comma, it will cause a parse error.

5. Save the map file and exit.

## Validation

For every custom field required by the lab, verify:

- The field exists in `EVENTS`.
- The field exists in `EVENTS_BACKUP`.
- The field is present in the gateway's `alerts.status` map.
- The mapping preserves the field in both replication directions.

> A useful test is not merely that a replicated event appears on the other ObjectServer. You must create or update a custom field and confirm that its value also replicates.

---

# 8.5 Start the gateway manually and validate operation

## Objective

Before we start the gateway, we must add an entry to the $NCHOME/etc/omni.dat connections data file so OMNIbus components can resolve the gateway’s logical name to its host and listening port. The bidirectional gateway is itself a network service: each ObjectServer connects to the gateway by using its configured gateway name, rather than a hard-coded host and port. After adding the entry, run nco_igen or use the Server Editor to regenerate the platform-specific interfaces file that OMNIbus components actually read at runtime.

1. Back up `omni.dat`:

   ```sh
   cp $NCHOME/etc/omni.dat \
     $NCHOME/etc/omni.dat.before-events-backup-gateway
   ```

2. Edit the communications file:

   ```sh
   vi $NCHOME/etc/omni.dat
   ```

3. Add an entry for the gateway configured as `EVENTS_GATE` in Section 8.3. Use the actual fully qualified hostname and an unused port assigned for this lab. For example:

   ```text
   [EVENTS_GATE]
   {
         Primary: <your-fqdn> 4102
   }
   ```

   **Use an unused port and the actual fully qualified hostname for your lab environment.** Do not reuse the port assigned to `EVENTS` or `EVENTS_BACKUP`.

4. Regenerate the UNIX interfaces file:

   ```sh
   $NCHOME/bin/nco_igen
   ```

5. Confirm that the gateway is present in the generated interfaces:

   ```sh
   grep -A4 -B2 EVENTS_GATE $NCHOME/etc/interfaces.linux2x86
   ```

6. Start the gateway with the command:

   ```sh
   $OMNIHOME/bin/nco_g_objserv_bi -propsfile $OMNIHOME/gates/events_backup/objserv_bi.props &
   ```

7. Confirm that the gateway displays the expected startup output:

   ```text
   Netcool/OMNIbus Bi-Directional ObjectServer Gateway - Version 8.1.0 64-bit

   (C) Copyright IBM Corp. 1994, 2012

   Server 'EVENTS_GATE' initialised - entering RUN state.
   ```

8. We are going to test synchronization using the syslogd probe and the `logger` command. First, check whether the syslogd probe is running:

   ```sh
   ps -ef | grep nco_p_syslogd | grep -v grep
   ```

   If no `nco_p_syslogd` process appears, start it with the training rules file:

   ```sh
   $OMNIHOME/probes/nco_p_syslogd \
     -rulesfile $OMNIHOME/probes/linux2x86/syslogd-training.rules &
   ```

9. To make the synchronization result unambiguous, remove the existing events from the `EVENTS` ObjectServer before sending the new test event. This leaves a clean starting point so the `LinkDown` event generated in the next task can be identified clearly in both ObjectServers.

   ```sh
   $OMNIHOME/bin/nco_sql -server EVENTS -user root -password 'netcool'
   ```

   At the `nco_sql` prompt, run:

   ```sql
   DELETE FROM alerts.status;
   go
   ```

   Exit `nco_sql` before continuing to the next task:

   ```sql
   quit
   ```

   This is a destructive command. For this lab, it provides a clean event list for validating the gateway replication flow.

10. Send the `LinkDown` event used in the earlier probe labs:

    ```sh
    logger -n 127.0.0.1 'ALERT - LinkDown: Received a link down alert from routerA interface GigabitEthernet0/0 : unknown reason code'
    ```

11. Connect to `EVENTS` and confirm that the `LinkDown` event arrived:

    ```sh
    $OMNIHOME/bin/nco_sql -server EVENTS -user root -password 'netcool'
    ```

    At the `nco_sql` prompt, run:

    ```sql
    SELECT Identifier, Node, Summary, Severity, AlertGroup, Manager
    FROM alerts.status
    WHERE Node = 'routerA';
    go
    ```

    Exit `nco_sql` before continuing to the next task:

    ```sql
    quit
    ```

12. Connect to `EVENTS_BACKUP` and confirm that the same `LinkDown` event replicated:

    ```sh
    $OMNIHOME/bin/nco_sql -server EVENTS_BACKUP -user root -password 'netcool'
    ```

    At the `nco_sql` prompt, run the same query:

    ```sql
    SELECT Identifier, Node, Summary, Severity, AlertGroup, Manager
    FROM alerts.status
    WHERE Node = 'routerA';
    go
    ```

   Confirm that the event appears in both ObjectServers with the expected mapped fields.

   13. Stop the manually started gateway before continuing to Section 8.6. This prevents the Process Agent-managed gateway from starting while the manually launched gateway is still using the same configuration and communications endpoint:

      ```sh
      pkill -f nco_g_objserv_bi
      ```

      Confirm that the manually started gateway process has stopped:

      ```sh
      ps -ef | grep nco_g_objserv_bi | grep -v grep
      ```

      The process check should produce no gateway process before you add the gateway to Process Agent.

## Validation

The exercise is successful when:

- The syslogd probe is running and accepts the `logger` event.
- The `LinkDown` event appears in `EVENTS`.
- The same event appears in `EVENTS_BACKUP`.
- The expected standard and custom field mappings are present in the replicated event.

---

# 8.6 Add the gateway to Process Agent

## Objective


As we did earlier with the backup ObjectServer and the probes, we will now add the gateway to process control to ensure the process becomes part of the Netcool/OMNIbus installation ecosystem.

1. Back up the Process Agent configuration:

   ```sh
   cp $OMNIHOME/etc/nco_pa.conf \
     $OMNIHOME/etc/nco_pa.conf.before-events-backup-gateway
   ```

2. Edit `nco_pa.conf`:

    ```sh
    vi $OMNIHOME/etc/nco_pa.conf
    ```

3. Add a process definition for our gateway. Be sure to update the Host entry to your server FQDN:

   ```conf
   nco_process 'EventsBackupBidirectionalGateway'
   {
           Command '$OMNIHOME/bin/nco_g_objserv_bi -propsfile $OMNIHOME/gates/events_backup/objserv_bi.props' run as 0
           Host = '<YOUR-FQDN>'
           Managed = True
           RestartMsg = '${NAME} running as ${EUID} has been restored on ${HOST}.'
           AlertMsg = '${NAME} running as ${EUID} has died on ${HOST}.'
           RetryCount = 0
           ProcessType = PaNOT_PA_AWARE
   }
   ```

4. Add the gateway to the existing `BackupObjectServerService`:

   ```conf
   nco_service 'BackupObjectServerService'
   {
           ServiceType = Non-Master
           ServiceStart = Non-Auto
           process 'BackupObjectServer' NONE
           process 'EventsBackupBidirectionalGateway' 'BackupObjectServer'
   }
   ```

   The gateway depends on `BackupObjectServer` because it must connect to `EVENTS_BACKUP` when it starts. Declaring the dependency lets Process Agent start the backup ObjectServer before the gateway and manage the gateway in the same operational service.

5. Save the configuration.

6. Restart Process Agent so it reads the revised configuration:

   ```sh
   nco_pa_shutdown
   ```

   At the shutdown prompt, select option `2` to shut down Process Agent and stop all managed processes. Because this lab uses `-authenticate NONE`, press Enter at any login or password prompt.

   Restart Process Agent:

   ```sh
   nco_pad -authenticate NONE
   ```

   Confirm that Process Agent is available again:

   ```sh
   nco_pa_status
   ```

   Expected output:

   ```text
   [root@ibm-training-server1 omnibus]# nco_pa_status

   Login Password:

   ---------------------------------------------------------------------------------------------------------------------------------

   Service Name               Process Name                      Hostname                           User        Status           PID

   ---------------------------------------------------------------------------------------------------------------------------------

   Core                       MasterObjectServer                ibm-training-server1.dcimusic.com  root        RUNNING      1141965

   BackupObjectServerService  BackupObjectServer                ibm-training-server1.dcimusic.com  root        DEAD               0

                             EventsBackupBidirectionalGateway  ibm-training-server1.dcimusic.com  root        DEAD               0

   Probes                     SyslogdProbe                      ibm-training-server1.dcimusic.com  root        RUNNING      1142072

                             MttrapdProbe                      ibm-training-server1.dcimusic.com  root        RUNNING       1142073

   ---------------------------------------------------------------------------------------------------------------------------------
   ```

7. Start the backup ObjectServer service, which now includes the gateway:

    ```sh
   nco_pa_start -service BackupObjectServerService
    ```

8. Check Process Agent status:

    ```sh
    nco_pa_status
    ```

   Expected output:

   ```text
   [root@ibm-training-server1 omnibus]# nco_pa_status

   Login Password:

   ---------------------------------------------------------------------------------------------------------------------------------

   Service Name               Process Name                      Hostname                           User        Status           PID

   ---------------------------------------------------------------------------------------------------------------------------------

   Core                       MasterObjectServer                ibm-training-server1.dcimusic.com  root        RUNNING      1144846

   BackupObjectServerService  BackupObjectServer                ibm-training-server1.dcimusic.com  root        RUNNING      1145176

                             EventsBackupBidirectionalGateway  ibm-training-server1.dcimusic.com  root        RUNNING      1145215

   Probes                     SyslogdProbe                      ibm-training-server1.dcimusic.com  root        RUNNING      1144966

                             MttrapdProbe                      ibm-training-server1.dcimusic.com  root        RUNNING      1144848

   ---------------------------------------------------------------------------------------------------------------------------------
   ```

   Run `nco_pa_status` a couple of times and compare the PIDs for `BackupObjectServer` and `EventsBackupBidirectionalGateway`. The PIDs should remain stable. If either PID changes, Process Agent is restarting that process, which indicates that the process is exiting and there is likely a configuration or runtime error. Inspect the Process Agent and gateway/ObjectServer logs before continuing.

## Validation

The `BackupObjectServerService` should show both `BackupObjectServer` and `EventsBackupBidirectionalGateway` as `RUNNING`. If the gateway is `DEAD`, inspect the gateway logfile first, then inspect the Process Agent log.

---

# 8.7 Validate bidirectional replication

## Objective

Prove that alert inserts and custom-field updates replicate from `EVENTS` to `EVENTS_BACKUP` and from `EVENTS_BACKUP` to `EVENTS`.

Use a unique identifier for each test.

## Test A: EVENTS to EVENTS_BACKUP

1. Connect to `EVENTS`:

   ```sh
   $OMNIHOME/bin/nco_sql \
     -server EVENTS \
     -user root \
     -password 'netcool'
   ```

2. Create a controlled test event. 

   ```sql
   INSERT INTO alerts.status
   (
     Identifier,
     Node,
     Summary,
     Severity,
     AlertGroup,
     Manager,
     CustomerID
   )
   VALUES
   (
     'LAB-GW-<initials>-A',
     'gateway-lab',
     'EVENTS to EVENTS_BACKUP replication test',
     1,
     'GatewayLab',
     'LabGateway',
     'custom value from EVENTS'
   );
   go
   ```

3. Connect to `EVENTS_BACKUP` and verify the event and custom field:

    ```sql<gateway-binary>
    SELECT Identifier, Node, Summary, Severity, AlertGroup, Manager, CustomerID
    FROM alerts.status
    WHERE Identifier = 'LAB-GW-<initials>-A';
    go
    ```

4. On `EVENTS`, update the custom field:

    ```sql
    UPDATE alerts.status
    SET CustomerID = 'updated value from EVENTS'
    WHERE Identifier = 'LAB-GW-<initials>-A';
    go
    ```

5. On `EVENTS_BACKUP`, verify the updated custom field value.

## Test B: EVENTS_BACKUP to EVENTS

1. Connect to `EVENTS_BACKUP`.

2. Create a second controlled test event:

   ```sql
   INSERT INTO alerts.status
   (
     Identifier,
     Node,
     Summary,
     Severity,
     AlertGroup,
     Manager,
     CustomerID
   )
   VALUES
   (
     'LAB-GW-<initials>-B',
     'gateway-lab',
     'EVENTS_BACKUP to EVENTS replication test',
     1,
     'GatewayLab',
     'LabGateway',
     'custom value from EVENTS_BACKUP'
   );
   go
   ```

3. Connect to `EVENTS` and verify the event and custom field:

    ```sql
    SELECT Identifier, Node, Summary, Severity, AlertGroup, Manager, CustomerID
    FROM alerts.status
    WHERE Identifier = 'LAB-GW-<initials>-B';
    go
    ```

4. On `EVENTS_BACKUP`, update `CustomerID` and confirm the updated value appears on `EVENTS`.

## Validation

The lab is successful when:

- An event inserted in `EVENTS` appears in `EVENTS_BACKUP`.
- An event inserted in `EVENTS_BACKUP` appears in `EVENTS`.
- Updates to the selected custom field replicate in both directions.
- The gateway process remains `RUNNING` in `nco_pa_status`.
- The gateway log contains no repeated mapping, connection, or replication errors.

---

# 8.8 Clean up test events

## Objective

Remove the controlled test events after replication has been validated.

Delete the test events from either ObjectServer, then verify that the deletion replicates to the other ObjectServer.

For example:

```sql
DELETE FROM alerts.status
WHERE Identifier IN ('LAB-GW-<initials>-A', 'LAB-GW-<initials>-B');
go
```

Confirm that neither test identifier remains on either ObjectServer.

## Validation

The test alerts are removed from both `EVENTS` and `EVENTS_BACKUP`.

---

# Lab summary

In this lab, you:

- Verified that `EVENTS` and `EVENTS_BACKUP` have compatible alert schemas.
- Created a dedicated configuration area for a bidirectional gateway.
- Configured gateway properties to connect both ObjectServers.
- Verified mappings for standard and custom `alerts.status` fields.
- Tested the gateway manually and reviewed its log.
- Added the gateway to Process Agent as a non-PA-aware managed process.
- Validated event creation and custom-field updates in both replication directions.
- Removed the controlled test alerts.

The key operational principle is:

```text
Compatible schema
  + explicit field mapping
  + controlled gateway configuration
  + bidirectional validation
  = reliable ObjectServer synchronization
```

A gateway is not a substitute for schema management. Keep both ObjectServers structurally compatible, then use the map file to determine which values are synchronized and how they are transformed.
