# eval-test-01: router-lon-01 severity 5 — should match rule 1 (email)
$OMNIHOME/bin/nco_sql -server EVENTS -user root -password netcool << 'EOF'
INSERT INTO alerts.status (Node, Summary, AlertKey, AlertGroup, Severity, Type, Identifier, Manager, OwnerUID)
VALUES ('router-lon-01', 'Critical interface failure', 'eval-test-01', 'TrainingAlerts', 5, 1, 'router-lon-01:eval-test-01:TrainingAlerts', 'ImpactLab', 65534);
go
EOF

# eval-test-02: switch-nyc-01 severity 3 — should match rule 2 (suppress)
$OMNIHOME/bin/nco_sql -server EVENTS -user root -password netcool << 'EOF'
INSERT INTO alerts.status (Node, Summary, AlertKey, AlertGroup, Severity, Type, Identifier, Manager, OwnerUID)
VALUES ('switch-nyc-01', 'Minor link degradation', 'eval-test-02', 'TrainingAlerts', 3, 1, 'switch-nyc-01:eval-test-02:TrainingAlerts', 'ImpactLab', 65534);
go
EOF

# eval-test-03: server-fra-01 severity 3 — should match no rule
$OMNIHOME/bin/nco_sql -server EVENTS -user root -password netcool << 'EOF'
INSERT INTO alerts.status (Node, Summary, AlertKey, AlertGroup, Severity, Type, Identifier, Manager, OwnerUID)
VALUES ('server-fra-01', 'Disk usage warning', 'eval-test-03', 'TrainingAlerts', 3, 1, 'server-fra-01:eval-test-03:TrainingAlerts', 'ImpactLab', 65534);
go
EOF
