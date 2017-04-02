# threading.Thread()
# This method of threading cannot be terminated manually

import threading

def worker():
    while True:
        print("work, work...")

td = threading.Thread(target= worker)
td.start()
