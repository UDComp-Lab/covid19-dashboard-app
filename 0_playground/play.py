import os
import numpy as np
path = "data/1/AppData/Documents/"
dirpath = os.path.join(path, os.listdir(path)[0]) 
img_fnames = [fname for fname in os.listdir(dirpath) if ".jpg" in fname]

data_txt_file = [fname for fname in os.listdir(dirpath) if ".txt" in fname][0]
data_txt_path = os.path.join(dirpath, data_txt_file)

np.loadtxt(data_txt_path, delimiter='~')


# def find_mode(data):
#     counts = {}
#     for d in data:
#         if d in counts:
#             counts[d] += 1
#         else:
#             counts[d] = 1

#     highest_count = 0
#     highest_key = []
#     for k,v in counts.items():
#         if v > highest_count:
#             highest_key = [k]
#             highest_count = v
#         elif v == highest_count:
#             highest_key.append(k)

#     if highest_key is None:
#         print("error no values in set")

#     return highest_key




# print(find_mode([1, 2, 3, 4, 2,2,1,5]))
# print(find_mode([1, 2, 3, 3, 2,2,1,3]))
# print(find_mode([]))



