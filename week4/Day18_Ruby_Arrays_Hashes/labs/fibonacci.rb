# Given a number N from the user. Generate an array that contains the first 
# N numbers of the fibonacci sequence.
# note: In mathematics, the Fibonacci numbers or Fibonacci series or 
# Fibonacci sequence are the numbers in the following integer sequence:
# 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
# The sequence starts with 1 and then every number is the sum of the two 
# previous numbers.

print "give me the number:"
number = gets.chomp.to_i

array = []
array << number
new_number = array[0] + number
array << new_number
p array