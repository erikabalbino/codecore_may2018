class FizzBuzz
    attr_accessor :num1, :num2

    def initialize(num1 , num2)
        @num1 = num1
        @num2 = num2
    end
    
    def run
        my_array = (1..100).to_a

        my_array.map { |num|
            if (num % num1 == 0) && (num % num2 == 0)
               "FIZZBUZZ"
            elsif num % num1 == 0
                "FIZZ"
            elsif num % num2 == 0
                "BUZZ"
            else
                num
            end
        }    
    end
end
