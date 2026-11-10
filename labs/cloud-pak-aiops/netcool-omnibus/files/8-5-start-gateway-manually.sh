#!/bin/bash
# Section 8.5 – Regenerate interfaces, start the gateway manually, send a test event,
# and stop the gateway before moving to Section 8.6.
# Run the nco_sql steps interactively using the companion .sql files.

# Back up omni.dat (edit it first to add the AGG_GATE entry from 8-5-omni-dat-gateway-entry.txt)
cp $NCHOME/etc/omni.dat \
  $NCHOME/etc/omni.dat.before-events-backup-gateway

# Regenerate the interfaces file after editing omni.dat
$NCHOME/bin/nco_igen

# Verify the gateway entry was generated
grep -A4 -B2 AGG_GATE $NCHOME/etc/interfaces.linux2x86

# Start the gateway manually (background)
$OMNIHOME/bin/nco_g_objserv_bi -propsfile $OMNIHOME/gates/events_backup/objserv_bi.props &

# Send the test LinkDown event (syslogd probe must be running)
logger -n 127.0.0.1 'ALERT - LinkDown: Received a link down alert from routerA interface GigabitEthernet0/0 : unknown reason code'

# --- Connect to AGG_P and verify, then AGG_B and verify (run interactively) ---
# Use 8-5-verify-replication.sql for the SELECT query.

# Stop the manually started gateway before Section 8.6
pkill -f nco_g_objserv_bi

ps -ef | grep nco_g_objserv_bi | grep -v grep
