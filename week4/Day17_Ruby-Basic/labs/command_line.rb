
print 'How many sides does a hexagon have?
1- five
2- six
3- seven
Enter the correct option: '
puts ""
resp1 = gets.to_i

print 'How many sides does a triangle have?
1- five
2- six
3- tree
Enter the correct option:'
puts ""
resp2 = gets.to_i

print 'How many sides does a square have?
1- four
2- six
3- tree
Enter the correct option:'
puts ""
resp3 = gets.to_i

if resp1 == 2 && resp2 == 3 && resp3 == 1
    puts "your score is 100%"
elsif resp1 == 2 && resp2 == 3 && resp3 != 1
    puts "your score is 66%"
elsif resp1 == 2 && resp2 != 3 && resp3 == 1
    puts "your score is 66%"
elsif resp1 != 2 && resp2 == 3 && resp3 == 1
    puts "your score is 66%"
elsif resp1 == 2 && resp2 != 3 && resp3 != 1
    puts "your score is 33%" 
elsif resp1 != 2 && resp2 != 3 && resp3 == 1
    puts "your score is 33%" 
elsif resp1 != 2 && resp2 == 3 && resp3 != 1
    puts "your score is 33%" 
elsif resp1 != 2 && resp2 != 3 && resp3 != 1
    puts "your score is 0" 
end
    
# TA's solutions:
print 'How many sides do an hexagon have?: 1.four 2.five 3.six '
answer1 = gets.chomp.to_f
results = 0.0
if answer1 == 3
    results += 1
end
print 'What is the population of Vancouver?: 1.250,000 2.650,000 3.850,000'
answer2 = gets.chomp.to_f
if answer2 == 2
    results += 1
end
print 'What is the height of the Everest?: 1.3,524 meters 2.8,848 meters 3. 11,247 meters'
answer3 = gets.chomp.to_f
if answer3 == 2
    results += 1
end
puts "You scored #{results/3*100}%, you got #{results} out of 3 questions"

