SELECT * FROM security.users WHERE UserName = 'jdoe';
go

SELECT UserName FROM security.users WHERE UserName = 'jdoe' AND UserID IN (SELECT UserID FROM security.group_members WHERE GroupID IN (SELECT GroupID FROM security.groups WHERE GroupName = 'Netcool_OMNIbus_Admin'));
go
