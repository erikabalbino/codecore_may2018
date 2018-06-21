my_array = ['hello', 'hi', 'hola', 'bonjour']

my_array.each do |greeting|
  define_method(greeting) do |name|
    "#{greeting} #{name}"
  end
end

# resultado:
# [128] pry(main)> hello('tam')
# => "hello tam"
# [129] pry(main)> hi('tam')
# => "hi tam"
# [130] pry(main)> hold('tam')
# NoMethodError: undefined method `hold' for main:Object
# Did you mean?  hola
# from (pry):145:in `__pry__'
# [131] pry(main)> hola('tam')
# => "hola tam"
# [132] pry(main)> bonjour('tam')
# => "bonjour tam"
# [133] pry(main)> 

code = "
puts 'hi'
puts 'whats up'
puts 'bye'
"
# resultado:
# [23] pry(main)> code
# => "\nputs 'hi'\nputs 'whats up'\nputs 'bye'\n"
# [24] pry(main)> eval code
# hi
# whats up
# bye
# => nil
# [25] pry(main)> 

methods = [:upcase, :capitalize, :downcase, :length, :swapcase, :reverse]

input = gets.chomp

methods.each do |mth|
  puts input.send(mth)
end

# [148] pry(main)> load './meta.rb'
# Hello
# HELLO
# Hello
# hello
# 5
# hELLO
# olleH
# => true
# [149] pry(main)> 