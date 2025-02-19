import psycopg2

class DatabaseConnection:
    """Класс для управления подключением к базе"""
    def __init__(self):
        self.conn = psycopg2.connect(dbname="my_restaurant", user="postgres", password="9988774411Bb!", host="localhost",
        port="5432")
        self.cursor = self.conn.cursor()

    def commit(self):
        """Фиксирует изменения"""
        self.conn.commit()

    def close(self):
        """Закрывает соединение"""
        self.cursor.close()
        self.conn.close()