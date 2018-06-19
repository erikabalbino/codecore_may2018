
print 'Give me a number? '

number = gets.to_i

column = 1


while number > 0
    (number - 1).times { print " " }
    column.times { print "O" + " "}
    puts ""
    column += 1
    number -= 1
end
