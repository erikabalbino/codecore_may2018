class Dog
    attr_accessor :colour, :type, :cap, :bones

    def initialize(colour, type, cap)
        @colour = colour
        @type = type
        @cap = 3
        @bones = []
    end

    def give(bone)
        return puts("Must be a bone") unless bone.is_a? Bone
  
        if @bones.length >= @cap
          puts "I have to many bones"
        else
          @bones.push(bone)
          puts " Bones ok"
        end

        self
    end


    def eat
        if @bones.length <= 0
            puts "No more bones"
        else
            
            puts "Yummy!! I ate #{@bones.pop.size} bone!"
        end
    end

end