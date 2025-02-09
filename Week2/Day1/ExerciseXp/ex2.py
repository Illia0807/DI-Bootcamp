class Dog:
        def __init__(self,name,height):
                self.name=name
                self.height= height
        def __str__(self):
               return (f'name {self.name} height {self.height}')
        def bark(self):
                return print(f'{self.name} goes woof!')
        def jump(self):
                x=self.height*2
                return print(f'{self.name} jump {x} cm ')

davids_dog = Dog("Rex",50)
print(davids_dog.name)
print(davids_dog.height)
davids_dog.bark()
davids_dog.jump()
print("===========================")
sarah_dog= Dog("Teacup",20)
print(sarah_dog)
sarah_dog.bark()
sarah_dog.jump()

dogs_list = [davids_dog,sarah_dog]
def find_biggets(objects):
    bigger=objects[0]
    for object in objects:
        if object.height>bigger.height:
            bigger=object
    return bigger


bigger_dog=find_biggets(dogs_list)
print (f'the biggest dog is {bigger_dog.name}')
