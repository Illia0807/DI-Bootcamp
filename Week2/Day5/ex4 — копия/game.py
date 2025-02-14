import random
class Game:
        game_result={"win":0,"lost":0,"draw":0}
        def __init__(self):
                self.element_list=["rock","paper","scissors"]
        def get_user_item(self):
                
                while True:
                        
                        
                        try:
                                user_info=input("choise  some-> ").strip().lower()
                                
                                if user_info not in self.element_list:
                                        raise ValueError("not correct")
                                
                                
                        except ValueError as e:
                                str(e)
                                print("aloooo try one more time")
                                continue
                                
                        else:
                               return user_info
                        
        def get_computer_item(self):
                return random.choice(self.element_list)
        
        def get_game_result(self, user_item, computer_item):
                if user_item==computer_item:
                        return "draw"
                win_conditions = {
    "rock": "scissors",  
    "scissors": "paper", 
    "paper": "rock"       
}
                if win_conditions[user_item]==computer_item  :
                        return "win"  
                else:
                        return "lost" 
        def play(self):
                user_item=self.get_user_item() 
                computer_item=self.get_computer_item()
                result = self.get_game_result(user_item, computer_item)
                self.game_result[result] += 1
                return  self.game_result



                

