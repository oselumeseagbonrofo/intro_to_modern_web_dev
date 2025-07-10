// Array
let arr = ["1",3.4, "object", [2,4,5]]
console.log(arr);
console.log(arr[2]);
console.log(arr[3][0])

let nest = "nest"
// Object
let obj = {
    1: "print",
    "name": "Oselumese",
    "age": undefined,
    nest: {
        2: "val1",
        3: "val3",
    },
    "arr": [
        3, 5, 6
    ]
}
console.log(obj)
console.log(obj[1])
console.log(obj["age"])
console.log(obj.nest[3])
console.log(obj.arr[0])

// operator
let a = 22
a *= 4
console.log(a)


a += "22"
console.log(a)

a = 9 + 11 + "25"
console.log(a)

// function (fxn declaration)
function welcome(){
    alert("Hello. Thanks for visiting my website");
    console.log("Hello. Thanks for visiting my website");
}


// pass values into function (fxn expression)
let add = function(){
    console.log('yes')
    return 1
}()

add = function(a, b){
    sum = a + b
    return sum
}

console.log(add(8, 100));

output = 7 +' + ' + 8 + ' = ' + add(7, 8);
console.log(output)


// Loops
let i = 8
for (let i = 10; i < 15; i++){
    console.log(i);
}

while (i < 12){
    console.log(i);
    i++;
}

let j = 11
do{
    console.log(i);
    j++
}
while(j < 15)


arr.forEach(function print(value, index, array){
    console.log(value, index, array)
})