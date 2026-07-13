const users = [
  { name: "Alice", age: 24 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 28 }
];
let maxAge = users[0].age;

for (let i = 1; i < users.length; i++) {
  if (users[i].age > maxAge) {
    maxAge = users[i].age;
  }
}

console.log(maxAge);
// Output: 30