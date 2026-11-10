# eval-test-04: server-fra-01 severity 4 — distinct identifier to avoid deduplication
# should match rule 3 (email) after rule 3 is inserted
$OMNIHOME/bin/nco_sql -server AGG_P -user root -password netcool << 'EOF'
INSERT INTO alerts.status (Node, Summary, AlertKey, AlertGroup, Severity, Type, Identifier, Manager, OwnerUID)
VALUES ('server-fra-01', 'High disk utilisation', 'eval-test-04', 'TrainingAlerts', 4, 1, 'server-fra-01:eval-test-04:TrainingAlerts', 'ImpactLab', 65534);
go
EOF
