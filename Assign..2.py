
     #Assignment#2

print(" Question 1: Celsius → Fahrenheit")
# Formula: (C × 9/5) + 32 = F

temp_c = float(input("Enter temperature in Celsius: "))  # taking Celsius input
temp_f = (temp_c * 9/5) + 32  # converting to Fahrenheit
print("Temperature in Fahrenheit:", temp_f)

print(" Question 2: Area of Rectangle")
# Formula: Area = Length × Width

rect_len = float(input("Enter length: "))
rect_wid = float(input("Enter width: "))
rect_area = rect_len * rect_wid
print("Area of Rectangle:", rect_area)

print(" Question 3: Compound Interest")
# Formula: CI = P * (1 + R/100)^T - P

principal_amt = float(input("Enter Principal: "))
interest_rate = float(input("Enter Rate of Interest: "))
time_yrs = float(input("Enter Time (years): "))

comp_int = principal_amt * (1 + interest_rate/100)**time_yrs - principal_amt
print("Compound Interest:", comp_int)

print(" Question 4: Perimeter of Rectangle")
# Formula: P = 2 × (Length + Width)

side_a = float(input("Enter length: "))
side_b = float(input("Enter width: "))
peri_rect = 2 * (side_a + side_b)
print("Perimeter of Rectangle:", peri_rect)

print(" Question 5: Average of 3 Numbers")
# Formula: Average = (n1 + n2 + n3) / 3

num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))
num3 = float(input("Enter third number: "))

mean_val = (num1 + num2 + num3) / 3
print("Average:", mean_val)

print(" Question 6: Square and Cube")
# Square = n^2 , Cube = n^3

val = float(input("Enter a number: "))
print("Square:", val**2)
print("Cube:", val**3)

print(" Question 7: Distribute Candies")
# Using integer division and remainder

total_candies = int(input("Enter number of candies: "))
total_students = int(input("Enter number of students: "))

share = total_candies // total_students  # candies each student gets
remainder = total_candies % total_students  # leftover candies

print("Each student gets:", share)
print("Candies left:", remainder)

print(" Question 8: Profit or Loss")
# Check if Selling Price > Cost Price

cp = float(input("Enter Cost Price: "))
sp = float(input("Enter Selling Price: "))

if sp > cp:
    print("Profit:", sp - cp)
elif sp < cp:
    print("Loss:", cp - sp)
else:
    print("No Profit No Loss")

print(" Question 9: Marks and Percentage")
# Input 5 subjects and calculate total, percentage and average

scores = []
for subj in range(5):
    scores.append(float(input(f"Enter marks of subject {subj+1}: ")))

marks_total = sum(scores)
marks_percent = (marks_total / 500) * 100
marks_avg = marks_total / 5

print("Total Marks:", marks_total)
print("Percentage:", marks_percent)
print("Average:", marks_avg)

print(" Question 10: Salary Calculator")
# HRA = 20% , DA = 15%

base_salary = float(input("Enter Basic Salary: "))
house_allow = 0.20 * base_salary
dearness_allow = 0.15 * base_salary
gross_salary = base_salary + house_allow + dearness_allow

print("HRA:", house_allow)
print("DA:", dearness_allow)
print("Total Salary:", gross_salary)

print(" Question 11: Age in Months and Days")
# Approx: 1 year = 12 months, 365 days

age_years = int(input("Enter your age in years: "))
age_months = age_years * 12
age_days = age_years * 365

print("Age in months:", age_months)
print("Age in days:", age_days)

print(" Question 12: Currency Converter (USD → PKR)")
# Using fixed conversion rate

dollars = float(input("Enter amount in USD: "))
conv_rate = 280
rupees = dollars * conv_rate
print("Amount in PKR:", rupees)

print(" Question 13: Sum of N Natural Numbers")
# Formula: n × (n+1) / 2

num_n = int(input("Enter n: "))
sum_n = num_n * (num_n+1) // 2
print("Sum of first", num_n, "natural numbers:", sum_n)

print(" Question 14: Percentage of Correct Answers")
# Formula: (Correct ÷ Total) × 100

ques_total = int(input("Enter total questions: "))
ques_correct = int(input("Enter correct answers: "))

score_percent = (ques_correct / ques_total) * 100
print("Percentage Score:", score_percent, "%")

print(" Question 15: Speed = Distance / Time")
# Formula: v = d ÷ t

dist_km = float(input("Enter distance (km): "))
time_hr = float(input("Enter time (hours): "))

vel = dist_km / time_hr
print("Speed:", vel, "km/hr")

print(" Question 16: BMI Calculator")
# Formula: BMI = weight / height²

mass = float(input("Enter weight (kg): "))
height_m = float(input("Enter height (m): "))

bmi_val = mass / (height_m**2)
print("BMI:", bmi_val)

print(" Question 17: Convert Minutes → Hours")
# Using floor division and modulus

mins = int(input("Enter minutes: "))
hrs = mins // 60
mins_left = mins % 60

print(mins, "minutes =", hrs, "hours", mins_left, "minutes")

print("End")
