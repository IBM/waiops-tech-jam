export NC_RULES_HOME="/opt/IBM/tivoli/NcKL/rules"
echo 'export NC_RULES_HOME="/opt/IBM/tivoli/NcKL/rules"' >> ~/.bash_profile
source ~/.bash_profile
echo $NC_RULES_HOME
echo 'export NC_RULES_HOME="/opt/IBM/tivoli/NcKL/rules"' >> $OMNIHOME/probes/linux2x86/nco_p_mttrapd.env
