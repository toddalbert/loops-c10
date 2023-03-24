// Given the following array, output each fruit

const fruits = ['apple', 'banana', 'orange', 'kiwi', 'grapes']

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
}

// Given the following array, output each student's first name

const students = [
  {
    gender: 'male',
    lastName: 'Vaks',
    firstName: 'Ilan',
  },
  {
    firstName: 'Kaniel',
    lastName: 'Tapper',
    gender: 'male',
  },
  {
    firstName: 'Meghann',
    lastName: 'Stamper',
    gender: 'female',
  },
]

for(let i = 0; i < students.length; i++) {
  console.log(students[i].firstName)
}
