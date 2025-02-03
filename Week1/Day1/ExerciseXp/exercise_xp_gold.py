print("Hello world"*3,sep="",end="I love you python"*3)

print("==========================")
user_input=input("enter number of month->").strip()
user_input=int(user_input)

if user_input>=3 and user_input<=5 :
        print("Spring")
elif user_input>=6 and user_input<=8 :
        print("summer")
elif user_input>=9 and user_input<=11 :
        print("Authumn")
elif user_input==12  or (user_input >= 1 and user_input <= 2) :
        print("winter")
else:
        print("wrong number")

