# Next Module
# Implement a `pluck` method, which takes an array of hashes and a 
# key name, and returns an array containing the values for each 
# named key in the hash.

# For example:

# pluck([{a:1}, {a:2}], :a)  ## returns [1,2]
# pluck([{b:2}, {a:4, b:4}, {a:1}, {c:4}], :a) 
# ## returns [nil, 4, 1, nil]
# pluck([{b:2}, {a:4, b:4}, {a:1}, {c:4}], :b) 
# ## returns [2,4,nil,nil]
# If an hash is missing the property, you should just leave 
# it as nil in the output array.

# def pluck(array, sym) 
#     new_array = []
#     array.each { |hash| 
#         hash.has_key?(sym) ? new_array << hash[sym] : new_array << nil
#     }
#     new_array 
# end

# print pluck([{b:2}, {a:4, b:4, c:5}, {a:1}, {c:4}], :a)

# def pluck(array, sym) 
#     new_array = []
#     array.each { |a| 
#          new_array << a[sym] 
#     }
#     new_array 
# end

def pluck(array, sym)
    array.map { |hash|  hash[sym] }
end

# print pluck([{a:1}, {a:2}], :a)
# print pluck([{b:2}, {a:4, b:4, c:5}, {a:1}, {c:4}], :a)
print pluck([{b:2}, {a:4, b:4}, {a:1}, {c:4}], :b) 