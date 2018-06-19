
number = 1

# for letter in 97..122
#     number.times { print letter.chr }
#     puts " "
#     number += 1
# end    

for letter in "a".."z"
    number.times { print letter + " "}
    puts ""
    number += 1
end    