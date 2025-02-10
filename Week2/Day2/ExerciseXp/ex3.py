import random

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
                
class PetDog(Dog):
        def __init__(self, name, age, weight,trained=False):
                super().__init__(name, age, weight)
                self.trained=trained
        def train(self):
                self.bark()
                self.trained=True
        def play(self,*arags):
                result=f"{self.name} "," " + ",".join([dog.name for dog in arags]) + " all play together"
                return result
        
        def do_a_trick(self):
                self.train()
                tricks = ["does a barrel roll", "plays fetch", "rolls over"]
                chosen_trick = random.choice(tricks)
                if self.trained:
                        result=f"{self.name} {chosen_trick}"
                        return result
                        
        
                
        
# prefator = Dog("Predator", 8,6)
# doby = Dog("Doby", 8,6)
# charlie = Dog("Charlie", 4, 22)
# prefator.fight(doby)
# print(prefator.bark())
# print(doby.run_speed())
# charlie.fight(doby)
prefator = PetDog("Predator", 8,6)
doby = PetDog("Doby", 8,6)
charlie = PetDog("Charlie", 4, 22)



print(prefator.play(doby,charlie))
print(prefator.do_a_trick())

