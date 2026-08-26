-- Section 8.8 – Run inside nco_sql connected to either EVENTS or EVENTS_BACKUP.
-- Deletion replicates to the other ObjectServer via the gateway.
-- Replace <initials> with your own initials.
-- Connect: $OMNIHOME/bin/nco_sql -server EVENTS -user root -password 'netcool'

DELETE FROM alerts.status
WHERE Identifier IN ('LAB-GW-<initials>-A', 'LAB-GW-<initials>-B');
go

quit
