let str = "ABC";
let n = str.length;
permute(str, 0, n-1);

function permute(str, s, e) {
  if(s === e) {
    console.log('str - ',str);
  } else {
    for(let i = s; i<=e; i++) {
      swap(str, s, i);
      permute(str, s+1, e)
      swap(str, s, i);
    }
  }
}

function swap(str, i, j) {
  let charArray = str.split("");
  let temp = charArray[i];
  charArray[i] = charArray[j];
  charArray[j] = temp;
  console.log(charArray);
  return charArray.join("");
}

