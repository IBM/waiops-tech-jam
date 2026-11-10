-- Section 8.8 – Run inside nco_sql connected to either AGG_P or EVENTS_BACKUP.
-- Deletion replicates to the other ObjectServer via the gateway.
-- Replace <initials> with your own initials.
-- Connect: $OMNIHOME/bin/nco_sql -server AGG_P -user root -password 'netcool'

DELETE FROM alerts.status
WHERE Identifier IN ('LAB-GW-<initials>-A', 'LAB-GW-<initials>-B');
go

quit
