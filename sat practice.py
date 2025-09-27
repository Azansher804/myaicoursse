list=[21, 'azan', 20.1, 'Nexskill', 'student', ]
print(list)
print(list[1])
  #assignment no#2
  #for loop
for Alphabets in list:
    print(Alphabets)
  #append
list.append('123')
print(list)
  #assignment#3
list.insert(0,'Toyottttta')  
print(list)

  #assignmetn#4
  #remove item
list.remove('Nexskill')
print(list)
  #popped method
list.pop(0)
print(list)
  #replace item
list[1]=500
print(list)
  #2
list[2]='sher'
print(list)

   #List type
print(type(list))
print(list)
   #singleitem
print(type(3))
print(list)
  
#string
s=["azan", "sher", "ali"]
for i in s:
  print(i)

for i in s:
   if i == "sher":
      break
for i in s:
   if i == "ali":
      continue
