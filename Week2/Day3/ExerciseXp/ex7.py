from faker import Faker

fake = Faker()

users_list=[]

def add_users():
        user={
        "name": fake.name(),
        "address": fake.address(),
        "langage_code": fake.language_code()
        }
        users_list.append(user)
        return users_list
        

print(add_users())
print(add_users())



