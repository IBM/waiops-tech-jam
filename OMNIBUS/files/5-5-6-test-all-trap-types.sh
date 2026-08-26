# Test 1 — serverDown
snmptrap -v 2c -c public localhost '' 1.3.6.1.4.1.99999.2.1 \
  1.3.6.1.4.1.99999.1.4 s "db-server-02" \
  1.3.6.1.4.1.99999.1.5 a 192.168.1.20 \
  1.3.6.1.4.1.99999.1.8 i 5

# Test 2 — diskUtilization (with ExpireTime)
snmptrap -v 2c -c public localhost '' 1.3.6.1.4.1.99999.2.3 \
  1.3.6.1.4.1.99999.1.4 s "db-server-01" \
  1.3.6.1.4.1.99999.1.5 a 192.168.1.22 \
  1.3.6.1.4.1.99999.1.6 s "/var" \
  1.3.6.1.4.1.99999.1.7 i 87 \
  1.3.6.1.4.1.99999.1.8 i 4

# Test 3 — Second diskUtilization (different mount point)
snmptrap -v 2c -c public localhost '' 1.3.6.1.4.1.99999.2.3 \
  1.3.6.1.4.1.99999.1.4 s "db-server-01" \
  1.3.6.1.4.1.99999.1.5 a 192.168.1.22 \
  1.3.6.1.4.1.99999.1.6 s "/home" \
  1.3.6.1.4.1.99999.1.7 i 92 \
  1.3.6.1.4.1.99999.1.8 i 5

# Test 4 — serverUp (clears serverDown)
snmptrap -v 2c -c public localhost '' 1.3.6.1.4.1.99999.2.2 \
  1.3.6.1.4.1.99999.1.4 s "db-server-02" \
  1.3.6.1.4.1.99999.1.5 a 192.168.1.20
