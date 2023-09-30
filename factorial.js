function factorial(n) {
    if(n == 0 || n==1) {
        return 1;
    } else {
        return n * factorial(n-1)
    }
}

function factUsingTurneryOpt(n) {
    return n===0 ? 1 : n * factUsingTurneryOpt(n-1)
}

let result = factorial(4);
let result2 = factUsingTurneryOpt(4);
console.log('factorial is - ', result);
console.log('factorial using turnery is - ', result2);

