#!/bin/bash
# Section 8.1 – Export the alerts.status schema from both ObjectServers and diff them.

printf 'DESCRIBE alerts.status;\ngo\n' \
  | $OMNIHOME/bin/nco_sql -server AGG_P -user root -password 'netcool' \
  > /tmp/AGG_P-schema-raw.txt

printf 'DESCRIBE alerts.status;\ngo\n' \
  | $OMNIHOME/bin/nco_sql -server EVENTS_BACKUP -user root -password 'netcool' \
  > /tmp/EVENTS_BACKUP-schema-raw.txt

diff -u /tmp/AGG_P-schema-raw.txt /tmp/EVENTS_BACKUP-schema-raw.txt
