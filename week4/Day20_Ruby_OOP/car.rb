# class BritishColumbia
# end

class Car
    def self.max_speed
        puts "Max speed is 200"
    end

    attr_accessor :model, :type, :capacity

    def initialize(model, type, capacity)
        "Creating my car"
        @model = model
        @type = type
        @capacity = capacity
    end

    def drive
        ignite_engine
        puts "My car is being driving"
    end

    def stop
        puts "My car is stoped"
    end

    def park
        puts "My car is parked"
    end

    private
    def pump_gas
        puts "Pumping gas ... ⛽️"
    end

    def ignite_engine
        puts "Igniting engine ... 🔥"
    end
end

# my_volvo = Car.new
# my_volvo.drive
# my_volvo.stop
# my_volvo.park
# my_volvo.ignite_engine
# [7] pry(main)> load './car.rb'
# My car is being driving
# My car is stoped
# My is parked
# NoMethodError: private method `ignite_engine' called for #<Car:0x00007f85380392c8>
# from /Users/erikabalbino/Codecore_may2018/week4/Day20_Ruby_OOP/car.rb:31:in `<top (required)>'
# [8] pry(main)>

# Car.max_speed

# ae86 = Car.new("Toyota AE86", "Sport Compact", 4)
# ae86.capacity = 2
# ae86.type = "new type"


# p ae86
