// const updatedstudents = students.map(function(student){
//     // console.log(student)
//     // student.role='students';
//     return student;
// })
// console.log(updatedstudents);

// const highscore = students.filter(function(student){
//     if(student.score<=80){
//         return student;
//     }
// });
// console.log(highscore);


const specified = students.find(function(student){
    return student.id===3;
});
const fruits=['banana','orange']
const random= fruits.find(function(fruit){
    return fruit===fruits[0];
 })
console.log(random)
console.log(specified)

// const averageScore =
//   students.reduce(function (scoresTotal, student) {
//     // console.log(student);
//     // console.log(scoresTotal);
//     return scoresTotal + student.score;
//   }, 0) / students.length;

// console.log(averageScore);

// const subject = 'art';

// const total = {};
// total[subject] = 'some value';
// console.log(total);
