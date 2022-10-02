// for (let i = 0; i <=15; i++){
//     console.log(i)
// }

// let num = [1, 0, ]


// let number = 20;

// if(number > 0){
//     number = "number is greater than 0"; 
// } else {
//     number = false;
// }
// console.log(number)

// let name = "John";
// let age = 17;
// let highSchool = true; 


// if (age >= 18 && highSchool == true){
//     "pass";
// }
// else {
//     "not qulified";
// }
  
// let hour = 15; 
// if ( hour >= 6 && hour <= 12){
//     console.log("on time")
// } else {
//     console.log("too latee")
// }

// let name = "john";
// let age = 17;
// let highSchool = false; 

// if (age >= 18 && highSchool === true) {
//     console.log("qualified")
// } else {
//     console.log("try again when you are over 18 with an highschool")
// }


// for (i = 0; i <= 15; i++) {
//     console.log(i)
// };

// let cars = ["banz", "bmw", "toyota", "jeep"]; 

// for (i = 0; i < cars.length; i++){
//     console.log(cars[i]);
// }


// let randomStuff = ["phone", "car", 74, 83, ["juice", "milk", 83, true, false], "kind", "happy"]; 

// let x = 0;

// while (x < randomStuff.length){
//     console.log(randomStuff[x])
//     x++
// }

// function testing(name){
//    console.log("hey "+  name +" what is the plan for today");
// }
// testing("mike")


// function randoms(a,b,c,d,e,f) {
//     return a+b+c+d+e+f
// }
// console.log(2+3+2+7+3+9);

// function numbers(num1,num2) {
//     return num1 + num2
// };

// console.log(5095+7438);




function numCheck(nums, num) {
    for (let i=0; i<nums.length; i++){
        if(nums[i] === num){
            return true;
        }
    } 
    return false;
}
console.log(numCheck([9,3,9,4,3,5], 4));