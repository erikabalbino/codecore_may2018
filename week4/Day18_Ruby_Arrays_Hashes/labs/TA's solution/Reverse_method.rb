# Reverse engineer String's `reverse` method

# Using array reverse, basically cheating, but yes the instructions were that you could "use any method from the Array class." So good job, you found out that array has a reverse method also. Now go solve it another way.
string = "brett"
print string.split("").reverse.join("")
puts ""

string = "brett"
string_array = string.split("")
reverse_array = string_array.map.with_index(0) do |element, index|
  string_array[string_array.length-index-1]
end

print reverse_array.join("")
puts ""

# Another way plus user input
puts "Give me a word"
string = gets.chomp

reverse_array =[]
string.split("").each {|x| reverse_array.unshift(x) }
string = reverse_array.join("")
print string
puts ""

# As a method on class String
class String
  def reverse_string
    reverse_array =[]
    self.split("").each {|x| reverse_array.unshift(x) }
    reverse_array.join("")
  end

  #parallel assignment
  def reverse_string_invert
    (self.length / 2).times {|i| self[i], self[-i-1] = self[-i-1], self[i] }
    return self
  end
end

string = "brett"
print string.reverse_string
puts ""
print string.reverse_string_invert
puts ""