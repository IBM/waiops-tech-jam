# OMNIbus Lab Guide

A comprehensive hands-on training guide for IBM Tivoli Netcool/OMNIbus event management platform. You will progress from foundational concepts through practical exercises with the ObjectServer database, probe configuration, and SNMP trap processing.

## Guide Contents

### [1. OMNIbus Fundamentals](./guides/1.-omnibus-fundamentals.md)

**Overview:** Introduces core OMNIbus concepts, architecture, and terminology needed for the rest of the labs.

- **1.1 OMNIbus overview** — Event management platform fundamentals, core components, and the event pipeline (sources → probes → ObjectServer → operators)
- **1.2 Core architecture and components** — Detailed look at event sources, probes, ObjectServer, gateways, client tools, and Web GUI
- **1.3 Event lifecycle in OMNIbus** — How events flow through the system, deduplication, correlation, and operator interaction
- **1.4 Key processes and terminology** — Essential vocabulary and concepts (events, alerts, probes, gateways, rules, triggers, journals, etc.)
- **1.5 Lab environment and assumptions** — Lab setup details, virtual machine components, Windows workstation requirements, and tool access

---

### [2. ObjectServer and Event Model](./guides/2.-objectserver-and-event-model.md)

**Overview:** Hands-on exercises to set up the lab environment and learn basic event interaction patterns.

**Exercises:**

- **2.1 Environment access and tool validation** — Connect to lab server via SSH, start ObjectServer and Web GUI, configure Windows client tools (Servers Editor), validate desktop event list and Netcool/OMNIbus Administrator connectivity, confirm Web GUI access from browser
  
- **2.2 Basic event interaction** — Log in to Web GUI, understand OMNIbus severity levels (0-5: Clear through Critical), prioritize events, acknowledge alerts, view event details and journals, create custom journal entries, use filters and views, introduce simulated event traffic with Simnet probe, observe deduplication behavior (FirstOccurrence, LastOccurrence, Count fields), sort and filter events by severity

---

### [3. The OMNIbus ObjectServer Database](./guides/3.-the-omnibus-objectserver-database.md)

**Overview:** Database structure, user management, security, and data model fundamentals.

**Exercises:**

- **3.1 The ObjectServer users table** — Create new ObjectServer users, assign groups and permissions, understand ObjectServer groups (System, Administrator, Normal, Probe, Gateway, ISQLWrite, ISQL, Netcool_OMNIbus_Admin, Netcool_OMNIbus_User), assign Web GUI application roles, distinguish between ObjectServer groups and Web GUI roles, verify user login and access

- **Additional sections** — Coverage of ObjectServer database tables, alerts.status structure, field types, and how data flows through the system

---

### [4. Probes](./guides/4.-probes.md)

**Overview:** Probe architecture, rules processing, and hands-on probe development.

**Setup & Exercises:**

- **4.0 Lab setup — Event filter and view configuration** — Create dedicated event filters for probe testing, build custom event list views focused on probe fields, configure SyslogdProbe filter to isolate events by Manager field, prepare the Web GUI for probe development exercises

- **4.1+ Probe exercises** — (Additional sections cover probe-specific topics including:)
  - Probe fundamentals and the event collection pipeline
  - Rules file structure and token processing
  - Event normalization and field mapping
  - Building custom probe rules
  - Testing and validating probe behavior in the event list

---

### [5. SNMP Trap Processing with MTTrapd and NcKL](./guides/5.-snmp-trap-processing-with-mttrapd-and-nckl.md)

**Overview:** SNMP trap processing using the MTTrapd probe and Netcool Knowledge Library (NcKL).

**Setup & Content:**

- **5.0 Lab setup** — Create SNMP Traps filter to isolate trap events from other alert sources, prepare views for trap processing

- **5.1 SNMP and MTTrapd overview** — SNMP fundamentals (SNMPv1/v2c/v3), trap concepts, OIDs and MIBs, variable bindings (varbinds), MTTrapd probe architecture and responsibilities

- **Additional sections** — (Further coverage includes:)
  - MTTrapd probe configuration and startup
  - NcKL architecture and vendor-specific rules
  - Custom MIB development and loading
  - Trap rules processing and normalization
  - End-to-end SNMP event pipeline exercises

---

### [6. Managing OMNIbus Processes with Process Agent and nco_pad](./guides/6.-process-agent-and-nco-pad.md)

**Overview:** Configure Process Agent to manage the ObjectServer, Syslogd probe, and MTTrapd probe, then validate process-level and service-level control with `nco_pad` and the `nco_pa_*` command-line tools.

**Setup & Content:**

- **6.0 Process Agent fundamentals** — Understand processes, services, startup behavior, monitoring, recovery, routing, and PA-aware versus non-PA-aware processes
- **6.1 Process Agent configuration** — Add managed probe process definitions and create the automatically started `Probes` service
- **6.2+ Process and service control** — Restart Process Agent, validate automatic startup, stop and start an individual probe, control the complete `Probes` service, and review the routing configuration

---

### [7. Cloning an ObjectServer with nco_osreport and nco_dbinit](./guides/7.-cloning-objectserver-with-nco-osreport-and-nco-dbinit.md)

**Overview:** Export the existing `EVENTS` ObjectServer, review the generated SQL, initialize a clean `EVENTS_BACKUP` clone, register its communications endpoint, and start it as a separately managed backup ObjectServer.

**Setup & Content:**

- **7.0 ObjectServer cloning fundamentals** — Understand the export-review-import workflow and the roles of `nco_osreport` and `nco_dbinit`
- **7.1–7.2 Export and review** — Generate the SQL export and inspect schema, automation, security, desktop, and optional alert-data files
- **7.3–7.6 Initialize and operate the clone** — Create `EVENTS_BACKUP` without historical alerts, configure `omni.dat`, regenerate interfaces, add the clone to Process Agent, and validate its schema and runtime state
- **7.7 Optional alert-data import** — Understand when `-alertsdata` and `-alertsdatafile` are appropriate

---

### [8. Configuring a Bidirectional ObjectServer Gateway](./guides/8.-bidirectional-objectserver-gateway-lab.md)

**Overview:** Configure a bidirectional ObjectServer Gateway between `EVENTS` and `EVENTS_BACKUP`, verify that required custom alert fields are mapped, place the gateway under Process Agent control, and validate alert replication in both directions.

**Setup & Content:**

- **8.1 Verify schema compatibility** — Compare `alerts.status` schemas on both ObjectServers and confirm custom fields are present and compatible before configuring replication
- **8.2 Create a gateway working area** — Set up a dedicated configuration directory by copying the `objserv_bi` template files
- **8.3 Configure the gateway properties** — Set source and destination ObjectServer connections, credentials, map file, and startup command file
- **8.4 Map standard and custom alert fields** — Review the `CREATE MAPPING StatusMap` definition and add explicit mappings for the `CustomerID` and `CircuitID` custom fields
- **8.5 Start the gateway manually and validate operation** — Register the gateway in `omni.dat`, start it manually, and verify that a test `LinkDown` event replicates from `EVENTS` to `EVENTS_BACKUP`
- **8.6 Add the gateway to Process Agent** — Define the gateway as a managed `PaNOT_PA_AWARE` process inside the `BackupObjectServerService`, with a dependency on `BackupObjectServer`
- **8.7 Validate bidirectional replication** — Insert controlled test events from each ObjectServer using `nco_sql` and confirm they appear and update on the other side
- **8.8 Clean up test events** — Delete the test alerts and confirm that deletions also replicate bidirectionally

---

### [Completion Summary](./guides/omnibus-completion-summary.md)

A section-by-section recap of everything you built and learned, a reference table of all key components and files created, and a bridge to the Netcool/Impact training that follows.

---

## Learning Path

You progress through the labs in sequence:

1. **Section 1** establishes conceptual foundations
2. **Section 2** validates the lab environment and introduces event management in practice
3. **Section 3** explores the ObjectServer database and user management
4. **Section 4** builds hands-on probe development and rules expertise
5. **Section 5** applies those skills to SNMP trap processing, a critical real-world use case
6. **Section 6** manages the ObjectServer and probes with Process Agent and validates individual and service-level control
7. **Section 7** clones an ObjectServer into a separately addressable backup or training environment
8. **Section 8** connects the two ObjectServers with a bidirectional gateway and validates alert replication in both directions

By the end of these labs, you will understand the full OMNIbus event pipeline from source through probe to ObjectServer, be able to interact with events in the Web GUI and desktop tools, manage users and security, develop custom probe rules, process SNMP traps from network devices using NcKL and custom MIBs, manage OMNIbus processes with Process Agent, clone ObjectServers for backup or testing, and configure a bidirectional ObjectServer Gateway to synchronize alerts between ObjectServer instances.

