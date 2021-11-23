// const numbers = [12, 13, 14, 15,16, 17, 18];
// let number= [];
// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     if(element>13){
//         break;
//     }
//     number.push(element)
//     // console.log(element)
   
// };
// console.log(number)



// const numbers = [12, 13, 14, 15,16, 17, 18];
// let number= [];
// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     if(element>13){
//         number.push(element)
//     }
    
//     // console.log(element)
   
// };
// console.log(number)

const numbers = [12, -121,  13, -90,  14, 15,16, -3,  17, 18, 0, -98, -0];
let positiveNumber = [];
for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    if(element<=0){
        continue;
    }
    positiveNumber.push(element);
};
console.log("positiveNumber",positiveNumber);