# IBM Tivoli Netcool/OMNIbus architecture

```mermaid
flowchart LR
    %% Event intake
    subgraph S[Event sources]
      direction TB
      N[Network devices\nSNMP traps]
      A[Applications\nstatus and alarms]
      O[Operating systems\nsyslog and process events]
      M[Management platforms]
    end

    P[Probes\nCollect • tokenize • apply rules\nMap source data to OMNIbus fields]

    subgraph OM[IBM Tivoli Netcool/OMNIbus]
      OS[(ObjectServer\nIn-memory alert database\nActive alerts)]
      AU[Automation\nDeduplication • correlation\nTriggers and automatic responses]
      OS <--> AU
    end

    subgraph C[Operator and administrator access]
      EL[Event List\nAcknowledge • assign • update]
      WG[Web GUI\nEvent lists • filters • dashboards]
      DT[Desktop and administration tools\nEvent review • configuration]
    end

    subgraph I[Alert movement and integration]
      GW[Gateways]
      OS2[(Remote ObjectServer\nReplication / failover)]
      EX[External systems\nTicketing • databases\nManagement platforms]
    end

    S -->|Raw events| P
    P -->|Normalized OMNIbus alerts| OS
    OS -->|Live alert data| EL
    OS -->|Live alert data| WG
    OS -->|Live alert data| DT
    OS -->|Alerts| GW
    GW -->|Replicate alerts| OS2
    GW -->|Export / synchronize alerts| EX

    classDef source fill:#e8f1fb,stroke:#2563a9,color:#102a43,stroke-width:1.5px;
    classDef process fill:#fff5d6,stroke:#b7791f,color:#4a2c00,stroke-width:1.5px;
    classDef core fill:#e7f7ed,stroke:#277a4b,color:#123b24,stroke-width:2px;
    classDef client fill:#f2eafb,stroke:#7441a4,color:#321653,stroke-width:1.5px;
    classDef integration fill:#fdecec,stroke:#b64343,color:#571515,stroke-width:1.5px;

    class N,A,O,M source;
    class P process;
    class OS,AU core;
    class EL,WG,DT client;
    class GW,OS2,EX integration;
```

**Primary pipeline:** Event sources → Probes → ObjectServer → Automation and operator views.

**Integration path:** ObjectServer → Gateways → Remote ObjectServers and external systems.
