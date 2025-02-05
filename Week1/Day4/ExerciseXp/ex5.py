#5.1
# def make_shirt(size="",text=""):
#         print(f'"The size of the shirt is {size} and the text is {text}"')
     

# make_shirt("L","Popo")

#5.2
# def make_shirt(size="L",text="ILV python"):
#         print(f'"The size of the shirt is {size} and the text is {text}"')

# make_shirt("S", "Beer")

def make_shirt(**kwargs):
        print(f'"The size of the shirt is {kwargs["size"]} and the text is {kwargs["text"]}"')

make_shirt(size="L",text="Beer")
