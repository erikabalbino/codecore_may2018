--Find the number of students named 'Elinore'.
SELECT
  first_name,
  COUNT(*) AS number_students
  FROM students
  WHERE first_name = 'Elinore'
  GROUP BY first_name;

--List the `first_name`s that occur more than once in students, with the number occurrences of that name.
SELECT
  first_name,
  COUNT(*) AS occurrences
  FROM students
  GROUP BY first_name
  HAVING COUNT(*) > 1;

--Refine the above query to list the 20 most common first_names among students, in order first of how common they are, and alphabetically when names have the same count.
SELECT
  first_name,
  COUNT(*) AS occurrences
  FROM students
  GROUP BY first_name
  HAVING COUNT(*) > 1 
  ORDER BY COUNT(*) DESC, first_name ASC
  LIMIT 20;

--Find the most expensive product.
SELECT id, name, price, remaining_quantity
  FROM products
  ORDER BY price DESC
  LIMIT 1;

--Find the cheapest product that is on sale.
SELECT id, name, price, remaining_quantity
  FROM products
  WHERE sale_price != price 
  ORDER BY price ASC
  LIMIT 1;

--Find the total value of all inventory in stock (use sale price).
SELECT
  ROUND(SUM(sale_price)) AS total_value
  FROM products;


