def multiply(a, b)
    a * b
end

# method names follow same convetion as variables name (snake_case)
# you can have ! ? (or = within classes) at the end of the method names
# ! or ? don't do anything functionally, they are used for conventional purposes
# ! is used at the end of a method that mutates something or is potentially doing something
# that couldn't stop the program such as throwing exceptions
# ? is used if the method returns Boolean (true/false)

def add(a, b)
    a + b
end
puts multiply(4,5)
puts add 1, 2

def greeting(str)
    "Hello #{str.capitalize}!"
end
puts greeting "erika"

def power_it(a, b)
    a ** b
end
puts power_it 2, 3