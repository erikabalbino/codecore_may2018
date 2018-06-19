Array = []

print "Give me 1st letter: "
letter1 = gets.chomp.to_s
Array << letter1

print "Give me 2nd letter: "
letter2 = gets.chomp.to_s
Array << letter2

print "Give me 3rd letter: "
letter3 = gets.chomp.to_s
Array << letter3

# for i in Array
#     for x in Array
#         for y in Array
#             puts i + x + y
#         end
#     end
# end

new_array = Array.repeated_permutation(3).to_a
for i in 0..new_array.length-1 do
    p new_array[i].join(" ")
  end
# print test.map { |i| "'" + i.to_s + "'" }.join(",")
# print test
