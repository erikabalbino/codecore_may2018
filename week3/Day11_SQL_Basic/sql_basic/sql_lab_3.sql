-- 1. Select the product whose stock has the most value (use sale price)

SELECT MAX(sale_price * remaining_quantity) AS Value, id, name
FROM products
WHERE remaining_quantity > 0
GROUP BY id
ORDER BY Value DESC;
-- LIMIT 1 ;

-- 2. Select the most expensive product whose price is between 25 and 50 with remaining quantity

SELECT MAX(price) AS max_price, id, name
FROM products
WHERE (price BETWEEN 25 AND 50) AND (remaining_quantity > 0) 
GROUP BY id
ORDER BY max_price DESC
LIMIT 1;

-- 3. Select all products on sale with remaining quantity ordered by their price and then their name


SELECT id, name, price, sale_price, remaining_quantity
FROM products
WHERE (price > sale_price) AND (remaining_quantity > 0)
ORDER BY price, name ;

-- 4. Select the second set 20 results based on the previous query

SELECT id, name, price, sale_price, remaining_quantity
FROM products
WHERE (price > sale_price) AND (remaining_quantity > 0)
ORDER BY price, name 
OFFSET 20
LIMIT 20;


-- 5. Find the average price of all products

SELECT AVG(price)
FROM products;



-- 6. Find the average sale_price of all products that are on sale

SELECT AVG(sale_price)
FROM products
WHERE (price > sale_price) ;



-- 7. Find the average price of all products that are on sale with remaining quantity

SELECT AVG(price)
FROM products
WHERE (price > sale_price) and (remaining_quantity > 0);

-- 8.Update all the products whose name contains `paper` (case insensitive) to have a remaining quantity of 0

UPDATE products
SET remaining_quantity = 0
WHERE name iLIKE '%paper%';

-- 9. Is it possible to revert the query in question 8?

SELECT *
FROM products
WHERE name iLIKE '%paper%';
ROLLBACK WORK;


-- 10. Update all the products whose name contains `paper` or `steel` to have a remaining quantity of a random number between 5 and 25

UPDATE products
SET remaining_quantity = random()*(20) + 5
WHERE name iLIKE '%paper%' OR name iLIKE '%steel%';

-- for test,

SELECT name, remaining_quantity
from products
WHERE name iLIKE '%paper%' OR name iLIKE '%steel%';

-- 11. Select the second set of 10 cheapest products with remaining quantity

SELECT id, name, price
FROM products
WHERE remaining_quantity > 0
ORDER BY price 
OFFSET 10
LIMIT 10;

-- 12.Build a query that groups the products by their sale price and 
-- show the number of products in that price and the sum of remaining quantity. 
-- Label the count `product_count`

SELECT sale_price, count(*) AS product_count, sum(remaining_quantity) AS total_remaining_quantity
FROM products
GROUP BY sale_price;

-- [stretch] Update the most expensive product to have double its quantity in a single query
SELECT MAX(price), id, remaining_quantity
FROM products
GROUP by id
ORDER by price desc;

 
UPDATE products
SET remaining_quantity = remaining_quantity *2
where price = (SELECT MAX(price) FROM products);


SELECT MAX(price), id, remaining_quantity
FROM products
GROUP by id
ORDER by price desc;
