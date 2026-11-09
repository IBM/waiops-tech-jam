su - db2inst1
db2 connect to CMDB
db2 "UPDATE DEVICE_INVENTORY SET SERVICE_LEVEL = 'Platinum' WHERE CUSTOMER_ID = 'CUST-1001'"
db2 connect reset
exit
