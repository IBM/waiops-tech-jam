# IBM Netcool Training Track

**Format:** Instructor-led, hands-on labs  
**Total duration:** 4.5 days  
**Audience:** Network operations engineers, NOC staff, and system administrators responsible for deploying or administering IBM Tivoli Netcool/OMNIbus and Netcool Impact

---

## Overview

This training track covers IBM Tivoli Netcool/OMNIbus and IBM Netcool Impact from the ground up. The two labs are designed to be taken in sequence — the Impact lab builds directly on the OMNIbus environment you construct in the first lab. By the end of the track, you will have built a complete, layered event management and automation pipeline from scratch.

```
Probe → ObjectServer → OMNIbus Web GUI
                    ↓
              Netcool Impact
                    ↓
         Enrichment · Escalation · Automation
```

---

## Lab 1 — Netcool/OMNIbus

**Duration:** 2.5 days (~20 hours)

### What you build

Starting from a bare Linux server with OMNIbus installed, you configure the full event management stack:

- **ObjectServer** — start and manage the `EVENTS` ObjectServer; add custom columns; configure users and groups; inspect and understand the built-in triggers (`deduplication`, `generic_clear`, `expire`)
- **Syslog probe** — configure `nco_p_syslogd` with iterative custom rules: field extraction, switch/case mapping, `@Identifier`-based deduplication, `LinkUp`/`LinkDown` correlation, `LinkUtilization` severity logic, a lookup table, discard rules, and `@ExpireTime`
- **SNMP probe (MTTrapd + NcKL)** — configure `nco_p_mttrapd` with the NcKL rules engine; import a custom IBM training MIB using MIB Manager; customize generated rules with a user include file and a severity lookup file
- **Process Agent** — register all processes (`ObjectServer`, `SyslogdProbe`, `MttrapdProbe`) in `nco_pa.conf` and control them as managed services
- **ObjectServer clone** — export, initialize, and run `EVENTS_BACKUP` as a second independent ObjectServer
- **Bidirectional gateway** — configure `nco_p_objserv_bi` to replicate inserts, updates, and deletes — including custom columns — between `EVENTS` and `EVENTS_BACKUP`

### Lab materials

| Document | Description |
|----------|-------------|
| [OMNIbus Lab Guide](OMNIBUS/markdown/omnibus-lab-guide.md) | Full lab guide index — links to all section files |
| [OMNIbus Student Schedule](OMNIBUS/markdown/student-schedule.md) | Day-by-day student schedule with time blocks and checkpoints |

---

## Lab 2 — Netcool Impact

**Duration:** 2 days (~15 hours)
**Prerequisite:** Completion of Lab 1 — the Impact lab uses the `EVENTS` ObjectServer and `alerts.status` schema built in the OMNIbus lab

### What you build

Starting from a running OMNIbus environment, you configure Impact to add enrichment, automation, and intelligence to the event stream:

- **Data source adapters** — configure the `defaultobjectserver` ObjectServer DSA and a DB2 JDBC DSA (`CMDB`) with structured data types for `alerts.status` and `DEVICE_INVENTORY`
- **Event enrichment** — write `AA_EnrichAlert`, an IPL policy that looks up each new alert in the CMDB and writes `CustomerID`, `Service`, and `ServiceLevel` back to the alert in real time; configure the `EnrichmentEventReader` OMNIbusEventReader service to drive it
- **Deferred enrichment** — write `AA_DeferredEnrichment`, a `PolicyActivator`-driven scheduled policy that retries failed enrichments with a `Poll`-counter retry limit
- **Event escalation** — write `AA_EscalatePlatinum`, a time-based policy that progressively raises severity on unacknowledged Platinum-tier alerts and sets the `Flash` field at maximum severity
- **Hibernation** — write `AA_PingVerify`, a policy that pings a node on a down event, hibernates for 60 seconds, pings again, and clears or escalates the event based on the second result
- **Java integration** — call `java.util.Arrays.sort()` from IPL using `JavaCall` and run the policy on demand from the editor
- **Data-driven automation** — write `AA_EvalActionPolicy`, which queries a `TAKEACTION` rule table from the CMDB and uses `Eval` to test each stored filter expression against the incoming event; add new rules with a database insert — no policy edits required
- **Project management** — create `ImpactLabProject`; export with `nci_export`; simulate a configuration loss; restore with `nci_import`
- **User access** — grant scoped and full administrative access to a second user using `mapRoles.sh`

### Lab materials

| Document | Description |
|----------|-------------|
| [Impact Lab Guide](IMPACT/markdown/impact-lab-guide.md) | Full lab guide index — links to all section files |
| [Impact Student Schedule](IMPACT/markdown/student-schedule.md) | Day-by-day student schedule with time blocks and checkpoints |

---

## Full Track Schedule at a Glance

| Day | Lab | Focus |
|-----|-----|-------|
| Day 1 | OMNIbus | Environment access · ObjectServer · users · schema · triggers · properties |
| Day 2 | OMNIbus | Syslog probe · rules development · SNMP / MTTrapd · NcKL |
| Day 3 (AM) | OMNIbus | NcKL customization · Process Agent · ObjectServer cloning · Bidirectional gateway |
| Day 3 (PM) | Impact | Architecture · UI navigation · DSA configuration · IPL fundamentals |
| Day 4 | Impact | Event enrichment · Scheduled automation · Deferred enrichment · Escalation |
| Day 5 (AM) | Impact | Hibernation · Java calls · Eval/data-driven actions · Projects · User access |

---

## Lab Environment

Both labs run on a single Linux virtual machine per student. The VM has the following components pre-installed:

| Component | Version | Notes |
|-----------|---------|-------|
| IBM Tivoli Netcool/OMNIbus | 8.1 | ObjectServer, probes, Process Agent, Web GUI (JazzSM) |
| IBM Netcool Impact | 7.1 | Impact Server, GUI Server |
| IBM DB2 | — | Used by Impact lab for CMDB enrichment data |
| SNMP tools | — | `snmptrap`, `snmpwalk` for MTTrapd exercises |

Students access the VM via SSH. OMNIbus native GUI clients (Administrator, Event List, MIB Manager) run on a Windows workstation connected to the lab network.

---

## Prerequisites

Students should be comfortable with:

- Linux command line — file editing, process management, environment variables
- Basic networking concepts — IP addressing, SNMP, syslog
- Basic SQL — `SELECT`, `INSERT`, `UPDATE`, `ALTER TABLE`
- Basic programming concepts — variables, conditionals, loops (no specific language required)

No prior Netcool experience is assumed.
