CREATE USER 'jdoe' FULL NAME 'John Doe' PASSWORD 'SecretPass123';
go

ALTER GROUP 'Netcool_OMNIbus_User' ASSIGN MEMBERS 'jdoe';
go

ALTER GROUP 'Netcool_OMNIbus_Admin' ASSIGN MEMBERS 'jdoe';
go
