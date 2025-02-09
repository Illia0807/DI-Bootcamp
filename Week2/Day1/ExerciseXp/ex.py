class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

tom= Cat("Tom",5)
dark = Cat("Dark", 8)
yoda = Cat("Yoda",18)

cats = [tom, dark, yoda]
def find_oldest(objects):
    oldest=objects[0]
    for cat in objects:
        if cat.age>oldest.age:
            oldest=cat
    return oldest

oldest_cat=find_oldest(cats)
print (f'the oldest cat is {oldest_cat.age} and  his name is {oldest_cat.name}')


