su - db2inst1
db2 connect to CMDB
db2 "INSERT INTO DEVICE_INVENTORY VALUES ('router-lon-01', 'CUST-1001', 'Acme Corporation',  'WAN Connectivity',   'London DC',    'noc@acme.com')"
db2 "INSERT INTO DEVICE_INVENTORY VALUES ('router-lon-02', 'CUST-1001', 'Acme Corporation',  'WAN Connectivity',   'London DC',    'noc@acme.com')"
db2 "INSERT INTO DEVICE_INVENTORY VALUES ('switch-nyc-01', 'CUST-1002', 'Globex Industries', 'LAN Infrastructure', 'New York DC',  'ops@globex.com')"
db2 "INSERT INTO DEVICE_INVENTORY VALUES ('switch-nyc-02', 'CUST-1002', 'Globex Industries', 'LAN Infrastructure', 'New York DC',  'ops@globex.com')"
db2 "INSERT INTO DEVICE_INVENTORY VALUES ('server-fra-01', 'CUST-1003', 'Initech Solutions', 'App Hosting',        'Frankfurt DC', 'support@initech.com')"
db2 "INSERT INTO DEVICE_INVENTORY VALUES ('server-fra-02', 'CUST-1003', 'Initech Solutions', 'App Hosting',        'Frankfurt DC', 'support@initech.com')"
db2 "INSERT INTO DEVICE_INVENTORY VALUES ('fw-sin-01',     'CUST-1004', 'Pinnacle Networks', 'Network Security',   'Singapore DC', 'security@pinnacle.com')"
db2 "INSERT INTO DEVICE_INVENTORY VALUES ('db-tok-01',     'CUST-1005', 'Soylent Systems',   'Database Services',  'Tokyo DC',     'dba@soylent.com')"
db2 connect reset
exit
