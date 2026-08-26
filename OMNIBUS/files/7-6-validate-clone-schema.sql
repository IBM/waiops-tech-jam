-- Section 7.6 – Run inside nco_sql connected to EVENTS_BACKUP.
-- Confirm the cloned schema and the jdoe user exist.

DESCRIBE alerts.status;
go

SELECT * FROM security.users WHERE UserName = 'jdoe';
go

quit
