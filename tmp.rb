
str="20 21 22 23 24 3 2 5 6 19 17"

@count = 0

numbers = str.split


numbers = numbers.map{ |x| x.to_i }

prev = 0
result = []
numbers.each_index { |i|
  if numbers[i] <= numbers[i - 1] and (i > 0)
    result << numbers[prev...i]
    prev = i
  end
}
p numbers.length
result << numbers[prev...numbers.length]



p 5