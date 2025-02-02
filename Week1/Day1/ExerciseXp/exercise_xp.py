# Ex1
print("Hello World "*3)

#Ex2
result=((99**3)*8)
print(result)

#Ex3
print("TRUE")
print("TRUE")
print("FALSE")
print("FALSE")
print("FALSE")
print("=============")

#Ex4
computer_brand=input("name of computure brand: ")
print(f'I have a {computer_brand} computer')
print("================")

#Ex5
name="Illia"
age=32
shoe_size=45.5
info=(f'My name is {name}, my age {32} olso my shoe size is {shoe_size}')
print(info)
print("=============")

#Ex6
a=input(" value a= ")
b=input("value b= ")
a=int(a)
b=int(b)
if a>b :
        print("Hello world")
else:
        print("No Hello world")        

#Ex7
num=input(" enter number= ")
num=int(num)
if num%2==0 :
        print("your numder even ")
else:
        print("your number not even")
print("=====================")

#Ex8 
user_name=input("Enter your name->").strip().lower()

my_name="Illia".lower()

if user_name==my_name :
        print("we have a same name")
else:
        print("A funny massage not found")
print("============================")

#Ex9
user_height=input("Enter your height in santimiters->").strip()
user_height=float(user_height)
CONST=145
if user_height>CONST :
        print("The horse is available for riding")
else:
        print("Go to grow")

