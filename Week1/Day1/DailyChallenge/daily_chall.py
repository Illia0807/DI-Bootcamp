import random
users_input=input("enter string here->").strip()


lenght=len(users_input)
print(lenght)
if users_input.isalpha() :
        print("valid input")
else:
        print("invalid input try again")

if  lenght >10  :
        print("string too long")
elif lenght<10 :
        print("string not long enough")
else :
        print("perfect string")
print("=============================")
print(users_input[0])
print(users_input[-1])
print("=============================")
var=""
for char in users_input:
        
        var=var+char
        print(var)

print("==========================")
my_list=list(users_input)
random.shuffle(my_list)
shuffled_string = ''.join(my_list)
print(shuffled_string)
 