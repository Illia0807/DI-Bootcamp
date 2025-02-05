#ch_1
user_word=input("enter your word->")
print(type(user_word))
user_dict={}
for key, value in enumerate(user_word):
        if value not in user_dict:
                user_dict[value]=[]
        else:
               user_dict[value].append(key) 
        
print(user_dict)    

#ch2   
# items_purchase = {
#   "Water": "$1",
#   "Bread": "$3",
#   "TV": "$1,000",
#   "Fertilizer": "$20"
# }
# wallet=300
# items_list=[]
# for key,value in items_purchase.items():
#         price=int(value.strip("$").replace(",", ""))
#         if price<=wallet:
#          items_list.append(key)
# print(sorted(items_list))
#ch2.1
# items_purchase = {
#     "Apple": "$10",
#     "Honey": "$20",
#     "Fan": "$30",
#     "Bananas": "$5",
#     "Pan": "$50",
#     "Spoon": "$2"
# }
# items_purchase = {k: int(v.strip("$").replace(",", "")) for k, v in items_purchase.items()}
# print(items_purchase)

# sorted_items = dict(sorted(items_purchase.items(), key=lambda item: item[1]))

# print(sorted_items)   

# busket = []
# total_cost = 0
# wallet=100
# for item, price in sorted_items.items():
#     if total_cost + price > wallet:
#         break
#     busket.append(item)
#     total_cost += price
# print(sorted(busket))
#Ch2.3
# items_purchase = {
#   "Phone": "$999",
#   "Speakers": "$300",
#   "Laptop": "$5,000",
#   "PC": "$1200"
# }
# items_purchase = {k: int(v.strip("$").replace(",", "")) for k, v in items_purchase.items()}
# print(items_purchase)

# sorted_items = dict(sorted(items_purchase.items(), key=lambda item: item[1]))

# busket = []
# total_cost = 0
# wallet=1
# for item, price in sorted_items.items():
#     if price>(wallet-total_cost):
        
#         continue
#     if total_cost + price > wallet:
#         break
#     busket.append(item)
#     total_cost += price
# if not busket:
#     print("Nothing")
# else:
#     print(busket)


