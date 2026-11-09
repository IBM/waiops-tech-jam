nohup "$IMPACT_HOME/bin/nci_jrexec" \
  > "$IMPACT_HOME/logs/nci_jrexec.out" 2>&1 &

ps -ef | grep nci_jrexec | grep -v grep
