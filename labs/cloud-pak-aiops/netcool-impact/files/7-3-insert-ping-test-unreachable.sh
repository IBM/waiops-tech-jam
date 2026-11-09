$OMNIHOME/bin/nco_sql -server EVENTS -user root -password netcool << 'EOF'
INSERT INTO alerts.status (Node, Summary, AlertKey, AlertGroup, Severity, Type, Identifier, Manager, OwnerUID, EventId)
VALUES ('192.0.2.1', 'Ping verify test — unreachable node', 'ping-test-02', 'TrainingAlerts', 3, 1, '192.0.2.1:ping-test-02:TrainingAlerts', 'ImpactLab', 65534, 'PingFailure');
go
EOF
