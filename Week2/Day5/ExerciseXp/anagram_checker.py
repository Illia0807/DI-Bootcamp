
from collections import Counter
import re
class AnagramChecker:
        def __init__(self):
                self.text="sowpods.txt"
                with open(self.text, 'r', encoding='utf-8') as file_obj:
                        self._words = file_obj.read().split()
        @property
        def get_words(self):
                return self._words
                

        def __str__(self):
                return self.text
        #makes a dictionary from a word where letter = key quantity-value
        def _get_word_count(self,word):
                word=word.strip().lower()
                return Counter(word)
        #all anagrams
          
        def get_anagrams(self,word):
                anagram_list=[]
                number_of_letters=self._get_word_count(word)  
                for leter in self._words:
                      if self._get_word_count(leter) ==number_of_letters:
                              anagram_list.append(leter)
                return anagram_list

        
        

        #if word accept
        #another version
        # def is_valid_word(self,word):
        #         if not word.isalpha():
        #                 raise ValueError(f"the words{word}is not correct, use only letters")
        #         return
                
        #version 1    
        # def is_valid_word(self,word):
        #         word=word.strip().lower()
        #         try:
        #                  if not word.isalpha():
        #                          raise ValueError(f"the words{word}is not correct, use only letters")
        #         except ValueError as e:
        #                 return str(e)
               
        #         return (f"word {word} is valid")
        #version 2
        def is_valid_word(self, word):
                word = word.strip().lower()
                if not re.match("^[a-zA-Z]+$", word):
                        raise ValueError(f"The word '{word}' is not valid. Please use only English letters.")
                # if not word.isalpha():
                #         raise ValueError(f"The word {word} is not correct, use only letters")
                return True 
                
                
        
        #if wors have a same latters
        #no reason to do
        # def is_anagram(word1, word2):
        #         pass
        #метды не должны ничего печатать, после я вызову этот метод в другам классе через импорт и там все буду проверять 

# test=AnagramChecker()
# # print(test.get_words[5:10])
# print(test.is_valid_word('meat'))
# print(test.get_anagrams("meat"))
