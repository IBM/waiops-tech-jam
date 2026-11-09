-- Section 8.5 – Run inside nco_sql to clean EVENTS before the gateway test.
-- Connect: $OMNIHOME/bin/nco_sql -server EVENTS -user root -password 'netcool'

DELETE FROM alerts.status;
go

quit
