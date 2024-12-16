import os,json
os.chdir("../images")
list = os.listdir()
os.chdir("../json")
file = open("images.json","w")
data = {"images":list}
# print(data)

json.dump(data,file)
file.close()
