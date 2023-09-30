import { data } from "./data.js";

function generateResult(arr) {
    let arr2 = [];
    let jObj = {
        userId : 0,
        totalTasks:  0,
        completed:  0,
        pending:  0
    };
    let key = "userId"
    arr.forEach((x) => {
        if (arr2.some((val) => { return val[key] == x[key] })) {
            arr2.forEach((k) => {
                if (k[key] === x[key]) {
                    k.totalTasks++;
                    x.completed ? k.completed++ : k.pending++;
                }
            })

        } else {
            let a = Object.create(jObj);
            a[key] = x[key]
            a.totalTasks++
            x.completed ? a.completed++ : a.pending++;
            arr2.push(a);
        }
    })
    return arr2
}

console.log(generateResult(data))