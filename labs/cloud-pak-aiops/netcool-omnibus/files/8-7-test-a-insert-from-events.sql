-- Section 8.7 Test A – Run inside nco_sql connected to AGG_P.
-- Replace <initials> with your own initials (e.g. LAB-GW-JD-A).
-- Connect: $OMNIHOME/bin/nco_sql -server AGG_P -user root -password 'netcool'

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
  'AGG_P to AGG_B replication test',
  1,
  'GatewayLab',
  'LabGateway',
  'custom value from AGG_P'
);
go

-- After inserting, connect to AGG_B and run this SELECT to verify replication:
SELECT Identifier, Node, Summary, Severity, AlertGroup, Manager, CustomerID
FROM alerts.status
WHERE Identifier = 'LAB-GW-<initials>-A';
go

-- Then back on AGG_P, update the custom field:
UPDATE alerts.status
SET CustomerID = 'updated value from AGG_P'
WHERE Identifier = 'LAB-GW-<initials>-A';
go

quit
