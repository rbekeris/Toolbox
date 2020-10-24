a_dict = {'color': 'blue', 'fruit': 'apple', 'pet': 'dog'}


#For each key in dict, print the key and value
for key in a_dict:
    print(key)
    print(a_dict[key])

#Return items as tuples
for item in a_dict.items():
    print(item)

#access each item tuple value separately (using tuple unpacking)
for key, value in a_dict.items():
    print(key, '->', value)

