#!/bin/bash
# Section 7 – Prerequisites: confirm AGG_P is reachable and AGG_B is not yet running.

$OMNIHOME/bin/nco_ping AGG_P

ps -efww | grep '[n]co_objserv'
