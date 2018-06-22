require "./animal.rb"
require "./bird.rb"
require "./helper.rb"

class Cat < Animal
  include HelperMod

  def catch?
    self.random_number?
  end

  def eat_bird
    birdy = Bird.new("Tweety")
    if catch?
      puts "I taw putty tat #{birdy.name} and #{self.name} ates him!"
    else
      puts "Drat!"
    end
  end

end

cat_names = ["Nermal", "Garfield", "Sylvester", "Felix", "Tigger", "Simba"]

for i in 1..100 
  birdy_hunter = Cat.new(cat_names.sample)
  birdy_hunter.eat_bird
end

