-- Section 8.5 – Run inside nco_sql to clean AGG_P before the gateway test.
-- Connect: $OMNIHOME/bin/nco_sql -server AGG_P -user root -password 'netcool'

DELETE FROM alerts.status;
go

quit
