

class Text:
        def __init__(self,text):
                self.text= text
                
        def __str__(self):
                return self.text
        
        def words_counter(self,word):
                words = self.text.lower().split()
                word_count = {w: words.count(w) for w in set(words)}
                return word_count.get(word.lower(), f" word '{word}' dont find in text.")
        
        def most_common_word(self):
                words = self.text.lower().split()
                if not words:
                        return "text not find"
                word_count = {w: words.count(w) for w in set(words)}
                most_common = max(word_count, key=word_count.get)
                return most_common
        def unique_words(self):
                words = self.text.lower().split()
                return list(set(words))
        @classmethod
        def text_from_file(cls,file_name):
                with open(file_name, 'r', encoding='utf-8') as file_obj:
                        text = file_obj.read()
                return cls(text)        





book_test=Text.text_from_file("the_stranger.txt")
print(book_test.most_common_word())

# 

# user_string="A good book would sometimes cost as much as  good house"
# text=Text(user_string)
# print(text)
# print(text.words_counter('good'))
# print(text.most_common_word())
# print(text.unique_words())
