su - db2inst1
db2 connect to CMDB
db2 "INSERT INTO TAKEACTION VALUES (3,
    '(Severity >= 4) AND (Node LIKE \"server-fra.*\")',
    'email',
    'dba@example.com|High severity alert on Frankfurt server')"
db2 connect reset
exit
