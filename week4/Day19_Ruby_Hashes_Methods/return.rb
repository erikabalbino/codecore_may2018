def greater(a, b)
    if a > b
      a
    else
      b
    end
  end
  
  puts greater(5, 6)
  puts greater(5, 4)

def by_five?(n)
    n % 5 == 0
end

puts by_five?(15)
puts by_five?(7)