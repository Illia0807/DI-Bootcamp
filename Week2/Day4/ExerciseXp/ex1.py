import random





def get_words_from_file(file_name):
        with open(file_name, "r", encoding="utf-8") as f:
                content = f.read()
        return content.split()

def get_random_sentence(lenght):
        words_list=get_words_from_file("text.txt")
        random_words= random.sample(words_list,lenght)
        sentence=" ".join(random_words).lower().capitalize()
        return sentence

def main():
        print("A message that explaining what the program does")
        while True:
                try:
                        user_info=int(input("enter the number 2~20->"))
                        if 2<=user_info<21:
                                print("perfect")
                                return get_random_sentence(user_info)
                        else:
                                print("Hallo, er stond net 2~20! ")        
                except ValueError:
                        print("enter a  number ")
                        continue
        

# print(get_random_sentence(7))

print(main())
