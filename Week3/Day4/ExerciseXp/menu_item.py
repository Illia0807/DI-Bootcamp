import psycopg2
from db_connection import DatabaseConnection

class MenuItems:
        def __init__(self, name, price):
                self.name = name
                self.price = price

        def save(self):
        # """Сохраняет объект в таблице Menu_Items"""
                db = DatabaseConnection()
                db.cursor.execute("INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s)", 
                                                                (self.name, self.price))
                db.commit()
                db.close()

        def delete(self):
        # """Удаляет объект из таблицы"""
                db = DatabaseConnection()
                db.cursor.execute("DELETE FROM Menu_Items WHERE item_name = %s", (self.name,))
                db.commit()
                db.close()

        def update(self, new_name, new_price):
        # """Обновляет объект в таблице"""
                db = DatabaseConnection()
                db.cursor.execute("UPDATE Menu_Items SET item_name = %s, item_price = %s WHERE item_name = %s",
                          (new_name, new_price, self.name))
                db.commit()
                db.close()
                self.name = new_name
                self.price = new_price
        