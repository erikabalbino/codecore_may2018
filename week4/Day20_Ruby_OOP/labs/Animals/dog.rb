

class Dog < Animal
 
    # def initialize(name, color)
    #     super(name, color)
    # end

    def bark
        puts "Woof!"
    end

    def eat
        super
        puts "Boones are Yummy!!"
    end
end