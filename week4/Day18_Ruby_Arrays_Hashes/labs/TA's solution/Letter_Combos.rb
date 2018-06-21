# Letter combos

puts "Give me a word"
string = gets.chomp.gsub(/\s+/, "")

array = []
for x in 1...string.length
  array.push(string[x-1] + string[x])
end

print array

array = []
# Another way, but note that like this you have to account for the last element
for x in 1..string.length
  array.push(string[x-1] + string[x]) unless x >= string.length
end

print array

array = []
# Different notation
for x in 0...(string.length - 1)
  array.push(string[x, 2])
end

print array
# If you want practice with .map
string_array = string.split("")
new_array = []
string_array.map.with_index(0) do |element, index|
  new_array.push(string_array[index] + string_array[index + 1]) unless index >= (string.length - 1)
end

print new_array