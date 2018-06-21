puts 'hey'
begin
  1 / 0
rescue ZeroDivisionError => exception
  puts 'cannot divide by zero'
rescue => exception
  puts 'Something wrong happend!'
  puts exception.message
end
# puts 'bye'
# [9] pry(main)> begin
# [9] pry(main)*   1 / 0  
# [9] pry(main)* rescue ZeroDivisionError => exception  
# [9] pry(main)*   puts 'cannot divide by zero'  
# [9] pry(main)* rescue => exception  
# [9] pry(main)*   puts 'Something wrong happend!'  
# [9] pry(main)*   puts exception.message  
# [9] pry(main)* end  
# cannot divide by zero
# => nil
# [10] pry(main)> puts 'bye'
# bye
# => nil
# [11] pry(main)> 

puts 'hey'
begin
  abcd
rescue ZeroDivisionError => exception
  puts 'cannot divide by zero'
rescue => exception
  puts 'Something wrong happend!'
  puts exception.message
end

# [11] pry(main)> puts 'hey'
# hey
# => nil
# [12] pry(main)> begin
# [12] pry(main)*   abcd  
# [12] pry(main)* rescue ZeroDivisionError => exception  
# [12] pry(main)*   puts 'cannot divide by zero'  
# [12] pry(main)* rescue => exception  
# [12] pry(main)*   puts 'Something wrong happend!'  
# [12] pry(main)*   puts exception.message  
# [12] pry(main)* end  
# Something wrong happend!
# undefined local variable or method `abcd' for main:Object
# => nil
# [13] pry(main)> 