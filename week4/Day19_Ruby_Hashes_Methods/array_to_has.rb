greetings = ["hello", "greetings", "hola", "hi"]

hash = { }

greetings.each do |v|
  hash[v.to_sym] = v.size
end

p hash

# {:hello=>5, :greetings=>9, :hola=>4, :hi=>2}