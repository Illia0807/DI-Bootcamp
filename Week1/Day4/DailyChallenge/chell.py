import re
matrix="7iiTsxh%?i #sM $a #t%^r!"
# filtered = re.sub(r'[^a-zA-Zа-яА-Я]', '', matrix)
# print(filtered)

rows, cols = 3, 3

arr=[['' for _ in range(cols)] for _ in range(rows)]
index = 0
for r in range(rows):
    for c in range(cols):
        if index < len(matrix):
            arr[r][c] = matrix[index]
            index += 1

for row in arr:
    print(row)

letters = []

for c in range(len(matrix[0])):
    for r in range(len(matrix[0])):
     char = matrix[r][c]
     if char.isalpha():
         letters.append(char)
    
print(letters)