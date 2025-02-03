#chell1
# user_number=input("enter number->")
# user_number=int(user_number)
# user_lenght=input("enter lenght->")
# user_lenght=int(user_lenght)
# my_list=[]

# for i in range(user_number,(user_lenght+1) * user_number,user_number):
#         my_list.append(i)
#         if len(my_list)==user_lenght:
#                 break
# print(my_list)

#chell2


user_word = input("enter a string: ")

new_word = ""
for i in range(len(user_word)):
    if i == 0 or user_word[i] != user_word[i-1]:
        new_word += user_word[i]

print(new_word)




