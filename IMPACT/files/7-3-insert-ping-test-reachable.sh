$OMNIHOME/bin/nco_sql -server EVENTS -user root -password netcool << 'EOF'
INSERT INTO alerts.status (Node, Summary, AlertKey, AlertGroup, Severity, Type, Identifier, Manager, OwnerUID, EventId)
VALUES ('127.0.0.1', 'Ping verify test — reachable node', 'ping-test-01', 'TrainingAlerts', 3, 1, 'localhost:ping-test-01:TrainingAlerts', 'ImpactLab', 65534, 'PingFailure');
go
EOF
