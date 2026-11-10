#!/bin/bash
# Section 7.4 – Back up omni.dat, regenerate the interfaces file, and verify the new entry.

cp $NCHOME/etc/omni.dat \
  $NCHOME/etc/omni.dat.before-events-backup

$NCHOME/bin/nco_igen

grep -A4 -B2 AGG_B $NCHOME/etc/interfaces.linux2x86
