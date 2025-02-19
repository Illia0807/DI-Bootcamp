import requests
import psycopg2
from psycopg2 import sql

def get_random_countries(count=10):
    url = f"https://restcountries.com/v3.1/all"
    response = requests.get(url)
    
    

    countries = response.json()
    random_countries = countries[:count]
    
    # Собираем необходимые данные
    country_data = []
    for country in random_countries:
        name = country.get("name", {}).get("common", "")
        capital = country.get("capital", [""])[0] 
        flag = country.get("flags", {}).get("png", "")
        subregion = country.get("subregion", "")
        population = country.get("population", 0)
        
        country_data.append((name, capital, flag, subregion, population))

    return country_data

def save_countries_to_db(countries):
   
    conn = psycopg2.connect(
        dbname="my_countries", 
        user="postgres", 
        password="9988774411Bb!", 
        host="localhost", 
        port="5432"
    )
    cursor = conn.cursor()

    # Запрос для вставки данных в таблицу
    insert_query = sql.SQL("""
        INSERT INTO countries (name, capital, flag, subregion, population)
        VALUES (%s, %s, %s, %s, %s)
    """)

    # Записываем данные в таблицу
    for country in countries:
        cursor.execute(insert_query, country)

    # Подтверждаем изменения и закрываем соединение
    conn.commit()
    cursor.close()
    conn.close()

def main():
    countries = get_random_countries()
    save_countries_to_db(countries)
    print("10 random countries have been successfully saved to the database.")

main()