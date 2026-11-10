#!/bin/bash
# Section 7.3 – Initialize AGG_B from the selected export files.
# Run this from /tmp/events-backup-export (the directory created in Section 7.1).
# alertsdata.sql is intentionally omitted to create a clean clone.

$OMNIHOME/bin/nco_dbinit \
  -server AGG_B \
  -systemfile system.sql \
  -applicationfile application.sql \
  -desktopfile desktop.sql \
  -automationfile automation.sql \
  -securityfile security.sql
