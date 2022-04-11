class Cat:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        
 cat1 = ("cat1","Tom",36)     
 cat2 = ("cat2","John", 22)  
 cat3 =("cat3","Josh", 13)
 def show_details(*self):
    print("The oldest cat is " + self.name[0] + "and is " + self.age[0] + " years old.")        