const nums = [1, 3, 5, 3, 7, 1, 9];
const dup = [];
const count = {};

for (let i = 0; i < nums.length; i++) {
  const n = nums[i];

  if (!count[n]) {
    count[n] = 1;
  } else {
    count[n]++;

    // Add only once
    if (count[n] === 2) {
      dup.push(n);
    }
  }
}

console.log(dup);
// Output: [3, 1]