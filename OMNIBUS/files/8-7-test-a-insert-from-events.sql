-- Section 8.7 Test A – Run inside nco_sql connected to EVENTS.
-- Replace <initials> with your own initials (e.g. LAB-GW-JD-A).
-- Connect: $OMNIHOME/bin/nco_sql -server EVENTS -user root -password 'netcool'

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
  'LAB-GW-<initials>-A',
  'gateway-lab',
  'EVENTS to EVENTS_BACKUP replication test',
  1,
  'GatewayLab',
  'LabGateway',
  'custom value from EVENTS'
);
go

-- After inserting, connect to EVENTS_BACKUP and run this SELECT to verify replication:
SELECT Identifier, Node, Summary, Severity, AlertGroup, Manager, CustomerID
FROM alerts.status
WHERE Identifier = 'LAB-GW-<initials>-A';
go

-- Then back on EVENTS, update the custom field:
UPDATE alerts.status
SET CustomerID = 'updated value from EVENTS'
WHERE Identifier = 'LAB-GW-<initials>-A';
go

quit
