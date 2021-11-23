// const nums = [1, 2, 3, 4, 5];
// const output = [];
// for(let i = 0; i<nums.length; i++){
//     const element = nums[i];
//     const result = element*element;
//     output.push(result);
// };
// console.log(output);

// const numbers = [4, 5, 6, 7, 8, 9, 10, 11];
// const result = numbers.map(function(element){
//     return element*element
// });
// console.log(result);

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8];
// const result = numbers2.map(x => x*x);
// console.log(result);
// const bigger = numbers2.filter(number => number<5);
// console.log(bigger)

for(let i = 0; i < numbers2.length; i++){
    const element = numbers2[i];
    if(element<6){
        console.log(element)
    }
}

