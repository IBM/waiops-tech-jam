$OMNIHOME/bin/nco_sql -server EVENTS -user root -password netcool << 'EOF'
INSERT INTO alerts.status (Node, Summary, AlertKey, AlertGroup, Severity, Type, Identifier, Manager, OwnerUID)
VALUES ('newnode-ams-01', 'Deferred enrichment test', 'deferred-key-01', 'TrainingAlerts', 3, 1, 'newnode-ams-01:deferred-key-01:TrainingAlerts', 'ImpactLab', 65534);
go
EOF
