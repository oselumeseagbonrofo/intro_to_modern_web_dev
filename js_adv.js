const arr = [1,2,3,4,5] // add all values in an array
const answer = arr.reduce((a,b) => a + b);
console.log(answer);

ans2 = arr.filter(a => a >= 3);
console.log(ans2);

const temp2 = arr.map(a => a*2);
console.log(temp2)


// .every() used to check if fxn meets condition. 
// Returns true if all meet it else returns false
let ans3 = arr.every(x => x < 22)
console.log(ans3)

console.clear()
arr2 = [1,2,3]
// fxn to compare  2 arrays
val = arr2.every((ele)=>{
    return arr.includes(ele);
})
console.log(val);