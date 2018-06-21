# Square Array - playing with .map and .each

# Think about your use case. Do you care about being able to access the original array? If so, you probably want to create a new array for the squared data.

array = [[2,3,4], [5,6,7], [6,7,8]]
new_array = array.map {|outer_element| outer_element.map { |inner_element| inner_element ** 2 } }
print new_array
puts ""

# If not, go ahead and transform the original array. (Q: Does it matter which .map you use ! on? What about putting it on both? Neither?)
array = [[2,3,4], [5,6,7], [6,7,8]]
array.map {|outer_element| outer_element.map! { |inner_element| inner_element ** 2 } }
print array
puts ""

# Can you use .each?
array_2 = [[2,3,4], [5,6,7], [6,7,8]]
array_2.each {|outer_element| outer_element.map! { |inner_element| inner_element ** 2 } }
print array_2
puts ""

# But this one doesn't work, why?
array_3 = [[2,3,4], [5,6,7], [6,7,8]]
array_3.each {|outer_element| outer_element.each { |inner_element| inner_element ** 2 } }
print array_3
puts ""

# Even without a ! the function will still return what you want, but the original array won't be transformed. See the print statement below vs. the 'print array_4' line.
array_4 = [[2,3,4], [5,6,7], [6,7,8]]
print array_4.map {|outer_element| outer_element.map { |inner_element| inner_element ** 2 } } #this would return the squared array, if you just want to print it just not transform array_4
puts ""
print array_4 # not squared

# This might be overkill, but it's fairly important to understand what .map does and how it is different from .each and other looping techniques.