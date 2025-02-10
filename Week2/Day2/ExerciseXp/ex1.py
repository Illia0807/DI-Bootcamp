class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    
class Siames(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    
tom= Bengal("tom",5)
black= Chartreux("black",7)
yoda = Siames("yoda",25)
    
all_cats=[tom, black, yoda]
sara_pets = Pets(all_cats)
sara_pets.walk()

    