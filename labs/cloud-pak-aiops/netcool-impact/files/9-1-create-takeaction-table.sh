su - db2inst1
db2 connect to CMDB
db2 "CREATE TABLE TAKEACTION (
    ACTID      INTEGER NOT NULL PRIMARY KEY,
    FILTERSTAT VARCHAR(255),
    ACTION     VARCHAR(32),
    PARAMS     VARCHAR(255)
)"
db2 connect reset
exit
