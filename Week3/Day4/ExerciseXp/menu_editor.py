from menu_manager import MenuManager
from menu_item import MenuItems

def show_user_menu():
 while True:
        print("\nProgram menu:")
        print("V - View an Item")
        print("A - Add an Item")
        print("D - Delete an Item")
        print("U - Update an Item ")
        print("S - Show the Menu ")
        print("Q - Quit")

        choice = input("choice action:-> ").strip().upper()
        if choice == "V":
            view_item()

        elif choice == "A":
            add_item_to_menu()

        elif choice == "D":
            remove_item_from_menu()

        elif choice == "U":
            update_item_from_menu()

        elif choice == "S":
            show_restaurant_menu()

        elif choice == "Q":
            print("quit from program.")
            show_restaurant_menu()
            break

        else:
            print("wrong choise! try again.")

def view_item():
    name = input("Enter the dish name: -> ")
    item = MenuManager.get_by_name(name)
    if item:
        print(f"{item[1]} - {item[2]}$")
    else:
        print("Dish not found.")

#добавление вариант 2
def add_item_to_menu():
    name = input("Enter the name of the new dish:-> ")
    price = int(input("Enter the price:-> "))
    new_item = MenuItems(name, price)
    new_item.save()
    print('item was added successfully')
  
    

def remove_item_from_menu():
    name = input("Enter the name of the dish to delete:-> ")
    item_to_remove = MenuItems(name, None)
    item_to_remove.delete()
    print(f"dish '{name}' Successfully deleted.")

# обновление вариант 2
def update_item_from_menu():
    old_name  = input("Enter the name of the dish to update:-> ")
    new_name = input("Enter the new name:-> ")
    new_price = int(input("Enter the new price:-> "))
    item_to_update = MenuItems(old_name , 0)
    item_to_update.update(new_name, new_price)
    print("Dish updated successfully.")
        
   

def show_restaurant_menu():
    items = MenuManager.all_items()
    print("\nrestourant manu:")
    for item in items:
        print(f"{item[1]} - {item[2]}$")
    print('==========================')

show_user_menu()