$OMNIHOME/bin/nco_sql -server EVENTS -user root -password netcool << 'EOF'
INSERT INTO alerts.status (Node, Summary, AlertKey, AlertGroup, Severity, Type, Identifier, Manager, OwnerUID)
VALUES ('ghost-node-99', 'Retry limit test', 'retry-limit-01', 'TrainingAlerts', 3, 1, 'ghost-node-99:retry-limit-01:TrainingAlerts', 'ImpactLab', 65534);
go
EOF
