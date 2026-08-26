#!/bin/bash
# Section 7.1 – Create the export directory and export the EVENTS ObjectServer configuration.

mkdir -p /tmp/events-backup-export
cd /tmp/events-backup-export

$OMNIHOME/bin/nco_osreport \
  -server EVENTS \
  -user root \
  -password 'netcool' \
  -dbinit
