print 'What is the year of your car?'

number = gets.to_i

if number > 2018
    puts "Future"
elsif number >= 2000 
    puts "New"
else    
    puts "Very old"
end


if number > 900
    puts 'The number if very large'
end

# inline conditional
puts 'The number is very large' if number > 900
puts 'The number is very large' unless number <= 900