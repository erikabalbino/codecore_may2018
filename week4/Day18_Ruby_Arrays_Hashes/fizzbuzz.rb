array = []
for num in 1..100
    if num % 15 == 0
        array << "FIZZBUZZ"
    elsif num % 3 == 0
        array << "FIZZ"
    elsif num % 5 == 0
        array << "BUZZ"
    elsif
        array << num    
    end
end

# p array

result = []

for num in 1..100
  str = ""
  str << "FIZZ" if num % 3 == 0
  str << "BUZZ" if num % 5 == 0
  str << num.to_s if str.length <= 0

  result << str
end

p result