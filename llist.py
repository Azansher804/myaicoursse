

print(" List Operations")

# 1. Find the largest number in a list
def get_largest(nums):
    big = nums[0]
    for val in nums:
        if val > big:
            big = val
    return big

sample_list = [12, 35, 9, 56, 24]
print("List:", sample_list)
print("1. Largest number in the list:", get_largest(sample_list))

# 2. Find the second largest number in a list
def get_second_largest(nums):
    big = sec_big = float('-inf')
    for val in nums:
        if val > big:
            sec_big = big
            big = val
        elif val > sec_big and val != big:
            sec_big = val
    return sec_big

print("2. Second largest number in the list:", get_second_largest(sample_list))

# 3. Print Largest Even and Largest Odd Number in a List
def largest_even_odd(nums):
    max_even = float('-inf')
    max_odd = float('-inf')
    for val in nums:
        if val % 2 == 0 and val > max_even:
            max_even = val
        elif val % 2 != 0 and val > max_odd:
            max_odd = val
    return max_even, max_odd

mix_list = [12, 35, 9, 56, 24, 87, 45]
le, lo = largest_even_odd(mix_list)
print("3. Largest Even Number:", le)
print("   Largest Odd Number:", lo)

# 4. Find Average of a List
def get_average(nums):
    return sum(nums) / len(nums)

# 5. Count Occurrences of Element in List
def count_item(nums, item):
    return nums.count(item)

# 6. Remove Duplicates from a List
def unique_items(nums):
    return list(set(nums))

# 7. Find the Number Occurring Odd Number of Times
def odd_occurrence(nums):
    res = 0
    for val in nums:
        res ^= val
    return res

# 8. Find the Union of Two Lists
def list_union(l1, l2):
    return list(set(l1) | set(l2))

# 9. Swap the First and Last Element in a List
def swap_edges(lst):
    if len(lst) < 2:
        return lst
    lst[0], lst[-1] = lst[-1], lst[0]
    return lst

# 10. Return the Length of the Longest Word
def get_longest_word(words):
    long_w = max(words, key=len)
    return long_w, len(long_w)

# 11. Generate Random Numbers and Append to List
import random
def random_list(size):
    nums = []
    for _ in range(size):
        nums.append(random.randint(1, 20))
    return nums


# ----------------- Example Testing -----------------
nums_ex = [12, 35, 9, 56, 24, 87, 45, 24, 35, 9]
word_list = ["apple", "banana", "cherry", "watermelon"]

print("4. Average of list:", get_average(nums_ex))
print("5. Occurrences of 24:", count_item(nums_ex, 24))
print("6. Remove duplicates:", unique_items(nums_ex))
print("7. Odd occurrence:", odd_occurrence([1, 2, 3, 2, 3, 1, 3]))
print("8. Union of two lists:", list_union([1, 2, 3], [3, 4, 5]))
print("9. Swap first and last:", swap_edges(nums_ex.copy()))
print("10. Longest word:", get_longest_word(word_list))
print("11. Random list:", random_list(10))


print("\n-------------------- Dictionary Operations --------------------")

# 1. Check if a Key Exists in a Dictionary
def key_exists(dic, k):
    return k in dic

# 2. Add a Key-Value Pair to the Dictionary
def add_pair(dic, k, v):
    dic[k] = v
    return dic

# 3. Find the Sum of All the Items in a Dictionary
def sum_dict(dic):
    return sum(dic.values())

# 4. Multiply All the Items in a Dictionary
def multiply_dict(dic):
    prod = 1
    for v in dic.values():
        prod *= v
    return prod

# 5. Create Dictionary that Contains Number (x, x*x)
def square_dict(n):
    return {i: i*i for i in range(1, n+1)}

# 6. Concatenate Two Dictionaries
def merge_dicts(d1, d2):
    new_d = d1.copy()
    new_d.update(d2)
    return new_d


# ----------------- Example Testing -----------------
marks = {"a": 10, "b": 20, "c": 30}

print("1. Key exists:", key_exists(marks, "b"))
print("2. After adding:", add_pair(marks.copy(), "d", 40))
print("3. Sum of items:", sum_dict(marks))
print("4. Multiply items:", multiply_dict(marks))
print("5. Square dictionary:", square_dict(5))
print("6. Concatenate:", merge_dicts({"x": 1, "y": 2}, {"z": 3, "w": 4}))


print("\n-------------------- Tuple Operations --------------------")

# Program 1: Create List of Tuples with Number and its Square
def num_square_tuples(start, end):
    return [(i, i**2) for i in range(start, end+1)]

print("List of Tuples (Number, Square):")
print(num_square_tuples(1, 5))


# Program 2: Remove All Tuples in a List Outside the Given Range
def filter_usn(prefix, low, high, roll_list):
    return [(prefix + str(r), r) for r in roll_list if low <= r <= high]

roll_nums = [101, 102, 103, 104, 105, 110, 120]
pfx = "USN"
low_val = 102
high_val = 110

filtered = filter_usn(pfx, low_val, high_val, roll_nums)

print("Filtered USN Tuples:")
print(filtered)
