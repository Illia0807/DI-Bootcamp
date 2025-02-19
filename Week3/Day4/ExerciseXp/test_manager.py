from menu_manager import MenuManager
from menu_item import MenuItems

# Добавляю
test_item = MenuItems("Pizza", 15)
test_item.save()

# Проверяю
found_item = MenuManager.get_by_name("Pizza")
print("Найден элемент:", found_item)  

# Проверяю все 
all_items = MenuManager.all_items()
print("Все элементы меню:", all_items)  

# Удаляю
test_item.delete()