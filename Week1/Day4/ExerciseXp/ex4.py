import random

def func(par1):
        var=(random.randrange(1, 100))
        if var==par1:
                print("winner!")
        else:
                print(f'not luck your numb{par1} casino number is {var}')
        return var

func(50)