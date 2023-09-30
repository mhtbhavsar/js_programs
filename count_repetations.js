const arr = [1,3,1,2,4,2,1,5,6,2,3,1,8];

const count = {};

for (const element of arr) {
  if (count[element]) {
    count[element] += 1;
  } else {
    count[element] = 1;
  }
}

console.log(count); // 👉️ {a: 3, b: 1, c: 2}

console.log(count.a); // 👉️ 3
console.log(count.b); // 👉️ 1
