DESCRIBE alerts.status;
go

ALTER TABLE alerts.status ADD COLUMN CircuitID varchar(64);
go

DESCRIBE alerts.status;
go
