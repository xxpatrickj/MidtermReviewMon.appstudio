/*
DO yourself or with partner 

Copy the code from the previous exercise (about employees) before 
the new employee was added, and add the functionality to answer the 
question: Who has worked at the company the longest? Output their 
name.
**change name of employees, employeeYears, newEmp, deleteEmp, foundIndex 
variables to employees2, employeeYears2, newEmp2, deleteEmp2, foundIndex2
*/
/*
let names = ["Mary Edwards", "Don Smith", "Tricia Evans"]
let yearsWorked = [22,10,5]

for (i = 0; i < names.length; i++)
  console.log(`${names[i]} has ${yearsWorked[i]} of service.`)

let newEmp = prompt("Enter a new employee name")
names.push(newEmp)
yearsWorked.push(0)

for (i = 0; i < names.length; i++)
  console.log(`${names[i]} has ${yearsWorked[i]} of service.`)

names.pop()
yearsWorked.pop()

for (i = 0; i < names.length; i++)
  console.log(`${names[i]} has ${yearsWorked[i]} of service.`)
  
//who has worked here the longest? Output name

//Algorithm
//get first item in array
let largestYears = yearsWorked[0] //22
let foundIndex = 0
//walk through array, compare by two, keep the larger of the two
  //and its index
  for (i = 1; i < yearsWorked.length; i++)
   if (largestYears < yearsWorked[i])
   largestYears = yearsWorked[i]
   foundIndex = i
}
 alert(`The person here the longest is ${names[foundIndex]}.`)
 
//when done, index holds the answer
//get the name at that index
*/