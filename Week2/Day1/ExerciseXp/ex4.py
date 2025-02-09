class Zoo:
        def __init__(self,zoo_name):
                self.animals=[]
                self.name=zoo_name

        def add_animals(self,new_animal):
                if new_animal not in self.animals:
                        self.animals.append(new_animal)
                        print (f"The {new_animal} added to the zoo")
                else:
                        print (f"The {new_animal} already to the exists")
        def get_animals(self):
                for animal in self.animals:
                        print (f'{animal}')
                        
        def sell_animal(self,animal_sold):
                # for animal in self.animals:
                #         if animal==animal_sold:
                #                 self.animals.remove(animal_sold)
                #                 print(f'{animal_sold} has been sold')
                animal = next((a for a in self.animals if a==animal_sold),None)
                if animal:
                        self.animals.remove(animal)
                        print(f'{animal} has been sold')
                else:
                        print(f'{animal} not found')

        def sort_animals(self):
           dict_animal = {}
           sorted_list=sorted(self.animals)
           for animal in sorted_list:
                first_letter = animal[0]
                if first_letter in dict_animal:
                       dict_animal[first_letter].append(animal)
                else:
                       dict_animal[first_letter]= [animal]  
           return dict_animal 
        
        def get_groups(self):
               group_animals = self.sort_animals()
               for letter, animals in group_animals.items():
                print(f'{letter}: {','.join(animals)}')
        

# Zoo1= Zoo("Madagascar")
# Zoo1.add_animals("Jirafe")
# Zoo1.add_animals("Tortle")
# Zoo1.add_animals("Goat")
# Zoo1.add_animals("Jirafe")
# print("==========================")
# Zoo1.get_animals()
# print("==========================")
# Zoo1.sell_animal("Monkey")
# Zoo1.sell_animal("Jirafe")

# print("==========================")
# Zoo1.add_animals("Jirafe")
# Zoo1.get_animals()
# print("==========================")
# print(Zoo1.sort_animals())
# print("==========================")
# Zoo1.get_groups()

ramat_gan_safari = Zoo("Ramat Gan Safari")

while True:
        user_input = (input(f"Which animal should we add to the zoo(type 'done to finsh') -->"))        
        if user_input.lower()=='done':
                        break
        ramat_gan_safari.add_animals(user_input)

ramat_gan_safari.get_animals()





