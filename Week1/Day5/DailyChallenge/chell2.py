import string

#chell 2

#"Margaret's toy is a pretty doll."
#input("Enter a sentence")
user_info = input("Enter a sentence->")
words_list = [word for word in user_info.split(" ")]
print(words_list)
filtered_words=sorted([word.strip(string.punctuation) for word in words_list],key=len)
print(filtered_words[-1])
