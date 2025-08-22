   #string Manipulaion
   #Question#1
s=input("Enter the string:")
first=s[0]
middle=s[len(s)//2]
last=s[-1]
   #create new string

new_string=first + middle + last
   #Output
print("New String", new_string)

   #Question2 #Program to count occurrences of all characters in a string

s= input("enter a string: ")

char_count={}
for char in s:
    if char in char_count:
        char_count[char]+=1
    else:
        char_count[char]=1
        print("character occurence: ")
        for key, value in char_count.items():
            print(f"{key}:{value}")

print("--QUESTION NO 2 END--")

   # Q3: reverse a string

s=input("enter a string: ")
reversed_s=s[::-1]
print("reversed string: ",reversed_s)  

print("--QUESTION NO 3 END--")

   # Q4:# Program to split a string on hyphens

s=input("Enter a string with hyphens: ")
words= s.split('-')
print("split parts: ", words)

print("--QUESTION NO 4 END--")

   # Q5: Remove special symbols / punctuation from a string

s = input("Enter a string: ")
cleaned= s.translate(str.maketrans("","",'string.punctuation'))
print("string without special symbols: ",cleaned)

print("--QUESTION NO 5 END--")

#List Manipulation

#Q1: #Reverse a list in Python
print("---------------LIST MANIPULATION--------------")


Azan_list=[23,10,18,27,6]
Azan_list_list.reverse()
print("reversed the list: ", Azan_list)

print("--QUESTION NO 1 END--")

#Q2 Turn every item of a list into its square

print("Turn every item of a list into its square")
numbers=[23,6,10,18,27]
squared_numbers=[num**2 for num in numbers]
print("original numbers: ", numbers)
print("squared numbers: ",squared_numbers)

print("--QUESTION NO 2 END--")

# Q3 Remove empty strings from the list of strings

print("Remove empty strings from the list of strings")
strings=["azan", "ali","sher"]
strings=[s for s in strings if s]
print("original list: [\"azan\", \"ali\",\"sher\"]")
print("cleaned list:", strings)

print("--QUESTION NO 3 END--")

 # Q4. Add new item to list after a specified item

print("Add new item to list after a specified item")

my_list=["azan","ali","sher"]
item_to_add="Toyota"
my_list.append(item_to_add)
print("updated list:", my_list)

print("--QUESTION NO 4 END--")

#Q5 Replace list’s item with new value if found

print("Replace list’s item with new value if found")

item_to_replace="ali"
if item_to_replace in my_list:
    my_list[my_list.index(item_to_replace)]="Farooq"
    print("updated list:", my_list)
else:
    print("Item not found.")

    print("--QUESTION NO 5 END--")


    #Dictionary Manipulation 
print("---------------DICTIONARY MANIPULATION--------------")
#1. Check if a value exists in a dictionary

print("Check if a value exists in a dictionary")
my_dict = {"name": "Azan", "age": 18, "city": "Faisalabad"}
value_to_check = "sher"
if value_to_check in my_dict.values():
    print("Value exists in the dictionary.")
else:
    print("Value does not exist in the dictionary.")

    print("--QUESTION NO 1 END--")

    #2. Get the key of a minimum value from the following dictionary

print("Get the key of a minimum value from the following dictionary")

my_dict = {'a': 5, 'b': 8, 'c': 2, 'd': 10}#Q 2 # Find the key with minimum value
min_key = min(my_dict, key=my_dict.get)
print("Dictionary:", my_dict)
print("Key with minimum value:", min_key)

print("--QUESTION NO 2 END--")

#Q3# Delete a list of keys from a dictionary

print("Delete a list of keys from a dictionary")

keys_to_delete = ['b', 'd']
for key in keys_to_delete:
    my_dict.pop(key, None)
print("Updated Dictionary:", my_dict)

print("--QUESTION NO 3 END--")

#Tuple Manipulation 
print("---------------TUPLE MANIPULATION--------------")
#1. Reverse the tuple

print(" Reverse the tuple")
my_tuple = (1, 20, 3, 4, 5)
reversed_tuple = my_tuple[::-1]
print("Original Tuple:", my_tuple)
print("Reversed Tuple:", reversed_tuple)

print("--QUESTION NO 1 END--")


#2. Access value 20 from the tuple

print("Access value 20 from the tuple")

print("accessing value 20 from the tuple:", my_tuple[1])

print("--QUESTION NO 2 END--")

#3. Swap two tuples in Python

print("Swap two tuples in Python")

tuple1 = (1, 2, 3)
tuple2 = (4, 5, 6)

print("Before swapping:")
print("tuple1:", tuple1)
print("tuple2:", tuple2)

# Swapping
tuple1, tuple2 = tuple2, tuple1

print("\nAfter swapping:")
print("tuple1:", tuple1)
print("tuple2:", tuple2)
print("--QUESTION NO 3 END--")
#LOOP MANIPULATION
print("---------------LOOP MANIPULATION--------------")
#1. Print first 10 natural numbers using while

print("Print first 10 natural numbers using while")
i = 1
while i <= 10:
    print(i)
    i += 1
print("--QUESTION NO 1 END--")

# Q2. Take Input from user , and print even number till that input number

print("Take Input from user , and print even number till that input number")
user_input = int(input("Enter a number: "))
print("Even numbers till", user_input, ":")
for num in range(2, user_input + 1, 2):
    print(num)

print("--QUESTION NO 2 END--")

# Q3. Take Input from user , and print odd number till that input number

print("Take Input from user , and print odd number till that input number")

user_input = int(input("Enter a number: "))
print("Odd numbers till", user_input, ":")
for num in range(1, user_input + 1, 2):
    print(num)

print("--QUESTION NO 3 END--")

# Q4. Take Input from user , and print prime number till that input number

print("Take Input from user , and print prime number till that input number")

user_input = int(input("Enter a number: "))
print("Prime numbers till", user_input, ":")
for num in range(2, user_input + 1):
    is_prime = True
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            is_prime = False
            break
    if is_prime:
        print(num)

print("--QUESTION NO 4 END--")

# Q5. Print multiplication table of a given number

print("Print multiplication table of a given number")
user_input = int(input("Enter a number: "))
print("Multiplication table of", user_input, ":")
for i in range(1, 11):
    print(user_input, "x", i, "=", user_input * i)

print("--QUESTION NO 5 END--")


print("--COMPLETE ASSIGNMENT NO 1--")




