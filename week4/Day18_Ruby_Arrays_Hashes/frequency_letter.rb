paragraph = "Validation branding channels growth hacking bandwidth MVP. 
Lean startup stock creative first mover advantage twitter iPhone. 
Return on investment strategy stealth ramen mass market founders 
business plan long tail learning curve gen-z investor agile development 
rockstar incubator."

frequencies = {}

paragraph.split("").each do |letter|
    l = letter.downcase

    if frequencies.has_key?(l)
        frequencies[l] += 1
    else
        frequencies[l] = 1
    end
end

p frequencies