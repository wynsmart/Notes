import socket
ss = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
ss.bind(("localhost",9090))
ss.listen(5)
while True:
    (cs, addr) = ss.accept()
    print cs.recv(16)
    cs.close()
