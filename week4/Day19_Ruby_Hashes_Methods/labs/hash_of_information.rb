# Ask the user for personal information: first name, last name, 
# city of birth and age. Then store that information in a hash. 
# After that loop through the hash and display the results, for 
# example:

# Your first name is Tam.

# Capitalize the inputs from the user if they are capitalizable.

hash = Hash.new(0)
print "Give your first name: "
hash.merge!("first name": gets.chomp.to_s.capitalize)

print "Give me your last name: "
hash.merge!("last name": gets.chomp.to_s.capitalize)

print "Give me your city of birth: "
hash.merge!(city: gets.chomp.to_s.capitalize)

print "Give me your age: "
hash.merge!(age: gets.chomp.to_s.to_i)

hash = 
hash.each { |key, value|
    puts "Your #{key} is #{value}"
}
p hash


# ==> Jocelyn solution
# info = [:"first name", :"last name", :"city of birth", :age]

# hash = {}

# info.each do |ask|
#   print "What is your #{ask}?\n>"
#   hash[ask] = gets.chomp.to_s.capitalize
# end

# hash.each do |key, value|
#   puts "Your #{key} is: #{value}"
# end