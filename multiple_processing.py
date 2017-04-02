# multiprocessing.Process()
# This method of multiprocessing can be terminated

import multiprocessing

def worker():
    while True:
        try:
          print("work, work...")
        except KeyboardInterrupt as e:
          break

ps = multiprocessing.Process(target= worker)
ps.start()

while True:
    try:
        raw_input("$ ")
    except KeyboardInterrupt as e:
        # ps.terminate()
        print("done")
        break
