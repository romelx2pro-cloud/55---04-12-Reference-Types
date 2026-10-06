// // ===============
// // VALUE TYPES
// // ===============
// //Value Types - the variable stores the actual value:

// let x = 100;
// let y = x;

// //If we change x
// x = 99;
// //y is unchanged
// y; //100

// // ===============
// // REFERENCE TYPES
// // ===============

// // Array variables do not hold the actual array
// //Instead, they store a REFERENCE to the array

// let nums = [ 2, 4, 6, 8 ];
// let myNums = nums; //myNums references the same array

// // If we change nums
// nums.push('BOO!');

// //My nums is also changed:
// myNums; //[2, 4, 6, 8, "BOO!"]
let f = "pitch";
let c = f;
console.log(f);
console.log(c);
f = "orange";
console.log(f);
console.log(c);
let a = [1, 2, 3];
let oa = a;
console.log(a);
console.log(oa);
a.push(4);
console.log(a);
console.log(oa);
