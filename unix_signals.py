import signal

def handler(signum, frame):
    print 'I handled an interrupt #%i' % signum

signal.signal(signal.SIGINT, handler)

print "running..."
print "press ctrl+c to handle keyboard interrupt"
while True:
  pass

