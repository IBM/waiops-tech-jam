---
title: "Impact lab completion summary"
sidebar_position: 12
---

Congratulations on completing the Netcool Impact lab guide. Across eleven sections you have built a fully working Impact automation environment from scratch — from configuring data source adapters on day one to managing user access on the last. This page summarises what you covered in each section and the skills you have developed along the way.

---

### Section 1 — Impact fundamentals and UI navigation

You learned what IBM Netcool Impact is and how it fits into the OMNIbus architecture. You explored the Impact GUI, navigated the main tabs — **Policies**, **Services**, **Data Model**, **Operator View**, and **Maintenance Window** — and established the lab environment conventions that carried through the rest of the guide.

---

### Section 2 — Data source adapters

You configured the two data sources used throughout the lab: the **ObjectServer DSA** (`defaultobjectserver`) connecting Impact to the OMNIbus EVENTS ObjectServer, and the **DB2 CMDB DSA** (`CMDB`) connecting Impact to the device inventory database. You created the `DEVICE_INVENTORY` data type and validated both connections.

---

### Section 3 — Impact policy language

You learned the IPL syntax fundamentals: variables, conditionals, loops, `GetByFilter`, `Log`, direct field assignment, `ReturnEvent`, and `DirectSQL`. You worked through the key patterns that appear in every policy in the lab — reading event fields from `EventContainer`, querying external data, writing results back to the ObjectServer, and understanding when to use `ReturnEvent` versus `DirectSQL`.

---

### Section 4 — Event enrichment

You wrote your first production-style policy, `AA_EnrichAlert`, which queries the `DEVICE_INVENTORY` CMDB table and writes customer, service, and location data back to incoming alerts. You configured the `EnrichmentEventReader` OMNIbusEventReader service to trigger the policy on new events, and validated the full enrichment pipeline — both the found path (`ImpactFlag = 1`) and the not-found path (`ImpactFlag = 2`).

---

### Section 5 — Scheduled automation

You extended the enrichment pipeline to handle events that could not be enriched on first attempt — nodes not yet in the CMDB. The `AA_DeferredEnrichment` policy and its `DeferredEnrichmentActivator` PolicyActivator service poll every 60 seconds, retry enrichment for `ImpactFlag = 2` events, and enforce a retry limit using the `Poll` counter field. You validated the retry loop and confirmed that alerts exceeding the retry limit are silently dropped from further processing.

---

### Section 6 — Event escalation

You added a `SERVICE_LEVEL` dimension to the enrichment pipeline and wrote `AA_EscalatePlatinum`, a time-based escalation policy that progressively raises the severity of unacknowledged Platinum-tier alerts. You learned why age-based escalation requires a PolicyActivator rather than an event reader, how to write back to the ObjectServer using `DirectSQL` from a scheduled policy, and how to use the `Flash` field to drive visual notifications in the Web GUI.

---

### Section 7 — Automation and hibernation

You wrote `AA_PingVerify`, a policy that uses `JRExecAction` to ping a node and confirm whether a failure is real before raising severity. You used the **Hibernate** function to pause policy execution and re-evaluate after a delay, and extended the `EnrichmentEventReader` service with a second mapping row to trigger the ping policy selectively. You validated both the reachable-node path (event clears) and the unreachable-node path (severity is raised after hibernation).

---

### Section 8 — Making a Java call

You learned how to call Java methods directly from IPL using `JavaCall`. The exercise demonstrated the four-argument calling convention — class name, object instance, method name, argument array — using `java.util.Arrays.sort()` as a clear, verifiable example. You also used the policy editor's **Run** icon to execute a policy on demand without attaching it to a service, establishing a useful testing pattern.

---

### Section 9 — Using the Eval function

You built a fully data-driven action policy using `Eval`. The `AA_EvalActionPolicy` queries a `TAKEACTION` rule table in the CMDB, evaluates the current event against each stored filter expression at runtime, and dispatches the corresponding action — email or suppression — without any hardcoded conditions in the policy code itself. You demonstrated that adding a new automation rule requires only a database insert, with no policy changes or redeployment.

---

### Section 10 — Organizing artifacts using projects

You used the Impact **project selector** to create `ImpactLabProject` and populate it with all of the lab's data sources, data types, policies, and services. You learned how projects scope the Policies and Services views to show only the relevant artifacts. You then used `nci_export` to export the project from the command line, deliberately deleted two artifacts to simulate a configuration loss, and used `nci_import` to restore them — directly demonstrating the rollback use case.

---

### Section 11 — Granting users access to Impact

You learned how Impact's role-based access control model works. You observed the blank workspace presented to an authenticated but unmapped user, granted the `ncoadmin` account the Maintenance Window Manager roles to give it scoped access, and then granted it the `impactAdminUser` role to give it full administrative access. You understand the distinction between authentication (handled by the ObjectServer in this lab) and authorization (controlled by role mappings applied with `mapRoles.sh`).

---

### What you built

Over the course of the lab you assembled a complete, layered Impact automation environment:

| Component | Purpose |
|---|---|
| `AA_EnrichAlert` + `EnrichmentEventReader` | Real-time enrichment of incoming alerts from the CMDB |
| `AA_DeferredEnrichment` + `DeferredEnrichmentActivator` | Scheduled retry enrichment with a poll-count limit |
| `AA_EscalatePlatinum` + `EscalationActivator` | Time-based severity escalation for Platinum-tier alerts |
| `AA_PingVerify` + `HibernatingPolicyActivator` | Ping-based verification with hibernation before severity raise |
| `AA_JavaSortDemo` | Demonstration of Java runtime integration via `JavaCall` |
| `AA_EvalActionPolicy` + `EvalActionEventReader` | Data-driven action dispatch using `Eval` and a CMDB rule table |
| `ImpactLabProject` | Project packaging all artifacts for export, import, and recovery |

Each layer built on the one before it. Real-time enrichment feeds deferred enrichment. Enrichment populates the `ServiceLevel` field that escalation depends on. The hibernation policy reuses the same event pipeline. The Eval policy generalizes the dispatch pattern used throughout.

---

### Where to go next

The patterns you practised here — enrichment, deferred retry, time-based escalation, Java integration, data-driven dispatch, and project-based packaging — are the same patterns used in production Impact deployments. From here you can:

- Explore the **Operator View** tab to build custom event dashboards.
- Configure a real **EmailSender** service and remove the `SendEmail` comment from `AA_EvalActionPolicy`.
- Extend the escalation policy to notify an on-call engineer when an alert reaches severity 5.
- Use `nci_export` on a schedule to maintain regular configuration backups.
- Apply role mappings to additional users or explore LDAP and Keycloak/OIDC authentication for production deployments.
