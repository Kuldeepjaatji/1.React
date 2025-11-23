// console.log(`kuldeep`)

// {
//    let fullname = `kuldeep`
// console.log(typeof fullname)
// }



// let x = BigInt( `1234`)
// console.log(x)


// // object

// let student = {
//     fullName : `kuldeep`,
//     age:20,
//     cgpa:7.7,
//     isPass:true,
// }
// let age = student[`age`] + 1
// console.log(student[`fullName`])
// console.log(student[`age`]+1)
// console.log(age)



// //if ===conditional statement

// let color = 25;
// if(color < 18){
//     console.log('true')
// }else{
//     console.log("false")
// }

// //ternary operation

// color < 11 ? console.log("false"):console.log("true");

// //ood \\ even

// let a = 3;
// if(a%2 === 0){
//     console.log(`even`)
// }else{
// console.log(`odd`)
// }

// // elseif

// let b = 10;
// if(b > 10){
//     console.log(`senior`);
// }else if(b < 10){
//     console.log(`junior`);
// }else if(b===10){
//     console.log(`false`);
// }


// //  prompt = user se input lene ke liye


//  let num = prompt(`enter a number`)

// if(num % 2 === 0){
//     console.log(`this devided 3`)
// }else if(num % 3 === 0){
//     console.log(`this devided 5`)
// }else if(num % 11 === 0){
//     console.log(`this devided 5`)
// }else if(num % 5 === 0){
//     console.log(`this devided 5`)
// }else if(num % 7 === 0){
//     console.log(`this devided 5`)
// }else{
//     console.log(`not`)
// }



//                         //   Loops


// //for loop



// let k = 0;
// for(let i=1; i<=5; i++){
//     k+=i;
// }
// console.log(`k = `, k)
// console.log(`ji`)
// let l= 0;
// for(let i=1; i<=5; i++){
//     let l = i + i;
//     console.log(l, `=`, i);
// }

// console.log(`l = `, l)


// //   while loop


// // let i = 1;
// // while(i<=10){
// //     console.log(`val = `, i)
// //     i++;
// // }


// // d0-while loop


// let i =1;
// do{
//     console.log(`i = `, i);
//     i++;
// }while(i <= 20);


// //   for - of loop

// let str = "kuldeep";
// let size = 0;
// for(let i of str){
//     console.log(i);
//     size++;
// }
// console.log(`length = `,size)

// // for-in loop


// let student1 = {
//     name:"kuldeep",
//     age:20,
//     class:"12th",
//     bloodGroup:"o-"
// };

// for(let val in student1){
//     console.log(`key=`,val,`value=`,student1[val])
// }



// // print all even numbers from 1 to 100

// for(let i=0; i<=100; i++){
//     if(i % 2 === 0){
//         console.log(`even =`, i)
//     }
// }



// let gameNum = 25;
// let userNum = prompt("Guess the game numver");

// while(userNum != gameNum ){
//     userNum = prompt('You entered wrong number . Guess again :')
// }
// console.log('Congratulations, you entered the right number')











// // Arror

// let num1 = [1,2,3,4,5,6,7,8,9];
// let sum = 0;
// num[3]=99;
// console.log(num1);
// console.log(num1.length);

// console.log(num1[0],num1[1],num1[2])
// console.log(num1[3])

// for(let val of num1){
//     sum+=val;
// }
// console.log(sum)
// for(i=0;i<num1.length;i++){
//     console.log(num1[i])
// }



// // push method
// console.log(num1.push(11))

// num1.push(11,90,80)
// // let add = num.push(11,90,80);
// console.log(num1);
// // console.log(add);
// // let remove = num.pop();
// num1.pop();
// console.log(num1);
// // console.log(remove);

// let num2 = [1,2,3,4,5,6,7,8,9];
// // aad element
// num2.splice(2,0,44)
// console.log(num2)

// //delete element
// num2.splice(3,1)

// console.log(num2)
// num2.splice(3)
// //num.splice(2,2,101,102);
// console.log(num2)



// //    funtion 


// function myFunction(){
//     console.log(`hii`);
//     console.log(`kuldeep`)
// }
// myFunction()

// // arro function


// const fullName = (a,b)=>{
//     s =a+b;
//     console.log(s);
//     return s;
// }
// fullName(2,3)


// function countVoble(str){
//     for(let char of str){
//         if(char === "a" ||char === "e" ||char === "ai" ||char === "o" || char === "au"){
//              console.log(char)
//         }//else{
//         //      console.log(char)
//         // }
       
//     }
// }
// countVoble("Kuldeep")



// let arr = [1,2,3,4,5,6];


// // forEach method


// arr.forEach((val)=>{
//     console.log(val)
// })


// // map method


// let newArr1 = arr.map(
//     (val)=>{
//         return val;
//     }
// )
// console.log(newArr1)


// // fillter method


// let newArr = arr.filter(
//     (val)=>{
//         return val % 2 === 0;
//     }
// )
// console.log(newArr)



// console.log(arr.reduce((para1, para2)=>{
//     return para1 + para2;
// }))








//                                   //  react js













// window.console.log('Kuldeep@2005')


document.body.style.backgroundColor='green';