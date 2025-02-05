#8.1

data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]
# def display_info (correct_answer,uncorrect_unsfer):
#           if uncorrect_unsfer >= 3:
#                replay = input("you have more tha 3uncorrect_unsfer. Play? (yes/no): ").strip().lower()
#                return replay=="yes"
#           return True
#         #   if uncorrect_unsfer:
#         #     incorect_cout+=1
#         #   elif incorect_cout>=3:
#         #        replay = input("you have more tha 3uncorrect_unsfer. Play? (yes/no): ").strip().lower()
#         #        if replay=="yes":
#         #             return True
#         #        return False
        


                 
#           print(f'correct_answer{correct_answer}')
#           print(f'uncorrect_unsfer{uncorrect_unsfer}')
          
          

# def ques_func(data):
#  while True:
#         correct_count  = 0
#         incorrect_answers = []
#         for  question_data in data:

#           question = question_data['question']
#           correct_answer = question_data['answer']
#           user_answer = input(f"{question} ").lower()
#           if correct_answer.lower()==user_answer:
#                correct_count +=1
#                display_info(correct_count,len(incorrect_answers))
#           else:
#               incorrect_answers.append(question_data)
#               display_info(correct_count,len(incorrect_answers))
#         print(f'Correct unswers{correct_count}') 
#         print(f'Incorrect {(incorrect_answers)}')
        


# ques_func(data)

def display_info (correct_answer,uncorrect_unsfer):
          if uncorrect_unsfer >= 3:
               print("You have more than 3 incorrect answers. Game over.")
               return False
          else:
               print(f'correct_answer{correct_answer}')
               print(f'uncorrect_unsfer{uncorrect_unsfer}')
          return True

        #   if uncorrect_unsfer:
        #     incorect_cout+=1
        #   elif incorect_cout>=3:
        #        replay = input("you have more tha 3uncorrect_unsfer. Play? (yes/no): ").strip().lower()
        #        if replay=="yes":
        #             return True
        #        return False
        


                 
          
          
          

def ques_func(data):
 while True:
        correct_count  = 0
        incorrect_answers = []
        for  question_data in data:

          question = question_data['question']
          correct_answer = question_data['answer']
          user_answer = input(f"{question} ").lower()
          if correct_answer.lower()==user_answer:
               correct_count +=1
              
          else:
              incorrect_answers.append(question_data)
          if not display_info(correct_count,len(incorrect_answers)):
               
               break
        
        replay = input("Would you like to play again? (yes/no): ").strip().lower()
        if replay != "yes":
                print("Thanks for playing!")
                break 
                   
             
       
        


ques_func(data)
