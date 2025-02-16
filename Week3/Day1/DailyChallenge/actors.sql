-- CREATE TABLE actors (
-- actor_id SERIAL PRIMARY KEY,
-- first_name VARCHAR (100) NOT NULL,
-- last_name VARCHAR (200) NOT NULL,
-- age DATE NOT NULL,
-- numver_oscars SMALLINT NOT NULL)

-- SELECT * FROM actors
-- SELECT first_name,age  FROM actors

-- INSERT INTO actors (first_name,last_name,age,numver_oscars)
-- VALUES
-- ('Matt','Damon','08/10/190',5)

-- SELECT * FROM actors

-- INSERT INTO actors (first_name,last_name,age,numver_oscars)
-- VALUES
-- ('George','Clooney','06/05/1961', 2);
--('John','Smith','08/11/1980',5),
-- ('Mon','Blanc','06/10/1908',6),
-- ('Bon','Con','02/10/1999',7);
-- SELECT * FROM actors

-- SELECT first_name,numver_oscars  FROM actors WHERE first_name != 'Matt' AND numver_oscars <3
-- SELECT * FROM actors

-- SELECT * FROM actors WHERE last_name ILIKE 'DA%' 
-- LIKE=CASE SENSETIVE
--%LIKE=CASE SENSETIVE

-- SELECT first_name,numver_oscars FROM actors  WHERE first_name = 'Matt' OR first_name='John' ORDER BY numver_oscars  

-- SELECT * FROM actors

-- UPDATE actors 
-- SET first_name= 'NAtaly',
-- last_name='Portman'
-- WHERE 
-- first_name='George' AND last_name= 'Clooney';

-- SELECT * FROM actors

-- DELETE FROM actors WHERE first_name='Bon'

-- SELECT * FROM actors

-- ALTER TABLE actors RENAME numver_oscars TO  numbers_of_oscars

-- SELECT * FROM actors

-- ALTER TABLE actors ADD COLUMN country VARCHAR(100)

-- SELECT * FROM actors

-- UPDATE actors 
-- SET country= 'USA'
-- WHERE 
-- country IS NULL

-- SELECT * FROM actors
-- DROP TABLE IF EXISTS
-- SELECT COUNT(*) FROM actors;
-- INSERT INTO actors (first_name, last_name, age, numbers_of_oscars)
-- VALUES ('John Doe', NULL, NULL, NULL)

-- ALTER TABLE actors ALTER COLUMN last_name SET DEFAULT 'Unknown';

INSERT INTO actors (first_name, last_name, age, numbers_of_oscars)
VALUES ('John Doe', NULL, NULL, NULL)






