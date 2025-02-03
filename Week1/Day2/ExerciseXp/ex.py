
#1
# my_fav_numbers={1,2,3,4,5,6,7,8,9}
# my_fav_numbers.add(10)
# my_fav_numbers.add(11)

# my_fav_numbers.remove(len(my_fav_numbers))
# print(my_fav_numbers)
# fr_fav_numbers={8,9,10,11,12,13,14}
# our_fav_numbers=my_fav_numbers.union(fr_fav_numbers)
# print(our_fav_numbers)

# #2
# print("false")

#3 list
# basket = ["Banana", "Apples", "Oranges", "Blueberries"];
# basket.remove("Banana")
# basket.remove("Blueberries")
# basket.insert(len(basket),"kiwi")
# print(basket)
# basket.insert(0,"Apples")
# print(basket)
# print(basket.count("Apples"))
# basket.clear()
# print(basket)
               
#4
# 1 They differ in the way numbers are stored.

        
# i = 1.5
# while i < 5.5:
#     print(i)
#     i += 0.5
# olco can use for i in np.arange(1.5, 5.5, 0.5)

#5
# my_list=[]
# for i in range(1,21,1):
#     my_list.append(i)
# print(my_list)
# print("=================================")

# for index,item in enumerate(my_list):
#     if item%2==0:
#         print(index,item)

#6
# my_name="Illia"
# while True:
#         user_name=input("enter tour name->")
#         if user_name==my_name:
#                 print("same name")
#                 break
#         else:
#                 print("try another name, mayby Illia")

#7
# fruits=input("please  separate the fruits with a single space, eg. 'apple mango cherry'->")
# print(fruits)
# list_fruits=fruits.split(" ")
# print(list_fruits)
# fav_fruit=input("enter your favorite fruit->")
# if list_fruits.count(fav_fruit):
#         print("You chose one of your favorite fruits! Enjoy!")
# else:
#         print("You chose a new fruit. I hope you enjoy")

#8
# pizza_oredr=[]
# count=10
# while True:
#         flavor=input("witch flavor?(if you finished typr ""done)")
#         if flavor!="done":
#                 count+=2.5
#                 print(f'{flavor}"sucess add"')
#         if flavor=="done":
                        
#                 break
#         pizza_oredr.append(flavor)
# print(str(pizza_oredr)+"total price"+str(count))

#9
# tickets_oredr=[]
# age_child=0
# age_teenager=0
# age_adult=0
# ticket_price=0
# if age_child <3:
#         ticket_price=0
# elif age_teenager>=3 and age_teenager<=11:
#         ticket_price=10
# elif age_adult>=12:
#         ticket_price=15
#9.1
# ticket_price=0
# total_ticket_price=0
# while True:         
#   customet_age=input("enter tout age->").strip()
#   if customet_age=="done":
#                 print("Exciting....")
#                 break
#   customet_age=int(customet_age)
#   if customet_age <3:
#         ticket_price=0
#         total_ticket_price+=ticket_price
#   elif customet_age>=3 and customet_age<=11:
#         ticket_price=10
#         total_ticket_price+=ticket_price
#   elif customet_age>=12 and customet_age<=120:
#        ticket_price=15
#        total_ticket_price+=ticket_price
#   elif customet_age>=150:
#         print("No enter to vimpires")
#         break
# print("total cost is"+str(total_ticket_price))

#9.2
# names=["Alice", "Bob", "Charlie", "David", "Eva"]

# list_of_allowed=[]

# for i in names:
#         age=int(input(f"Enter the name of {i}:"))
#         if age>=20:
#                 list_of_allowed.append(i)
# print(list_of_allowed)
  

#Ex10
#10.1
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
for i in sandwich_orders:
        if i.count("Pastrami sandwich"):
                sandwich_orders.remove(i)
print(sandwich_orders)

#10.2
finished_sandwiches=[]
for index in sandwich_orders:

        finished_sandwiches.append(index)
        print(f'I made your {index.lower()}')



        



