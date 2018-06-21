# Next Module
# Given an array of number such as:

# array = [1,2,3,4,4,4,2,3,3,3]
# Write a piece of code that will generate a hash of frequencies 
# that looks like:

# {1 => 1, 2 => 2, 3 => 4, 4 => 3}

array = [1,2,3,4,4,4,2,3,3,3]
hash = Hash.new(0)

array.each do |v|
    hash[v] += 1
end

p hash


array.each_with_object(Hash.new(0)) { |key, hash| hash[key] += 1}