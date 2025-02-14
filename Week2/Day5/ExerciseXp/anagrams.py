from anagram_checker import AnagramChecker
test=AnagramChecker()
while True:
        try:
                user_info=input("hi,enter one  word here->")

                if user_info.lower()=="exit":
                        print("the program is completed")
                        break
                test.is_valid_word(user_info)

        except ValueError as e:
                #  
                #print("the word is not valid,try again")
                print(e)
                continue
        else:
                anagrams=test.get_anagrams(user_info)
                print("This is a valid English word.")
                print(f'anagrams for {user_info}:{",".join(anagrams)}')
        

        


                # if  test.is_valid_word(user_info):
                #         anagrams=test.get_anagrams(user_info)
                #         print(f'anagrams for {user_info}: {", ".join(anagrams)}')
                #         # if anagrams:
                #                 #  print(f'anagrams for {user_info}:{",".join(anagrams)}')
                                 
                #         # else:
                #         #         print(f'anagramf for word {user_info} not found')
                # else:
                #         print(f'The word "{user_info}" is not valid, try again.')
        


                        

                        
                        
                
                        

                
               

       
                

