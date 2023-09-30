let a = 0;
let b=1;
let c=2;
let d = 0
setInterval(() => { d++; console.log('a - '+ a+ ' / d - '+ d)} , 1000);
setImmediate(() => { d++; console.log('c - '+ c+ ' / d - '+ d)} , 3000);
setTimeout(() => { d++; console.log('b - '+ b+ ' / d - '+ d)} , 3000);
setImmediate(() => { d++; console.log('c 2nd- '+ c+ ' / d - '+ d)} , 3000);