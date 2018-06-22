require "./fizz_buzz.rb"

fb = FizzBuzz.new(3,5)
p fb.run # returns an array: [1, 2, 'fizz', 4, 'buzz, ...
fb.num1 = 2
fb.num2 = 3
p fb.run # returns an array: [1, 'fizz', 'buzz', 'fizz', 5, 'fizzbuzz'...