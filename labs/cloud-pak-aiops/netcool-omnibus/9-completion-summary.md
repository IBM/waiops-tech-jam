---
title: "OMNIbus Lab — Completion Summary"
sidebar_position: 9
---

Congratulations on completing the Netcool/OMNIbus lab guide. Across eight sections you have built a fully working Netcool/OMNIbus event management environment from scratch — from establishing the lab foundation on day one to connecting two ObjectServers with a bidirectional gateway on the last. This page summarises what you covered in each section and the skills you have developed along the way.

---

### Section 1 — OMNIbus Fundamentals

You learned what IBM Tivoli Netcool/OMNIbus is and how it fits into an IT operations environment. You explored the core pipeline — **source → probe → ObjectServer → automation → operator** — and studied the key components: probes, the ObjectServer, gateways, the Event List, and the Web GUI. You established the terminology — events, alerts, deduplication, correlation, triggers, rules files, and journals — that carries through the rest of the guide.

---

### Section 2 — ObjectServer and Event Model

You connected to the lab server via SSH, set the required OMNIbus environment variables, and started the ObjectServer and JazzSM Web GUI. You configured the Windows Servers Editor, validated connectivity from the native Event List client and Netcool/OMNIbus Administrator, and logged in to the browser-based Web GUI. You then worked with events as an operator — prioritizing severity, acknowledging alerts, adding journal entries, escalating events, and switching between filters and views. You started the Simnet probe and observed deduplication in real time through the `FirstOccurrence`, `LastOccurrence`, and `Count` fields.

---

### Section 3 — The OMNIbus ObjectServer Database

You used Netcool/OMNIbus Administrator to create the `netcool` user, assign ObjectServer group membership, and assign Web GUI roles — understanding the two-layer security model that separates database access from UI feature access. You used `nco_sql` to create a second user, `jdoe`, and assign group membership via SQL. You inspected the `alerts.status` schema, added the custom columns `CustomerID` and `CircuitID`, and examined the three default ObjectServer triggers — `deduplication`, `generic_clear`, and `expire` — that govern event lifecycle automatically. Finally, you enabled the ObjectServer REST API by modifying properties, restarting the ObjectServer, and validating with `curl`.

---

### Section 4 — Probes and Rules Development

You configured and started the `nco_p_syslogd` probe, inspected its properties and rules files, and observed what an unmapped event looks like before rules processing. You then built a complete probe rules file from scratch across eleven progressive labs: the ProbeWatch stanza, basic field mapping, `extract()` with regular expressions for `@EventId`, `switch/case` branching, `@Identifier` design for deduplication, Type 1 / Type 2 correlation for `LinkDown` / `LinkUp` auto-clearing, conditional severity logic with `if/else if`, lookup table enrichment populating `@CustomerID` and `@Service`, event discarding with `discard`, `@ExpireTime` for automatic alert expiry, and selective raw capture control with `%RawCapture`.

---

### Section 5 — SNMP Trap Processing with MTTrapd and NcKL

You configured the `nco_p_mttrapd` probe with the NcKL rules framework, ran the NcKL schema setup script, and set the `NC_RULES_HOME` environment variable. You tested the pipeline end-to-end with standard IF-MIB `linkDown` / `linkUp` traps and inspected the rawcapture token structure. You then built and loaded the **IBM-TRAINING-MIB** — defining three custom trap types (`serverDown`, `serverUp`, `diskUtilization`) — using MIB Manager on Windows, exported it as NcKL-compatible rules files, transferred and integrated them into the NcKL include structure, and customized the user include file to fix `@Summary`, `@Identifier`, `@AlertKey`, and `@AlertGroup`. You tuned `@Severity`, `@Type`, and `@ExpireTime` in the severity lookup file and validated all four trap types.

---

### Section 6 — Managing OMNIbus Processes with Process Agent

You extended `nco_pa.conf` to define the syslogd and MTTrapd probes as managed `PaNOT_PA_AWARE` processes, grouped them in a new `Probes` service with `ServiceStart = Auto`, and restarted `nco_pad` to validate automatic startup. You used `nco_pa_stop` and `nco_pa_start` to control an individual probe without affecting the ObjectServer, then stopped and started the entire `Probes` service as a single operational unit. You reviewed the completed configuration and understood how process definitions, service definitions, and the routing table relate to the observed runtime state reported by `nco_pa_status`.

---

### Section 7 — Cloning an ObjectServer with nco_osreport and nco_dbinit

You exported the `AGG_P` ObjectServer configuration with `nco_osreport -dbinit`, reviewed the six generated SQL files, and deliberately omitted `alertsdata.sql` to create a clean configuration clone. You initialized `EVENTS_BACKUP` with `nco_dbinit`, added a unique communications endpoint to `omni.dat` on port 4101, and regenerated the interfaces file with `nco_igen`. You added `BackupObjectServer` as a `PaPA_AWARE` process in a `Non-Auto` service, restarted Process Agent, and started the clone on demand. You validated that the clone carries the full schema — including `CustomerID`, `CircuitID`, and the `jdoe` user — but contains zero historical alert rows.

---

### Section 8 — Configuring a Bidirectional ObjectServer Gateway

You confirmed schema compatibility between `AGG_P` and `EVENTS_BACKUP`, created a dedicated gateway configuration directory from the `objserv_bi` template, and configured the gateway properties to connect both ObjectServers as `EVENTS_GATE`. You added explicit mappings for the `CustomerID` and `CircuitID` custom fields to the map file, registered the gateway in `omni.dat`, and started it manually to validate one-direction replication before adding it to Process Agent. You placed the gateway inside the `BackupObjectServerService` with a `BackupObjectServer` dependency, then ran bidirectional validation tests — inserting from each ObjectServer, updating the `CustomerID` field, and confirming that inserts, updates, and deletes all propagated in both directions.

---

### What you built

Over the course of the lab you assembled a complete, layered Netcool/OMNIbus environment running on a single lab server:

| Component | Purpose |
|---|---|
| `AGG_P` ObjectServer | Primary in-memory alert database; managed by Process Agent in the `Core` service |
| `EVENTS_BACKUP` ObjectServer | Schema-identical clone; started on demand via the `BackupObjectServerService` |
| `EVENTS_GATE` (bidirectional gateway) | Replicates inserts, updates, and deletes between both ObjectServers in both directions |
| `nco_p_syslogd` + `syslogd-training.rules` | Custom syslogd probe with full rules pipeline: extraction, switch/case, deduplication, correlation, lookup enrichment, discard, expiry, and selective raw capture |
| `nco_p_mttrapd` + NcKL + IBM-TRAINING-MIB | MTTrapd probe using the NcKL framework with a custom MIB, user include customizations, and severity lookup tuning |
| `Probes` service (Process Agent) | Both probes managed together as an auto-started, independently controllable service group |
| Web GUI (JazzSM) | Browser-based event management with custom `SyslogdProbe` filter, `SyslogdView` view, and `SNMP Traps` filter |
| `alerts.status` custom schema | `CustomerID` and `CircuitID` columns added to the default schema and replicated to the clone |

---

### Key files created

| File | Purpose |
|---|---|
| `$OMNIHOME/probes/linux2x86/syslogd-training.rules` | Complete syslogd probe rules file with all lab concepts applied |
| `$OMNIHOME/probes/linux2x86/CUSTOMERS.lookup` | Lookup table mapping router names to customer names and service tiers |
| `$NC_RULES_HOME/include-snmptrap/ibmTraining/` | NcKL rules, severity lookup, and user include files for the IBM-TRAINING-MIB |
| `$NCHOME/etc/omni.dat` | Communications endpoints for AGG_P (4100), EVENTS_BACKUP (4101), EVENTS_GATE (4102) |
| `$OMNIHOME/etc/nco_pa.conf` | Process Agent configuration managing all five processes across three services |
| `$OMNIHOME/gates/events_backup/objserv_bi.props` | Gateway instance properties: names, credentials, map file and startup command paths |
| `$OMNIHOME/gates/events_backup/objserv_bi.map` | Gateway field mapping including standard alert fields and custom `CustomerID` / `CircuitID` columns |

---

### Where to go next — Netcool/Impact

The OMNIbus environment you have built is the foundation for the Netcool/Impact training that follows. Impact connects to the `AGG_P` ObjectServer you configured here, queries the same `alerts.status` fields you know intimately, and uses the same `CustomerID` and `CircuitID` columns you added. The patterns you practised here translate directly.

- The **ObjectServer DSA** in Impact connects to `AGG_P` — the same server you have been managing throughout this lab.
- Impact policies read and write the same `alerts.status` fields you mapped in probe rules — `Node`, `AlertGroup`, `AlertKey`, `Severity`, `Identifier`, and your custom columns.
- The **deduplication** and **generic_clear** triggers you studied in Section 3 interact directly with Impact-written events — understanding them makes Impact automation easier to reason about.
- The **NcKL-enriched SNMP traps** from Section 5 are the kind of real-world events Impact is built to act on — escalate, enrich, correlate, and dispatch.
- Process Agent from Section 6 can also manage the Impact server process in production environments, using the same `nco_pa.conf` model you configured here.
