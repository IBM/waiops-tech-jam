$OMNIHOME/bin/nco_sql -server AGG_P -user root -password netcool << 'EOF'
INSERT INTO alerts.status (Node, Summary, AlertKey, AlertGroup, Severity, Type, Identifier, Manager, OwnerUID)
VALUES ('router-lon-01', 'Escalation test — Platinum node', 'escalate-platinum-01', 'TrainingAlerts', 3, 1, 'router-lon-01:escalate-platinum-01:TrainingAlerts', 'ImpactLab', 65534);
go
EOF

$OMNIHOME/bin/nco_sql -server AGG_P -user root -password netcool << 'EOF'
INSERT INTO alerts.status (Node, Summary, AlertKey, AlertGroup, Severity, Type, Identifier, Manager, OwnerUID)
VALUES ('router-lon-02', 'Escalation test — Platinum node', 'escalate-platinum-02', 'TrainingAlerts', 3, 1, 'router-lon-02:escalate-platinum-02:TrainingAlerts', 'ImpactLab', 65534);
go
EOF

$OMNIHOME/bin/nco_sql -server AGG_P -user root -password netcool << 'EOF'
INSERT INTO alerts.status (Node, Summary, AlertKey, AlertGroup, Severity, Type, Identifier, Manager, OwnerUID)
VALUES ('switch-nyc-01', 'Escalation test — non-Platinum node', 'escalate-nonplatinum-01', 'TrainingAlerts', 3, 1, 'switch-nyc-01:escalate-nonplatinum-01:TrainingAlerts', 'ImpactLab', 65534);
go
EOF
