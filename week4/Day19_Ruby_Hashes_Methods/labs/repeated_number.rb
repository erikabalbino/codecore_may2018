# Ankita solutioin:

hash = Hash.new(0)
arr = [1,2,2,3,4,5]
arr.each do |ele|
    hash[ele] += 1
    if(hash[ele] > 1)
        puts ele
        break
    end
end