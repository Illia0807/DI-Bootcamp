class Dog:
        def __init__(self,name,age,weight):
               self.name=name
               self.age=age
               self.weight=weight
        def bark(self):
                return f'{self.name} is barking'
        def run_speed(self):
                return self.weight/self.age*10
        def fight(self,other_dog):
                my_power = self.run_speed() *self.weight
                other_power=other_dog.run_speed() * other_dog.weight

                if my_power>other_power:
                        return print(f'{self.name} wins the fight')
                elif my_power<other_power:
                        return print(f'{other_dog.name} wins the fight')
                else:
                        return print("the draw!")
                
        
prefator = Dog("Predator", 8,6)
doby = Dog("Doby", 8,6)
charlie = Dog("Charlie", 4, 22)

prefator.fight(doby)
print(prefator.bark())
print(doby.run_speed())
charlie.fight(doby)
