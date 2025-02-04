#Ex1
# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]
# print(dict(zip(keys,values)))

#Ex2.1
#family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
#Ex2.1
# family={}
# while True:
#         data=input("enter your name and your age separeta by space " "(for exit enter done)->")
#         if data.lower()=="done":
#                 break
#         else:
#               name,age=data.split()
#               family.update({name: int(age)}) 

# price_list={"child":0, "teenager":10, "adult":15}
# fam_mem_check={}
        
# for name,age in family.items():
#        if age<3:
#               category="child"
#        elif 3<=age<12:
#               category="teenager"
#        else:
#               category="adult"
#        fam_mem_check[name]=price_list[category]     
# print(fam_mem_check) 

#Ex3
# brand={
#        "name": "Zara",
#        "creation_date": 1975 ,
#        "creator_name": "Amancio Ortega Gaona ",
#        "type_of_clothes":["man","women","children","home ",],
#        "international_competitors": ["Gap","H&M","Benetton"],
#        "number_stores": 7000,
#        "major_color": {
#                "France": "blue",
#                "Spain": "red",
#                "US": ["pink", "green"],
#        }
# }
# brand["number_stores"]=2

# print(f"Zara clients are{brand['type_of_clothes']} ") 
# brand["country_creation"]="Spain"
# print(brand)
# print("==========================")

# if "international_competitors" in brand:
#                 brand["international_competitors"].append("Desiqual")
# print(brand) 

# print("==========================")

# del brand["creation_date"]
# print(brand) 
# print("==========================")
# for key in brand["major_color"]:
#        if key=="US":
#                print(key)
# print("==========================")
# print(brand["major_color"]["US"])
# print("==========================")

# for key,value in brand.items():
#         print(key,value)
# print("==========================")
# for key in brand.keys():
#         print(key)
# print(brand["major_color"].keys())
# print("==========================")
# more_on_zara={"creation_date": 1975, "number_stores": 10000,}
# brand.update(more_on_zara)
# print(brand["number_stores"])# the value was update

#EX4
users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
#Ex4.1
disney_users_A={}

count=0
for user_name in users:
    disney_users_A[user_name] = count  
    count += 1

print(disney_users_A)   

#Ex4.2
# disney_users_B={}
# count=0
# for user_name in users:
#         disney_users_B[count] = user_name
#         count += 1
# print(disney_users_B)
print("===============")
#Ex4.3
disney_users_C={}
keys_list=list(disney_users_A.keys())
values_list=list(disney_users_A.values())
keys_list.sort()
disney_users_C.update(dict(zip(keys_list,values_list)))
print(disney_users_C)









