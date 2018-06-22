require "./dog.rb"
require "./bone.rb"

rex = Dog.new("white", "shitzu", 5)


b1 = Bone.new("small")
b2 = Bone.new("medium")
b3 = Bone.new("big")

rex.give(b1)
rex.give(b2)
rex.give(b3)
rex.give(b1)

rex.eat
rex.eat
rex.eat
rex.eat


