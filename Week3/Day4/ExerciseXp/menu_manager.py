from db_connection import DatabaseConnection

from menu_item import MenuItems

class MenuManager:
    @classmethod
    def get_by_name(cls, name):
        # Находит объект по имени
        db = DatabaseConnection()
        db.cursor.execute("SELECT * FROM Menu_Items WHERE item_name = %s", (name,))
        item = db.cursor.fetchone()
        db.close()
        return item if item else None
    
    @classmethod
    def all_items(cls):
        #  Возвращает список всех элементов
        db = DatabaseConnection()
        db.cursor.execute("SELECT * FROM Menu_Items")
        items = db.cursor.fetchall()
        db.close()
        return items


item = MenuItems('Burger', 35)
item.save()
item2 = MenuManager.get_by_name('Burger')
print(item2)
# item.delete()
# item.update('Veggie Burger', 37)
# item2 = MenuManager.get_by_name('Beef Stew')
# print(item2)
# items = MenuManager.all_items()
# print(items)