# Find the most recurring letter in a given string from the user.

# Elis solution:

puts "Gimme a string"
str = gets.chomp

letter_hash = Hash.new(0)

str.each_char do |ch| 
  letter = ch.downcase
  letter != ' ' ? letter_hash[letter] += 1 : false
end

p letter_hash.max_by { |key, value| value } 