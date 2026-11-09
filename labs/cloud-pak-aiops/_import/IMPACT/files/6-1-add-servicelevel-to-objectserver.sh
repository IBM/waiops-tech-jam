$OMNIHOME/bin/nco_sql -server EVENTS -user root -password netcool << 'EOF'
ALTER TABLE alerts.status ADD COLUMN ServiceLevel VARCHAR(32);
go
EOF
