const users = [
  { name: "Anna", age: 25 },
  { name: "Ben", age: 30 },
  { name: "Cara", age: 25 },
  { name: "Dan", age: 35 }
];
const ageCount = {};
const duplicates = [];

for (let i = 0; i < users.length; i++) {
  const age = users[i].age;

  if (!ageCount[age]) {
    ageCount[age] = 1;
  } else {
    ageCount[age]++;

    if (ageCount[age] === 2) {
      duplicates.push(age);
    }
  }
}

console.log(duplicates);
// Output: [25]