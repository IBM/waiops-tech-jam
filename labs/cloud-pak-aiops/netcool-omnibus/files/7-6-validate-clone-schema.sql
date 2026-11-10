-- Section 7.6 – Run inside nco_sql connected to AGG_B.
-- Confirm the cloned schema and the jdoe user exist.

DESCRIBE alerts.status;
go

SELECT * FROM security.users WHERE UserName = 'jdoe';
go

quit
