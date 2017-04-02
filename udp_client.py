import socket
ss = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
ss.sendto("linux is the best of all", ("localhost",9090))
