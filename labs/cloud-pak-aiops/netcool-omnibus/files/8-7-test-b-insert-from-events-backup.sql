-- Section 8.7 Test B – Run inside nco_sql connected to EVENTS_BACKUP.
-- Replace <initials> with your own initials (e.g. LAB-GW-JD-B).
-- Connect: $OMNIHOME/bin/nco_sql -server EVENTS_BACKUP -user root -password 'netcool'

INSERT INTO alerts.status
(
  Identifier,
  Node,
  Summary,
  Severity,
  AlertGroup,
  Manager,
  CustomerID
)
VALUES
(
  'LAB-GW-<initials>-B',
  'gateway-lab',
  'EVENTS_BACKUP to AGG_P replication test',
  1,
  'GatewayLab',
  'LabGateway',
  'custom value from EVENTS_BACKUP'
);
go

-- After inserting, connect to AGG_P and run this SELECT to verify replication:
SELECT Identifier, Node, Summary, Severity, AlertGroup, Manager, CustomerID
FROM alerts.status
WHERE Identifier = 'LAB-GW-<initials>-B';
go

quit
