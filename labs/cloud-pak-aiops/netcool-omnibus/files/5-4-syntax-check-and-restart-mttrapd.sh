$OMNIHOME/probes/nco_p_syntax -server AGG_P -rulesfile $NC_RULES_HOME/snmptrap.rules

kill $(pgrep nco_p_mttrapd)
$OMNIHOME/probes/nco_p_mttrapd &
netstat -anlp | grep udp | grep 162
