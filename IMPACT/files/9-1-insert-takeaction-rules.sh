su - db2inst1
db2 connect to CMDB
db2 "INSERT INTO TAKEACTION VALUES (1,
    '(Node=\"router-lon-01\") AND (Severity=5)',
    'email',
    'oncall@example.com|Critical alert on router-lon-01')"
db2 "INSERT INTO TAKEACTION VALUES (2,
    '(Node=\"switch-nyc-01\") AND (Severity=3)',
    'suppress',
    '4')"
db2 connect reset
exit
