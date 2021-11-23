// const students = [
//     {id:21, name: "Rejaul"},
//     {id:22, name: "Karim"},
//     {id:23, name: "Babul"},
//     {id:24, name: "Jesmin"}
// ];

//for loop
// const studentsName = [];

// for(let i = 0; i<students.length; i++) {
//     const student = students[i].name;
//     studentsName.push(student)

// }
// console.log(studentsName)

//es6 map
// const students = [
//     {id:21, name: "Rejaul"},
//     {id:22, name: "Karim"},
//     {id:23, name: "Babul"},
//     {id:24, name: "Jesmin"}
// ];
// const bigger = students.filter(student => student.id >=21)
// console.log(bigger);
// const findOneId = students.find(student => student.id<24);
// console.log(findOneId);
// const studentName = students.map(student => student.name);
// console.log(studentName);
// const studentId = students.map(student => student.id);
// console.log(studentId);
// const numbers = [4, 9, 16, 25];
// const newArr = numbers.map(Math.sqrt)
// console.log(newArr);

const students = [
        {id:21, name: "Rejaul"},
        {id:22, name: "Karim"},
        {id:23, name: "Mahabub Alom"},
        {id:24, name: "Jesmin begum"}
    ];
const biggerName = students.filter(student=> student.name.length>6);
console.log(biggerName)
