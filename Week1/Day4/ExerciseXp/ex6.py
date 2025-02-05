magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def make_great():
        for name in range(len(magician_names)):
                magician_names[name]+=" the great"
                

def show_magicians():
        for name in magician_names:
                print(name)

make_great()
show_magicians()