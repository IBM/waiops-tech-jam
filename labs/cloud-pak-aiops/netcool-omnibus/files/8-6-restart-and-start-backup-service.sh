#!/bin/bash
# Section 8.6 – Restart Process Agent with the updated configuration, then start
# the BackupObjectServerService (which now includes the gateway).
# At the shutdown prompt select option 2.
# Press Enter at any login/password prompt (authenticate NONE).

cp $OMNIHOME/etc/nco_pa.conf \
  $OMNIHOME/etc/nco_pa.conf.before-events-backup-gateway

nco_pa_shutdown

nco_pad -authenticate NONE

nco_pa_status

nco_pa_start -service BackupObjectServerService

nco_pa_status
