# Netcool Impact Lab — Student Schedule

**Duration:** 2 days  
**Format:** Instructor-led, hands-on lab  
**Daily hours:** 8:30 AM – 5:00 PM (7.5 hours per day, ~15 hours total)

> This schedule is a guide, not a strict contract. Some sections will take longer depending on your familiarity with IPL, DB2, and the OMNIbus environment you built in the preceding lab. If you fall behind, the instructor will help you catch up. Do not skip sections — each one builds directly on the previous. The enrichment pipeline you build in section 4 is a prerequisite for sections 5, 6, and 7.

---

## Day 1 — Architecture, Data Sources, Policy Language, and Enrichment

### 8:30 AM — Welcome and Environment Check *(30 min)*

- Introductions and course overview
- Instructor distributes lab server IP addresses and credentials
- Verify SSH access and confirm the OMNIbus ObjectServer (`EVENTS`) is running:
  ```bash
  $OMNIHOME/bin/nco_ping EVENTS
  ```
- Set the `IMPACT_HOME` environment variable and add it to `~/.bash_profile`
- Start the Impact Server and GUI server
- Log in to the Impact GUI: `http://<your-server>:17311/ibm/console`
- Open the lab guide index: [`impact-lab-guide.md`](impact-lab-guide.md)

> ✅ **Checkpoint:** SSH access confirmed, ObjectServer running, Impact GUI accessible, and you can log in as `impactadmin`.

---

### 9:00 AM — Section 1: Impact Fundamentals and UI Navigation *(45 min)*

**Reading and discussion + hands-on GUI walkthrough**

- 1.1 Netcool Impact overview — what it does and why it exists
- 1.2 Core architecture: Impact Server, GUI, ObjectServer DSA, services, policies, IPL
- 1.3 How Impact fits into the OMNIbus architecture (probe → ObjectServer → Impact → enriched alert)
- 1.4 Key terms: policy, service, DSA, event reader, EventContainer, GetByFilter, ReturnEvent
- 1.5 Lab environment and assumptions
- 1.6 Hands-on: navigate the Data Model, Policies, Services, Operator View, and Maintenance Window tabs

> **Key takeaway:** Impact enriches and automates — it does not replace OMNIbus. Every hands-on exercise adds a layer to a single, growing pipeline.

---

### 9:45 AM — Section 2: Impact Data Source Adapters (DSAs) *(90 min)*

**Hands-on — Impact GUI + SSH + DB2**

- **2.1** *(30 min)* — Review the pre-configured `defaultobjectserver` ObjectServer DSA; test the connection; understand the difference between a data source and a data type; create the `EVENTS` data type targeting `alerts.status` with `Identifier` as the key field
- **2.2** *(45 min)* — SSH to the lab server; create the `CMDB` database in DB2; create and populate the `DEVICE_INVENTORY` table with eight device records; configure the `CMDB` JDBC DSA in the Impact GUI; create the `DEVICE_INVENTORY` data type with `NODE_NAME` as the key field
- **2.3** *(15 min)* — Validate both layers: test the `CMDB` connection, use View Data Items to confirm all eight rows are returned, review the data type performance report

> ✅ **Checkpoint:** `defaultobjectserver` and `CMDB` DSAs both show **Connection OK**. `EVENTS` and `DEVICE_INVENTORY` data types are saved and visible in the Data Model.

---

### 11:15 AM — Break *(15 min)*

---

### 11:30 AM — Section 3: Impact Policy Language (IPL) *(90 min)*

**Reading, syntax review, and code exercises — no live policy execution yet**

- **3.1** *(25 min)* — Variables, types, string concatenation, conditionals (`if` / `elseif` / `else`), and `while` loops; write and review example IPL code blocks
- **3.2** *(20 min)* — Accessing event fields via `EventContainer.FieldName`; understand case-sensitivity; review the `alerts.status` fields used in enrichment policies
- **3.3** *(25 min)* — `GetByFilter(dataType, filter, False)` — arguments, result arrays, empty-result guard, single-quote escaping with `Replace()`; review annotated lookup code
- **3.4** *(15 min)* — Writing values back to the ObjectServer: `EventContainer.Field = value` + `ReturnEvent(EventContainer)`; understand when `ReturnEvent` commits changes and when it does not
- **3.5** *(5 min)* — Built-in IPL functions reference overview (`Log`, `Length`, `Replace`, `ToUpper`, `GetDate`, `IsNull`, `ToString`)

> **Key takeaway:** Memorize the read → look up → assign → `ReturnEvent` pattern. It is the skeleton of every enrichment policy in section 4.

---

### 1:00 PM — Lunch *(60 min)*

---

### 2:00 PM — Section 4: Event Enrichment *(150 min)*

**Hands-on — Impact GUI + SSH + OMNIbus Web GUI**

- **4.1** *(35 min)* — Add the `ImpactFlag` integer column to `alerts.status`; write the `AA_EnrichAlert` policy in the IPL editor; understand the `ImpactFlag != 0` re-entry guard; run syntax check; save
- **4.2** *(35 min)* — Create the `EnrichmentEventReader` OMNIbusEventReader service; configure General Settings (`defaultobjectserver`, 3 s polling); add the `ImpactFlag = 0` event mapping row targeting `AA_EnrichAlert`; save and start the service
- **4.3** *(20 min)* — Locate the `PolicyLogger` service; enable **Append policy name to log file name**; restart the Impact Server; confirm both services return to **Running**
- **4.4** *(40 min)* — Create the `ImpactLabEvents` filter and `EnrichmentView` view in the OMNIbus Web GUI; insert a test alert for `db-tok-01` and confirm `CustomerID = CUST-1005` and `ImpactFlag = 1`; insert an alert for `unknownhost99` and confirm `NOT_FOUND` and `ImpactFlag = 2`; check the per-policy log file after each test

> ✅ **Checkpoint:** Live enrichment working end-to-end. Known nodes get `CustomerID` and `Service` populated within seconds. Unknown nodes get `NOT_FOUND`. Policy log file confirms both paths.

---

### 4:30 PM — Day 1 Wrap-Up *(30 min)*

- Instructor recap: the enrichment pipeline you built — ObjectServer → `EnrichmentEventReader` → `AA_EnrichAlert` → CMDB lookup → `ReturnEvent`
- Student questions
- Leave the ObjectServer, Impact Server, and Impact GUI server running overnight
- Review the `ImpactFlag` pattern and be ready to extend it tomorrow with deferred enrichment and escalation

---

## Day 2 — Automation, Escalation, Advanced IPL, and Administration

### 8:30 AM — Day 2 Warm-Up *(15 min)*

- Verify SSH session and confirm all processes are running:
  ```bash
  $OMNIHOME/bin/nco_ping EVENTS
  ```
- Confirm Impact GUI is accessible; confirm `EnrichmentEventReader` service is **Running**
- Brief review of Day 1 key concepts

---

### 8:45 AM — Section 5: Scheduled Automation *(105 min)*

**Hands-on — Impact GUI + SSH + OMNIbus Web GUI**

- **5.1** *(25 min)* — Write the `AA_DeferredEnrichment` policy; understand why a PolicyActivator uses `GetByFilter` instead of `EventContainer`; review the `DirectSQL` write-back pattern; run syntax check; save
- **5.2** *(15 min)* — Create the `DeferredEnrichmentActivator` PolicyActivator service with a 60-second interval; start the service
- **5.3** *(25 min)* — Insert a test alert for `newnode-ams-01`; confirm it reaches `ImpactFlag = 2`; add the node to the CMDB; wait for the deferred policy to retry; confirm enrichment succeeds and `ImpactFlag` becomes `1`
- **5.4** *(20 min)* — Update `AA_DeferredEnrichment` to add `AND Poll < 3` to the `GetByFilter` filter and a `Poll` increment on the failure path using `DirectSQL`; syntax check and save
- **5.5** *(20 min)* — Insert `ghost-node-99`; observe `Poll` incrementing over three cycles in the policy log; confirm the alert drops out of the filter after `Poll = 3`

> ✅ **Checkpoint:** Deferred enrichment retries `ImpactFlag = 2` alerts every 60 seconds. Alerts with `Poll ≥ 3` are silently excluded from further processing.

---

### 10:30 AM — Break *(15 min)*

---

### 10:45 AM — Section 6: Event Escalation *(105 min)*

**Hands-on — Impact GUI + SSH + OMNIbus Web GUI**

- **6.1** *(35 min)* — Add `SERVICE_LEVEL VARCHAR(32)` to the DB2 `DEVICE_INVENTORY` table and `ServiceLevel VARCHAR(32)` to `alerts.status`; re-discover both data types in the Impact Data Model; populate `router-lon-01` and `router-lon-02` with `SERVICE_LEVEL = 'Platinum'`; update `AA_EnrichAlert` to write `ServiceLevel` in both branches
- **6.2** *(25 min)* — Write the `AA_EscalatePlatinum` policy; understand the `GetByFilter` filter (`ServiceLevel = 'Platinum' AND Acknowledged = 0 AND Severity >= 3 AND FirstOccurrence < getdate() - 60 AND NOT (Severity = 5 AND Flash = 1)`); understand the severity-bump vs. Flash branches and `DirectSQL` write-back; syntax check and save
- **6.3** *(20 min)* — Create the `EscalationActivator` PolicyActivator service (60-second interval); start it; restart `EnrichmentEventReader` to pick up the new `ServiceLevel` column
- **6.4** *(25 min)* — Enable Flash notifications in the Web GUI; add a `ServiceLevel` column to your event view; insert Platinum and non-Platinum test alerts; watch severity rise from 3 → 4 → 5 → Flash=1 across successive cycles; confirm `switch-nyc-01` is never escalated; check the policy log and test acknowledgment exclusion

> ✅ **Checkpoint:** Platinum alerts escalate one severity step per 60-second cycle. At severity 5, `Flash = 1` is set. Non-Platinum and acknowledged alerts are excluded. Escalation stops once `Flash = 1`.

---

### 12:30 PM — Lunch *(60 min)*

---

### 1:30 PM — Section 7: Automation and Hibernation *(75 min)*

**Hands-on — Impact GUI + SSH + OMNIbus Web GUI**

- **7.1** *(25 min)* — Start `HibernatingPolicyActivator` and `nci_jrexec`; write the `AA_PingVerify` policy; understand the `ImpactFlag = 88` re-entry guard; understand `JRExecAction`, `Hibernate`, and `RemoveHibernation`; syntax check and save
- **7.2** *(20 min)* — Open `EnrichmentEventReader`; enable **Get Updated Events**; add the second mapping row (`ImpactFlag > 0 AND ImpactFlag <> 88 AND EventId = 'PingFailure'` → `AA_PingVerify`); save; stop and restart the service
- **7.3** *(30 min)* — Insert a `PingFailure` event for `127.0.0.1` (reachable); confirm the event is cleared on first ping; insert a `PingFailure` event for `192.0.2.1` (unreachable); tail the policy log and observe the 60-second hibernate gap, the second ping, and the severity raise; confirm journal entries

> ✅ **Checkpoint:** Reachable nodes clear immediately (no hibernate). Unreachable nodes hibernate 60 seconds, re-ping, and have severity raised. Policy log shows the full sequence for each path.

---

### 2:45 PM — Break *(15 min)*

---

### 3:00 PM — Section 8 & 9: Java Calls and the Eval Function *(60 min)*

**Hands-on — Impact GUI + SSH + DB2**

- **8.1** *(25 min)* — Create the `AA_JavaSortDemo` policy; understand the four-argument `JavaCall` signature (`className`, `null` for static, `methodName`, `{args}`); run the policy using the **Run** icon; confirm `before sort` and `after sort` in the policy log; understand when to use `null` vs. a real object instance
- **9.1** *(10 min)* — Create the `TAKEACTION` table in the `CMDB` database; insert two test rules (email for `router-lon-01` severity 5; suppress for `switch-nyc-01` severity 3); create the `TAKEACTION` data type in the Impact Data Model
- **9.2** *(15 min)* — Write the `AA_EvalActionPolicy`; understand `Eval(filterExpression, EventContainer)` and why it inverts the normal query direction; understand `Split()` for parsing `PARAMS`; syntax check and save
- **9.3** *(10 min)* — Create the `EvalActionEventReader` service (`NotifyFlag = 0` filter); insert test alerts for all three nodes; confirm the email and suppress actions fire; add rule 3 to `TAKEACTION` via DB2 with no policy edit; confirm the new rule fires immediately

> ✅ **Checkpoint:** `JavaCall` sorts an array via `java.util.Arrays.sort()`. The `Eval` policy fires the correct action for each test alert, and a new rule added to the database works without any policy change.

---

### 4:00 PM — Sections 10 & 11: Projects and User Access *(45 min)*

**Hands-on — Impact GUI + SSH**

- **10.1** *(15 min)* — Open the project selector; create `ImpactLabProject`; populate it with all lab data sources, data types, policies, and services; switch to the project scope and confirm the filtered views
- **10.2** *(15 min)* — Run `nci_export` from the command line to export `ImpactLabProject`; delete `AA_EnrichAlert` and `EnrichmentEventReader`; run `nci_import` to restore them; restart the restored service; confirm the enrichment smoke test passes
- **11.1–11.3** *(15 min)* — Log into the Impact GUI as `ncoadmin`; observe the blank workspace (authentication ≠ access); grant `impactMWMAdminUser` + `impactMWMUser` via `mapRoles.sh` and confirm scoped Maintenance Window access; grant `impactAdminUser` and confirm full GUI access

> ✅ **Checkpoint:** `ImpactLabProject` exported and restored successfully. Enrichment smoke test passes after import. `ncoadmin` progresses from blank workspace → Maintenance Window only → full admin access.

---

### 4:45 PM — Course Wrap-Up and Review *(15 min)*

- Instructor-led review of the complete pipeline you built:
  - probe → ObjectServer → `EnrichmentEventReader` → `AA_EnrichAlert` → CMDB → `ReturnEvent` → enriched alert
  - `DeferredEnrichmentActivator` → retry loop with `Poll` limit
  - `EscalationActivator` → Platinum-tier severity escalation
  - `HibernatingPolicyActivator` + `AA_PingVerify` → hibernation-based ping verification
  - `Eval` + `TAKEACTION` table → data-driven action dispatch
  - `ImpactLabProject` + `nci_export` / `nci_import` → artifact packaging and recovery
- Open Q&A
- Where to go next: Operator View dashboards, live EmailSender, LDAP authentication, production escalation thresholds

---

### 5:00 PM — Netcool Impact Lab Course Complete

---

## Quick Reference — What You've Built

By the end of Day 2, your lab environment contains:

| Component | Name | Status |
|-----------|------|--------|
| Real-time enrichment pipeline | `AA_EnrichAlert` + `EnrichmentEventReader` | Running, triggers on `ImpactFlag = 0` |
| Deferred enrichment pipeline | `AA_DeferredEnrichment` + `DeferredEnrichmentActivator` | Running, every 60 s, `Poll < 3` limit |
| Platinum escalation pipeline | `AA_EscalatePlatinum` + `EscalationActivator` | Running, every 60 s |
| Ping verification pipeline | `AA_PingVerify` + `HibernatingPolicyActivator` | Running, hibernates on first ping failure |
| Data-driven action pipeline | `AA_EvalActionPolicy` + `EvalActionEventReader` | Running, triggers on `NotifyFlag = 0` |
| Java demonstration policy | `AA_JavaSortDemo` | Available, run on demand |
| Project archive | `ImpactLabProject` (exported) | `/tmp/impact-exports/ImpactLabProject/` |

## Quick Reference — Key Artifacts Created

| Artifact | Type | Purpose |
|----------|------|---------|
| `defaultobjectserver` / `EVENTS` | DSA + data type | Impact connection to OMNIbus `alerts.status` |
| `CMDB` / `DEVICE_INVENTORY` | DSA + data type | DB2 device inventory for enrichment lookups |
| `CMDB` / `TAKEACTION` | DSA + data type | DB2 rule table for data-driven Eval actions |
| `ImpactFlag` | `alerts.status` column | Workflow flag tracking enrichment state |
| `ServiceLevel` | `alerts.status` column | Service tier used by escalation filter |
| `NotifyFlag` | `alerts.status` column | Workflow flag for Eval action service |
| `DEVICE_INVENTORY` DB2 table | DB2, `CMDB` database | Eight device records with customer and service data |
| `TAKEACTION` DB2 table | DB2, `CMDB` database | Action rules evaluated at runtime with `Eval` |
