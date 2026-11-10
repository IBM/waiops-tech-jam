snmptrap -v 2c -c public localhost '' 1.3.6.1.4.1.99999.2.1 \
  1.3.6.1.4.1.99999.1.4 s "web-server-01" \
  1.3.6.1.4.1.99999.1.5 a 192.168.1.10 \
  1.3.6.1.4.1.99999.1.8 i 5

tail -30 $OMNIHOME/var/mttrapd.cap
