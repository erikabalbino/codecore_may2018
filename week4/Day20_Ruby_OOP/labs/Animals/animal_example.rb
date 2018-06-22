require "./animal.rb"
require "./dog.rb"
require "./cat.rb"

dog1 = Dog.new("Erika", "Red")

cat1 = Cat.new("Juliana", "Black", 2)

puts "Dogs:"
dog1.eat
dog1.walk

puts "Cats"
cat1.eat
cat1.walk
