$OMNIHOME/bin/nco_sql -server EVENTS -user root -password netcool << 'EOF'
INSERT INTO alerts.status (Node, Summary, AlertKey, AlertGroup, Severity, Type, Identifier, Manager, OwnerUID)
VALUES ('db-tok-01', 'Enrichment test event', 'enrich-key-01', 'TrainingAlerts', 4, 1, 'db-tok-01:enrich-key-01:TrainingAlerts', 'ImpactLab', 65534);
go
EOF
