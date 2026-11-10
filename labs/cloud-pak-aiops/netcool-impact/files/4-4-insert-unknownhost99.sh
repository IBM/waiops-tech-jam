$OMNIHOME/bin/nco_sql -server AGG_P -user root -password netcool << 'EOF'
INSERT INTO alerts.status (Node, Summary, AlertKey, AlertGroup, Severity, Type, Identifier, Manager, OwnerUID)
VALUES ('unknownhost99', 'Event from unknown node', 'unknown-key-01', 'TrainingAlerts', 3, 1, 'unknownhost99:unknown-key-01:TrainingAlerts', 'ImpactLab', 65534);
go
EOF
