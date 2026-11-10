$OMNIHOME/bin/nco_sql -server AGG_P -user root -password netcool << 'EOF'
INSERT INTO alerts.status (Node, Summary, AlertKey, AlertGroup, Severity, Type, Identifier, Manager, OwnerUID)
VALUES ('router-lon-01', 'Post-import smoke test', 'import-test-01', 'TrainingAlerts', 3, 1, 'router-lon-01:import-test-01:TrainingAlerts', 'ImpactLab', 65534);
go
EOF
