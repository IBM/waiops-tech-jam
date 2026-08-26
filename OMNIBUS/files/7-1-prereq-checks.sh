#!/bin/bash
# Section 7 – Prerequisites: confirm EVENTS is reachable and EVENTS_BACKUP is not yet running.

$OMNIHOME/bin/nco_ping EVENTS

ps -efww | grep '[n]co_objserv'
