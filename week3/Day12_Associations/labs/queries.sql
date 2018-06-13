-- LAB 1

-- 1 - Find the average line_item total price (meaning quantity * price) for each order that were completed 
-- in January 2016 month.
-- [Note] the total price in the line_items table is price per unit and not total price.
-- SELECT 
--     completed_on,
--     ROUND(AVG(quantity * price)) AS Average_line_items
-- FROM orders
-- INNER JOIN line_items ON order_id = orders.id
-- WHERE completed_on BETWEEN '2016/01/01' AND '2016/01/31'
-- GROUP BY completed_on;

--         completed_on        | average_line_items
-- ----------------------------+--------------------
--  2016-01-04 13:49:24.959639 |                 75
--  2016-01-18 13:49:24.092962 |                 22
--  2016-01-25 13:49:26.121603 |                233
-- (3 rows)

-- 2 - Select product names, product prices and the lowest price they were sold at during the last 6 months.

-- SELECT
--     name, 
--     products.price, 
--     MIN(line_items.price) AS Lowest_price
-- FROM line_items
-- INNER JOIN products ON product_id = products.id
-- INNER JOIN orders ON order_id = orders.id
-- WHERE orders.completed_on > current_date - interval '6 months'
-- GROUP BY products.id;

--            name            | price | lowest_price
-- ---------------------------+-------+--------------
--  Fantastic Leather Watch   | 92.47 |        84.47
--  Ergonomic Concrete Coat   | 45.79 |        45.79
--  Intelligent Granite Shoes | 60.43 |        51.43
--  Mediocre Bronze Wallet    | 38.88 |        38.88
--  Awesome Wool Lamp         | 93.82 |        93.82
--  Ergonomic Rubber Hat      | 56.47 |        56.47
--  Enormous Cotton Gloves    | 26.78 |        36.78
--  Gorgeous Marble Pants     | 80.72 |        85.72
--  Enormous Rubber Chair     |   0.1 |          0.1
--  Sleek Steel Plate         | 81.05 |        81.05
--  Mediocre Bronze Pants     | 47.31 |        53.31
--  Small Wool Gloves         | 94.52 |        94.52
-- (12 rows)

-- LAB 2

-- [Note] the price in the line_items table is price per unit and not total price.
-- 1 - Calculate how many items in stock we've ever had for each product (remaining or sold) in the database.

-- SELECT
--     products.name,
--     products.remaining_quantity AS Product_remaining,
--     SUM(line_items.quantity) AS Sum_Line_Items,
--     COALESCE(SUM(line_items.quantity), 0) + products.remaining_quantity AS stock
-- FROM products
-- -- INNER JOIN line_items ON product_id = products.id
-- LEFT JOIN line_items ON product_id = products.id
-- GROUP BY line_items.id, products.id
-- ORDER BY name;


-- 2 - Find the average order total price for all the orders in the system

-- SELECT ROUND(AVG(total_price)) AS Average_order_total_price
-- FROM (
--  SELECT 
--     order_id, 
--     -- ROUND(AVG(SUM(price * quantity))) as total_price
--     SUM(price * quantity) as total_price
--  FROM line_items
--  GROUP BY order_id
-- ) AS average

--  average_order_total_price
-- ---------------------------
--                        292
-- (1 row)

-- LAB 3
-- 1. Select all the products that have been purchased in the last 12 months.
/*
Relevant tables: 
- Completion date from ORDERS table
- Product names & IDs from PRODUCTS table
- LINE ITEMS table since it links PRODUCTS & ORDERS
*/

-- SELECT products.id, products.name, orders.completed_on
-- FROM products
-- INNER JOIN line_items ON products.id = line_items.product_id
-- INNER JOIN orders ON orders.id = line_items.order_id
-- WHERE completed_on > NOW() - INTERVAL '12 months';

-- Result : (37 rows)

-- 2. Select the top 10 products in terms of last year's gross sales.
/*
Relevant tables: 
- Product names from PRODUCTS table
- Gross value (price * quantity), per product, from LINE ITEMS table
- Completion date from ORDERS table
*/

-- SELECT
--     products.name,
--     SUM(line_items.price * line_items.quantity) AS total_value
-- FROM products
-- INNER JOIN line_items ON products.id = line_items.product_id
-- INNER JOIN orders ON orders.id = line_items.order_id
-- WHERE completed_on > NOW() - INTERVAL '12 months'
-- GROUP BY products.name
-- ORDER BY total_value DESC LIMIT 10;

-- Result: (10 rows)

-- 3. Select all the products that weren't purchased during the last 12 months.

SELECT *
FROM products
WHERE products.id NOT IN (
-- the query below selects the product ids of all of the ordered products
SELECT p.id
FROM products as p
INNER JOIN line_items as li ON p.id = li.product_id
INNER JOIN orders as o ON o.id = li.order_id
WHERE o.completed_on > CURRENT_DATE - INTERVAL '12' MONTH
)
ORDER BY products.id;

-- Result: (37 rows)

------------------------------------------------------------------------------------------
-- TABLES:
--  cars              
--  courses           
--  enrolments        
--  line_items        
--  orders            
--  products          
--  projects          
--  schema_migrations 
--  students          