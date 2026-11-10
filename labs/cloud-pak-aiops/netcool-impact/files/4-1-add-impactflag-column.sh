$OMNIHOME/bin/nco_sql -server AGG_P -user root -password netcool << 'EOF'
ALTER TABLE alerts.status ADD COLUMN ImpactFlag INTEGER;
go
EOF
