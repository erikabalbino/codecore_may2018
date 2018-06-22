

class Cat < Animal

    def initialize(name, color, age)
        super(name, color)
        @age = age
    end

    def eat
        super
        puts "I have #{@age} years and muy name is #{name}"
        puts "Fish is Yummy! "
    end

end