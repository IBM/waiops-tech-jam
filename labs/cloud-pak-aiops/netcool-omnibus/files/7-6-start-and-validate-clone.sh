#!/bin/bash
# Section 7.6 – Restart Process Agent, start the BackupObjectServerService,
# check status, and ping the new ObjectServer.
# At the shutdown prompt select option 2.
# Press Enter at any login/password prompt (authenticate NONE).

nco_pa_shutdown

nco_pad -authenticate NONE

nco_pa_start -service BackupObjectServerService

nco_pa_status

$OMNIHOME/bin/nco_ping AGG_B

$OMNIHOME/bin/nco_sql \
  -server AGG_B \
  -user root \
  -password 'netcool'
