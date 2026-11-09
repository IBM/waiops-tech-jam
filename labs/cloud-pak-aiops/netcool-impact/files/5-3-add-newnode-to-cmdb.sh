su - db2inst1
db2 connect to CMDB
db2 "INSERT INTO DEVICE_INVENTORY (NODE_NAME, CUSTOMER_ID, CUSTOMER_NAME, SERVICE, LOCATION, CONTACT)
     VALUES ('newnode-ams-01', 'CUST-1001', 'Acme Corporation', 'WAN Connectivity', 'Amsterdam DC', 'noc@acme.com')"
db2 connect reset
exit
