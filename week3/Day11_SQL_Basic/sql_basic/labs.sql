
-- ==>> LAB1
/*Create a student record with the following attributes: first_name: John, 
last_name: Smith, Age: 45, email: john@smith.com registration_date: January 1st 2016, 
ber: 778.778.7787*/

-- INSERT INTO students
--     (first_name, last_name, age, email, registration_date, phone_number)
--     VALUES
--     ('Jonh', 'Smith', 45, 'ohn@smith.com', '2016/01/01', '778.778.9999');

/*Select that student from the database be fetching the last record*/

-- SELECT id, first_name, last_name, age
-- FROM students
-- ORDER BY id DESC
-- LIMIT 1;

/*Using the id you fetched from the previous exercise, update the age of that record 
to become 50*/

-- UPDATE students
-- SET age = 50
-- WHERE id = 503;

-- Delete that record using its id

-- DELETE FROM students WHERE id = 502;

-- ==>> LAB2

-- From the students table:

-- 1 - Select the first 10 students whose ages are between 35 and 45.*/

-- SELECT id, first_name, last_name, age
-- FROM students
-- WHERE age BETWEEN 35 and 45
-- ORDER BY id ASC
-- LIMIT 10;


-- 2 - Select the third set of 10 students whose ages are more than 25 and 
-- whose first names contain `le`. 
-- The students must be ordered by their id then first name in a descending order.

-- SELECT id, first_name, last_name, age
-- FROM students
-- WHERE age > 25 AND first_name ILIKE '%le%'
-- ORDER BY id ASC, first_name DESC
-- OFFSET 20
-- LIMIT 10;


-- 3 - Select the 10 oldest students (You should ignore students with an age 
-- that is `NULL`).
-- SELECT id, first_name, last_name, age
-- FROM students
-- WHERE age IS NOT NULL
-- ORDER BY age DESC
-- LIMIT 10;

-- 4 - Select all students with age 45 whose last names contain the letter n. */
-- SELECT id, first_name, last_name, age
-- FROM students
-- WHERE age = 45 AND last_name ILIKE '%n%';


-- From the products table:
-- id                 | 3
-- name               | Practical Bronze Chair
-- description        | Voluptatem animi eum. Fugiat dolorem magnam. Eum aut quae. Voluptas sed qui quia quia. Ipsum rem sint.
-- price              | 63.65
-- sale_price         | 60
-- remaining_quantity | 0
-- created_at         | 2018-04-23 13:49:22.377147
-- updated_at 

-- Select all the products that are on sale.
-- SELECT id, name, sale_price, remaining_quantity
-- FROM products
-- -- WHERE sale_price != 0;
-- WHERE sale_price IS NOT NULL;

-- Select all the products that are on sale and have remaining items
-- in stock ordered by the sale price in ascending order. 
-- SELECT id, name, sale_price, remaining_quantity
-- FROM products
-- WHERE sale_price IS NOT NULL AND remaining_quantity != 0
-- ORDER BY sale_price ASC;

-- Select all the products priced between 25 and 50 (regular price) and that 
-- are on sale.
-- SELECT id, name, price, sale_price, remaining_quantity
-- FROM products
-- WHERE 
--     price BETWEEN 25 AND 50 AND
--     sale_price IS NOT NULL
-- ORDER BY price ASC;

-- ==>> LAB 3 Queries
-- For the products table:
-- id                 | 3
-- name               | Practical Bronze Chair
-- description        | Voluptatem animi eum. Fugiat dolorem magnam. Eum aut quae. Voluptas sed qui quia quia. Ipsum rem sint.
-- price              | 63.65
-- sale_price         | 60
-- remaining_quantity | 0
-- created_at         | 2018-04-23 13:49:22.377147
-- updated_at 

-- 1 - Select the product whose stock has the most value (use sale price)
-- SELECT  
--     MAX(sale_price * remaining_quantity)  AS stock_value, 
--     id, name
-- FROM products
-- WHERE 
--     remaining_quantity != 0
-- GROUP BY id
-- ORDER BY stock_value DESC
-- LIMIT 1;

--  stock_value | id  |       name        
-- -------------+-----+-------------------
--      4631.48 | 404 | Small Wool Gloves
-- (1 row)

-- 2 -Select the most expensive product whose price is between 25 and 50 with remaining quantity
-- SELECT  
--     MAX(price) AS expensive_product, remaining_quantity,
--     id, name
-- FROM products
-- WHERE 
--     price BETWEEN 25 AND 50 AND
--     remaining_quantity != 0
-- GROUP BY id
-- ORDER BY expensive_product DESC
-- LIMIT 1;

--  expensive_product | remaining_quantity | id  |            name            
-- -------------------+--------------------+-----+----------------------------
--              48.61 |                  7 | 135 | Intelligent Concrete Shoes
-- (1 row)

-- 3 - Select all products on sale with remaining quantity, ordered by their price and then their name
SELECT  
    id, price, name, sale_price, remaining_quantity
FROM products
WHERE 
    (price > sale_price)  AND
    remaining_quantity != 0
ORDER BY price, name;

-- 4 - Select the second set 20 results based on the previous query
SELECT  
    id, price, name, sale_price, remaining_quantity
FROM products
WHERE 
    (price > sale_price)  AND
    remaining_quantity != 0
ORDER BY price, name
OFFSET 20
LIMIT 20;

-- Find the average price of all products
-- Find the average sale_price of all products that are on sale
-- Find the average price of all products that are on sale with remaining quantity
-- Update all the products whose name contains `paper` (case insensitive) to have a remaining quantity of 0
-- Is it possible to revert the query in question 8?
-- Update all the products whose name contains `paper` or `steel` to have a remaining quantity of a random number between 5 and 25
-- Select the second set of 10 cheapest products with remaining quantity
-- Build a query that groups the products by their sale price and show the number of products in that price and the sum of remaining quantity. Label the count `product_count`
-- [stretch] Update the most expensive product to have double its quantity in a single query