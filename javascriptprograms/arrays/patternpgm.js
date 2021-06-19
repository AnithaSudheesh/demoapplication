var arr = [4, 5, 6]//[11,10,9]

//15


var total = 0;
for (let num of arr) {
    total = total + num
}

console.log(total);

for (let num of arr) {
    let res = total - num
    op.push(res)
}
console.log(op);