print "Enter a number: "
number = gets.chomp.to_i

primes = [2]
i = 3

while primes.length < number
  test_prime = false

  primes.each { |n|
    if i % n == 0
      test_prime = true
    end
  }

  if test_prime == false
    primes.push(i)
  end
  i += 1
end

puts primes