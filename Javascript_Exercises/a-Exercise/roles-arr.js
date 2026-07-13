const users = [
  { id: 1, username: "john", role: "admin" },
  { id: 2, username: "jane", role: "user" },
  { id: 3, username: "mark", role: "admin" },
  { id: 4, username: "lisa", role: "user" },
  { id: 5, username: "paul", role: "guest" }
];
const result = {};

for (let i = 0; i < users.length; i++) {
  const role = users[i].role;

  if (!result[role]) {
    result[role] = 1;
  } else {
    result[role]++;
  }
}

console.log(result);
// Output: { admin: 2, user: 2, guest: 1 }