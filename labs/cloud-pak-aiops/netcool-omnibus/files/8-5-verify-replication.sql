-- Section 8.5 – Run inside nco_sql to verify the LinkDown event replicated.
-- Run against AGG_P first, then AGG_B.
-- Connect: $OMNIHOME/bin/nco_sql -server AGG_P -user root -password 'netcool'
--      or: $OMNIHOME/bin/nco_sql -server AGG_B -user root -password 'netcool'

SELECT Identifier, Node, Summary, Severity, AlertGroup, Manager
FROM alerts.status
WHERE Node = 'routerA';
go

quit
