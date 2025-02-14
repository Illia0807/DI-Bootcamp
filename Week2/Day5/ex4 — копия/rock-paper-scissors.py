from game import Game 

def get_user_menu_choice():
     element_list=["g","x"]
     user_info=input("Menu:(g) Play a new game (x) Show scores and exit-> ").strip().lower()
     if user_info  in element_list:
               return user_info
    

def print_results(result):
  for key ,value in result.items():
        
   print(f"{key}:{value}")
 

def main():
  resulte = {}
  while True:
   
   var= get_user_menu_choice()
   if var=="g":
      resulte = Game().play()
   elif var=="x":  
        print_results(resulte)
        return 
        
   else:
       continue


main()


