const products = [
  { id: 1, category: "fruit", name: "apple" },
  { id: 2, category: "vegetable", name: "carrot" },
  { id: 3, category: "fruit", name: "banana" },
  { id: 4, category: "vegetable", name: "broccoli" }
];
const grouped = {};

for (let i = 0; i < products.length; i++) {
  const category = products[i].category;

  if (!grouped[category]) {
    grouped[category] = [];
  }
  grouped[category].push(products[i]);
}

console.log(grouped);
// Output:
// {
//   fruit: [   { id: 1, category: "fruit", name: "apple" },
//             { id: 3, category: "fruit", name: "banana" } ],
//   vegetable: [ { id: 2, category: "vegetable", name: "carrot" },
//                { id: 4, category: "vegetable", name: "broccoli" } ]
// }    