string = input("Please enter a string")
num = len(string)
if num < 10:
 print("String not long enough.")

elif num > 10:
 print("String too long.")
else:
 print("Perfect string")

print("First character:", string[0])   
print("Last character:", string[-1])

for i in range(num):
 print(string[:i+1])
import random
chars = list(string)
random.shuffle(chars)
print("".join(chars))