# Given a string such as "abcd". Generate an array that gives every 2-letter 
# combination that are adjacent so your code will generate:

# 1 | ["ab", "bc", "cd"]

str = "abcd"
array = []
num = 0
str.split("").each do |x|
    array << str[num] + str[num+1] unless num >= str.length - 1
    num += 1
end
p array

# for x in 0...str.length-1 do
#     array << str[x] + str[x+1]
# end
# p array