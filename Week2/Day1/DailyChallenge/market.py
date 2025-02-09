class Farm:
        def __init__(self, farm_name):

                self.name=farm_name
                self.dicti_animals={}

        
                             
        def  add_animal(self,animal, count=1):
                if animal in self.dicti_animals:
                        self.dicti_animals[animal]+= count
                else:
                        self.dicti_animals[animal]= count
        def get_info(self):
                info=f"{self.name}'s farm \n"

                for k,v in self.dicti_animals.items():
                        info+=f"{k} : {v}\n"
                info+="\tE-I-E-I-0!"
                return info
        def get_animal_types(self):
                return sorted(self.dicti_animals.keys())
        
        def get_short_info(self):
                list_animals=self.get_animal_types()
                animal_string=",".join([f"{animal}s" for animal in list_animals])
                return f"McDonald’s farm has {animal_string}"

macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())
print(macdonald.get_animal_types())

print(macdonald.get_short_info())                

                    
                