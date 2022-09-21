//#1 Triangle


// alert("Write 3 numbers")
// let a = prompt("first one:")
// let b = prompt("second:")
// let c = prompt("third:")

// let result = Number(a) + Number(b)+ Number(c)


// if (result !=180){
//     alert("this triangle do not exist")
// } else {
//     alert("triangle exist")
// }

// # 2 Days in a month
// let result = Number(prompt("please write month number 1-12"))
// // let bigArray = [1,3,5,7,8,10,12]
// // let smallArray = [4,6,9,11]


// switch (result){
//     // case 1,3,5,7,8,10,12:
//     case 1:
//     case 3:
//     case 5:
//     case 7: 
//     case 8:
//     case 10:
//     case 12:
//         alert("31")
//         break
//     // case 4,6,9,11:
//     case 4:
//     case 6: 
//     case 9:
//     case 11:
//         alert("30")
//         break
//     case 2:
//         alert("28")
//         break
    
// }

//#3 skiped 

//# Interm. lvl #1 

// let adultsPrice = 12
// let childPrice = 0
// let pupilsPrice = adultsPrice * 0.35
// let studentsPrice = adultsPrice * 0.65
// let seniorPrice = adultsPrice * 0.5

// let age = Number(prompt("What is your age"))


// if (age < 6){
//     alert(`Your price is :${childPrice.toFixed(2)}`)
// } else if (age >=6 && age <= 15) {
//     alert(`Your price is: ${pupilsPrice.toFixed(2)}`)
// } else if (age >=16 && age <= 26) {
//      alert(`Your price is: ${studentsPrice.toFixed(2)}`)
// } else if (age >=27 && age <= 64) {
//      alert(`Your price is: ${adultsPrice.toFixed(2)}`)
// } else if (age >= 65) {
//     alert(`Your price is: ${seniorPrice.toFixed(2)}`)
// }

// #2 Temperatures

// alert('Please write 3 temp:')
// let a = Number(prompt('8 am :'))
// let b = Number(prompt('4 pm :'))
// let c = Number(prompt('Midnight :')) 
// let hValue = -100;

// if (a > hValue ){
//     hValue = a
//     if (b > hValue) {
//         hValue = b 
//         if (c > hValue){
//         alert(`${c} is higher`)
//         } else {
//             alert(`${b} is higher`)
//         }
//     } else if (c > hValue) {
//         alert(`${c} is higher`)
//     }
// } 


// #3 Swimming simulation



// function randomIntFromInterval(min, max) { // min and max included 
//   return Math.floor(Math.random() * (max - min + 1) + min)
// }


// let swimmerOne = randomIntFromInterval(45, 60)
// console.log(swimmerOne)
// let swimmerTwo = randomIntFromInterval(45, 60)
// console.log(swimmerTwo)
// let swimmerThree = randomIntFromInterval(45, 60)
// console.log(swimmerThree)

// if (swimmerOne > swimmerTwo && swimmerOne > swimmerThree){
//     alert(`swimmerOne win!`)
// } else if (swimmerTwo > swimmerOne && swimmerTwo > swimmerThree){
//     alert(`swimmerTwo win!`)
// } else {
//     alert(`swimmerThree win!`)
// }

//#4 A leap year + advanced lvl

// let year = Number(prompt("Plese write a year"))

// if (year % 4 === 0 || (year % 100 === 0 && year % 400 === 0) ){
//      document.write("<h1>leap</h1>");
// }  else { 
//     document.write("<h1>not leap</h1>");
// }

// User defined functions 
//#1 Math functions

// const square = (num) => num * num;
// console.log(square(4))

// const hypotenuse = (num1, num2) => Math.sqrt((num1*num1) + (num2*num2));
// console.log(hypotenuse(2,2))

// const absolute = (num) => Math.abs(num);
// console.log(absolute(10))

//#2 Generating emails
// const emailFromLogin = (email) => `${email}@covidconspiracy.il`
// console.log(emailFromLogin('max.khrom'))

// const loginFromName = (name, surname) => `${name.slice(0, 3).toLowerCase()}${surname.slice(0, 4).toLowerCase()}@covidconspiracy.il`
// console.log(loginFromName("MaXim", "KhRomov"))

//Intermediate level #1 Salary function

// const salary = (pay, hours, days) => (pay * hours * days) 
// console.log(salary(100,8,3))

// const taxed_salary = (realSalary, taxes) => realSalary * (1 - (taxes / 100))

// console.log(taxed_salary(salary(100,8,3), 20))

//#3 Maximum from 3 values

// const max3 = (a,b,c) => {
// if (a > b && a > c){
//    return a
// } else if (b > a && b > c){
//    return b
// } else {
//    return c
// }
// }
// console.log(max3(9,5,3))

//# Advanced Spread of 3 values
// const spread3 = (a,b,c) => {
//     if (a > b && a > c) {
//         if (b > c){
//             return a - c 
//         } else {
//             return a - b
//         }
//     } else if (b > a && b > c){
//         if (a > c){
//             return b - c 
//         }else {
//             return b - a
//         }
//     } else {
//         if (a > b){
//             return c - b
//         } else {
//             return c - a
//         }
//     }
// }

// console.log(spread3(6,20,50))

// Java and DOM, #1 Buying a product

// const buy = () => {
//     return alert("Product added to cart")
// }
 

const buy = () => {
    const element = document.querySelector('#btn').value 
    element = "text"
    return element

}

// const btn = document.getElementById('button');
// btn.addEventListener('click', function handleClick() {
//   btn.textContent = 'In Card';
// });

