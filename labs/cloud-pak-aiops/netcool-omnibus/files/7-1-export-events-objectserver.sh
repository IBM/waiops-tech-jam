#!/bin/bash
# Section 7.1 – Create the export directory and export the AGG_P ObjectServer configuration.

mkdir -p /tmp/events-backup-export
cd /tmp/events-backup-export

$OMNIHOME/bin/nco_osreport \
  -server AGG_P \
  -user root \
  -password 'netcool' \
  -dbinit
