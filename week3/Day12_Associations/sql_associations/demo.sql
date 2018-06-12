-- ASSOCIATIONS
-- DEMO: Students From Courses
-- SELECT * FROM projects WHERE student_id = 2;

-- Exercise:
-- SELECT id, student_id, score FROM enrolments WHERE course_id= 1;

-- JOINS
-- CROSS JOIN

-- Demo: Students with Projects

-- SELECT *
--   FROM students
--   CROSS JOIN projects;

-- INNER JOINS

-- Demo: First Join

-- SELECT
--     students.id,
--     students.first_name,
--     projects.id AS project_id,
--     projects.title
--   FROM students
--   INNER JOIN projects ON students.id = projects.student_id
--   ORDER BY students.first_name;

-- SELECT
--     students.id,
--     students.first_name,
--     count(projects.id) AS number_of_projects
--   FROM students
--   INNER JOIN projects ON students.id = projects.student_id
--   GROUP BY students.id;

-- Exercise: What projects?
-- SELECT 
--     -- students.id,
--     students.first_name,
--     projects.title
-- from students
-- INNER JOIN projects ON students.id = projects.student_id
-- -- GROUP BY students.id, projects.title
-- ORDER BY projects.title;


-- MULTIPLE JOINS

-- Demo: Students from Courses

-- SELECT students.id, first_name, title, score
-- FROM students
-- INNER JOIN enrolments ON enrolments.student_id = students.id
-- INNER JOIN courses ON courses.id = enrolments.course_id
-- WHERE courses.title ILIKE '%hybrid matrix%';

-- Exercise: Classes with Jo*
-- Find all courses that have at least one student
-- whose name begins with 'Jo'. Show the course title,
-- student names and their scores.

-- SELECT courses.title, students.first_name, enrolments.score
--   FROM courses
--   INNER JOIN enrolments ON enrolments.course_id = courses.id
--   INNER JOIN students ON enrolments.student_id = students.id
--   WHERE students.first_name ILIKE 'Jo%';

-- My solution starting from students table (same result!)
-- SELECT title, first_name, score
-- FROM students
-- INNER JOIN enrolments ON enrolments.student_id = students.id
-- INNER JOIN courses ON courses.id = enrolments.course_id
-- WHERE first_name ILIKE 'Jo%';

-- LEFT JOIN & RIGHT JOIN

-- Demo: Students & Project

-- SELECT first_name, last_name, projects.title
--   FROM students
--   LEFT JOIN projects ON students.id = projects.student_id
--   ORDER BY projects.title DESC;

-- SELECT first_name, last_name, projects.title
--   FROM projects
--   RIGHT JOIN students ON students.id = projects.student_id
--   ORDER BY projects.title DESC;

-- Exercise: Avg. Score of Courses
-- List the average score for each course with higher averages
-- on top displaying course title and score average.

-- SELECT courses.title AS course_title,
--     ROUND(AVG(score), 2) AS average_score
-- FROM courses
-- INNER JOIN enrolments ON courses.id = enrolments.course_id
-- GROUP BY courses.title
-- ORDER BY average_score DESC;

-- EXERCISE: Last Registered
-- List courses ordered by the last registered
-- student showing the course and the registration
-- date

-- SELECT
--     courses.title AS Course_title,
--     MAX(students.registration_date) AS Registration_date
--   FROM courses
--   INNER JOIN enrolments ON course_id = courses.id
--   INNER JOIN students ON student_id = students.id
--   GROUP BY courses.title
--   ORDER BY Registration_date DESC;

-- EXERCISE: List all courses with at least 10 enrolled students.
-- Show the number of enrolled students and course title.
-- Order by the number enrolled students.

-- SELECT *
-- FROM (
--     SELECT
--         courses.title,
--         COUNT(enrolments.student_id) AS Students_count
--     FROM courses
--     INNER JOIN enrolments ON course_id = courses.id
--     GROUP BY courses.title
--     ORDER BY Students_count DESC
-- ) AS course_with_counts
-- WHERE Students_count > 10;

-- EXERCISE: Failing Classes
-- Calculate the average score of all classes.
-- Show only classes with a average score lower than 60.
-- Display the course name, course id, average
-- score and enrolment count.

-- SELECT *
-- FROM  (
--     SELECT 
--         courses.title AS Course_name,
--         courses.id AS Course_id,
--         ROUND(AVG(score), 2) AS Average_score,
--         COUNT(enrolments.student_id) AS Students_count
--     FROM courses
--     INNER JOIN enrolments ON course_id = courses.id
--     GROUP BY courses.id
--     ORDER BY Average_score DESC
-- ) AS courses_with_stats
-- WHERE  Average_score < 60;

-- DEMO
-- 

-- DEMO: NO JOIN

-- SELECT score, course_id, 
-- FROM enrolments 
-- WHERE course_id IN (
--     SELECT id
--     FROM projects
--     WHERE title ILIKE ('t%')
-- )
-- ORDER BY course_id;





 



