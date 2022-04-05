string = int(input("Please enter a string"))
num = len(string)
if num < 10:
 print("string not long enough")

else: 
  print("string not long enough")

print("First character:", string)   
print("Last character:", string)
print(string[0])
print(string[0,1])
print(string[0,1,2])
print(string[0,1,2,3])
print(string[0,1,2,3,4])
print(string[0,1,2,3,4,5])
print(string[0,1,2,3,4,5,6])
print(string[0,1,2,3,4,5,6,7])
print(string[0,1,2,3,4,5,6,7,8])
print(string[0,1,2,3,4,5,6,7,8,9])
import random
random.shuffle(string)
print(string)