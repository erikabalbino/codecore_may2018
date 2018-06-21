# Book Names
library = []

print "Tell me some books: "
book = gets.chomp
library << book

while !library.include? "exit"
  puts "Give me some more books or type 'exit'"
  book = gets.chomp
  library << book
end

library.delete("exit")

# # If you just want the first word capitalized
# library.sort_by!{ |book| book.capitalize! || book  }
# print library

# If we want to capitalize every word
library.map! do |book|
  book_array = book.split.map {|x| (x.capitalize)}
  book_array.join(' ')
end
print library.sort!