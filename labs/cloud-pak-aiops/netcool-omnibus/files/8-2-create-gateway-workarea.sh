#!/bin/bash
# Section 8.2 – Create the gateway working directory and copy the template files.

mkdir -p $OMNIHOME/gates/events_backup

cp -R $OMNIHOME/gates/objserv_bi/* $OMNIHOME/gates/events_backup

chmod 750 $OMNIHOME/gates/events_backup
chmod 640 $OMNIHOME/gates/events_backup/*
