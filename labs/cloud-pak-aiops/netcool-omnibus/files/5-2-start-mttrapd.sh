$OMNIHOME/probes/nco_p_syntax -server AGG_P -rulesfile /opt/IBM/tivoli/NcKL/rules/snmptrap.rules
$OMNIHOME/probes/nco_p_mttrapd &
netstat -anlp | grep udp | grep 162
pgrep -a nco_p_mttrapd
