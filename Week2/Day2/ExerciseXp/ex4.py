class Family:
        def __init__(self,members=None,last_name=""):
                if members is None:
                        members=[]
                self.members=members
                self.last_name=last_name
        def born(self,**kwargs):
                self.members.append(kwargs)
                print(f"Congratulations to the {self.last_name} family! {kwargs['name']} added to the family.")
               
                
        def is_18(self,name):
                for member in self.members:
                        if member['name']==name:
                                if member['age']<18:
                                        member['is_child']=True
                                else:
                                       member['is_child']=False
                                               
                                
                                
                return False

        def family_presentation(self):
                print(f"Family: {self.last_name}")
                for member in self.members:
                 print(f"Name: {member['name']}, Age: {member['age']},gender:{member['gender']},is_child :{member['is_child']}")

class TheIncredibles(Family):
        def __init__(self, members=None, last_name=""):
               super().__init__(members, last_name)
               
        def user_power(self,name):
               for member in self.members:
                        if member['name']==name:
                                try:
                                       if member['age']<18:
                                              raise ValueError("You are under 18, no power!")
                                except ValueError as e:
                                      print(e)
                                else:
                                        print(f"{member['incredible_name']} uses the power to {member['power']}.")

        def incredible_presentation(self):
                print("Here is our powerful family")
                super().family_presentation()

incredible_family = TheIncredibles(
    members=[{'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
             {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds', 'incredible_name': 'SuperWoman'}],
    last_name="Incredibles"
)

incredible_family.user_power("Michael")
incredible_family.user_power("Sarah")

incredible_family.incredible_presentation()
incredible_family.born(name="Jack", age=5, gender="Male", is_child=True, power="Unknown Power", incredible_name="BabyJack")
incredible_family.incredible_presentation()
       
             


# my_family = Family(last_name="Johnson")
# print(my_family.born(name="John", age=45, gender="Male", is_child=False))
# my_family.born(name="Sarah", age=35, gender="Female", is_child=False)
# my_family.family_presentation()
# my_family.is_18("Sarah")
# my_family.family_presentation()

