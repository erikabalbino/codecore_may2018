bc_cities_population = { 
    vancouver: 2135201, 
    victoria: 316327, 
    abbotsford: 149855, 
    kelowna: 141767, 
    nanaimo: 88799, 
    white_rock: 82368, 
    kamloops: 73472, 
    chilliwack: 66382 }
puts "Large cities only:"
bc_cities_population.each do |city, population|
    # if value >= 100000 
    #     p "#{key} is a large city"
    # end

    # Using a symbol in string interpolation will automatically
    # call .to_s to convert into a string.
    puts "#{city.capitalize} is a large city" if population >= 100000
end