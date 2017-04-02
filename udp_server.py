import socket
ss = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
ss.bind(("localhost",9090))
while True:
    print ss.recv(16)
