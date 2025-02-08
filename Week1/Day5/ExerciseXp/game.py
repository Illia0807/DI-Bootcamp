board = [[" ", " ", " "],
         [" ", " ", " "],
         [" ", " ", " "]]

def display_board():
    # Заголовок
    print("TIC TAC TOE")
    # Верхняя рамка
    print("*" * 19)  
    for i in range(3):
        print(f"*  {board[i][0]}  |  {board[i][1]}  |  {board[i][2]}  *")
        if i < 2:
            
            print("* --- | --- | --- *") 
    #нижняя рамка
    print("*" * 19) 

def check_win():
    win_lines = [
        [(0, 0), (0, 1), (0, 2)],  # Первая строка
        [(1, 0), (1, 1), (1, 2)],  # Вторая строка
        [(2, 0), (2, 1), (2, 2)],  # Третья строка
        [(0, 0), (1, 0), (2, 0)],  # Первый столбец
        [(0, 1), (1, 1), (2, 1)],  # Второй столбец
        [(0, 2), (1, 2), (2, 2)],  # Третий столбец
        [(0, 0), (1, 1), (2, 2)],  # Главная диагональ
        [(0, 2), (1, 1), (2, 0)]   # Побочная диагональ
    ]
    for line in win_lines:
        a, b, c = line
        if board[a[0]][a[1]] == board[b[0]][b[1]] == board[c[0]][c[1]] and board[a[0]][a[1]] != " ":
            return board[a[0]][a[1]]
    return None

def player_input(player):
    '''Asks for the player's move. '''
    while True:
         print(f"Player {player}'s turn...")
         row = int(input("Enter row (0-2): "))  
         col = int(input("Enter column (0-2): "))  
         if board[row][col] == " ":
            return row, col
         else:
            print("❌ Cell is occupied! Choose another one.")
            
            
        

def play():
    """Game logic."""
    current_player = "X"
    
    for _ in range(9):  # Max 9 
        display_board()
        row, col = player_input(current_player)
        board[row][col] = current_player  # Заполняем клетку
    
        winner = check_win()
        if winner:
            display_board()
            print(f"The winner is playe{winner}!")
            return

        current_player = "O" if current_player == "X" else "X"  # Change plater

    display_board()
    print("Draw")

play()
                


         
