su - db2inst1
db2 connect to CMDB
db2 "ALTER TABLE DEVICE_INVENTORY ADD COLUMN SERVICE_LEVEL VARCHAR(32)"
db2 connect reset
exit
