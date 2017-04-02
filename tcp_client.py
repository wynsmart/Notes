import socket
ss = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
ss.connect(("localhost",9090))
ss.sendall("linux is the whole life of mine")
ss.close();
