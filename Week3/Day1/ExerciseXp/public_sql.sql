-- CREATE TABLE customers(
-- 	id SERIAL PRIMARY KEY ,
-- 	customer_name VARCHAR(100) NOT NULL,
-- 	customer_last_name VARCHAR(100) NOT NULL

-- )
--
-- INSERT INTO customers (customer_name,customer_last_name)
-- VALUES
-- ('Greg ','Jones'),
-- ('Sandra  ','Jones'),
-- ('Scott  ','Scott'),
-- ('Trevor  ','Green'),
-- ('Melanie  ','Johnson')

-- SELECT * FROM items
-- SELECT customer_last_name FROM customers WHERE customer_last_name = 'Smith';
-- SELECT customer_last_name FROM customers WHERE customer_last_name = 'Jones';
SELECT customer_last_name FROM customers WHERE customer_last_name != 'Jones';
