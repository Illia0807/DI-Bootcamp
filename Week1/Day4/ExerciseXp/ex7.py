import random

# def get_random_temp():
#         var=random.randrange(-10, 40)
#         return var


# def main():
#         var=get_random_temp()
#         print(f"The temperature right now is {var} degrees Celsius")
#         if var<0:
#                 print("Brrr, thats freezing! Wear some extra layers today")
#         elif 0 <= var < 16:
#                 print("Quite chilly! Don’t forget your coat")
#         elif 16<=var<=23 :
#                 print("Relax")
#         elif 24<=var<=40:
#                 print("time to beach")


# main()
# user_info=input("chouse [winter, spring, summer, autumn] and enter here-> ")
# def get_random_temp(season):
#         if season=="winter":
#                 winter=random.randrange(-10, 16)
#                 return winter
#         if season=="spring":
#                 spring=random.randrange(5, 25)
#                 return spring
#         if season=="summer":
#                 summer =random.randrange(15, 35)
#                 return summer 
#         if season=="autumn":
#                 autumn=random.randrange(0, 20)
#                 return autumn
 
# def main():
#         var=get_random_temp(user_info)
#         print(f"The temperature right now is {var} degrees Celsius")
#         if var<0:
#                 print("Brrr, thats freezing! Wear some extra layers today")
#         elif 0 <= var < 16:
#                 print("Quite chilly! Don’t forget your coat")
#         elif 16<=var<=23 :
#                 print("Relax")
#         elif 24<=var<=40:
#                 print("time to beach")


# main()

#Bonus#1
# user_info=input("chouse [winter, spring, summer, autumn] and enter here-> ")
# def get_random_temp(season):
#         if season=="winter":
#                 winter=round(random.uniform(-10, 16),2)
#                 return winter
#         if season=="spring":
#                 spring=round(random.uniform(5, 25),2)
#                 return spring
#         if season=="summer":
#                 summer =round(random.uniform(15, 35),2)
#                 return summer 
#         if season=="autumn":
#                 autumn=round(random.uniform(0, 20),2)
#                 return autumn
 
# def main():
#         var=get_random_temp(user_info)
#         print(f"The temperature right now is {var} degrees Celsius")
#         if var<0:
#                 print("Brrr, thats freezing! Wear some extra layers today")
#         elif 0 <= var < 16:
#                 print("Quite chilly! Don’t forget your coat")
#         elif 16<=var<=23 :
#                 print("Relax")
#         elif 24<=var<=40:
#                 print("time to beach")


# main()

#bonus 3
while True:
        user_info=input("chouse number of month and enter here-> ")
        month_number=int(user_info)
        if 1 <= month_number <= 12:
                break
        else:
                
                print("ry again and enter valid month between 1-12")


seasons = {
    12: "Winter", 1: "Winter", 2: "Winter",
    3: "Spring", 4: "Spring", 5: "Spring",
    6: "Summer", 7: "Summer", 8: "Summer",
    9: "Autumn", 10: "Autumn", 11: "Autumn"
}

se=seasons.get(month_number).lower()

def get_random_temp(season):
        if season=="winter":
                winter=round(random.uniform(-10, 16),2)
                return winter
        if season=="spring":
                spring=round(random.uniform(5, 25),2)
                return spring
        if season=="summer":
                summer =round(random.uniform(15, 35),2)
                return summer 
        if season=="autumn":
                autumn=round(random.uniform(0, 20),2)
                return autumn
        
 
def main():
        var=get_random_temp(se)
        print(f"The temperature right now is {var} degrees Celsius")
        if var<0:
                print("Brrr, thats freezing! Wear some extra layers today")
        elif 0 <= var < 16:
                print("Quite chilly! Don’t forget your coat")
        elif 16<=var<=23 :
                print("Relax")
        elif 24<=var<=40:
                print("time to beach")


main()