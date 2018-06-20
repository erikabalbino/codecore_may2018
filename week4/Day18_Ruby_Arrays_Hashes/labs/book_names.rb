# Write some code that keeps asking the user for book names until 
# the user enters "exit". 
# After typing "exit" the program should display all the entered book names 
# sorted and have the book names capitalized.

names = []

loop do
  print "Give me a book name!\n> "
  input = gets.chomp
  break if input.downcase == "exit"
  names << input.capitalize
end


puts "Here the names:"
# names. titlize
p names.sort