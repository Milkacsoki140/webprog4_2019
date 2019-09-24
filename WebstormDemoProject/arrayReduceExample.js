var students = [
    {name : 'Alice', score : 23},
    {name : 'Bob', score : 57},
    {name : 'Charlie', score : 82}

];

console.log(
    students.reduce((total,current)=>{
        return total + current.score
    },0)
);
var sum = 0;
for (i = 0; i < student.length; i++)
{
sum += student[i].score;
}
console.log(sum);
console.log('#Student: ' + student.length);

var i = 0;
var result = 0;
const N = 10;
for ( i = 0; i < N; i++)
{
result += i;
}
console.log(result);

var avgScore = student.reduce((total, current ) => {return total + current.score},0);

const MINIMUM_SCORE = 50;
var passedStudentsCnt = student.reduce((total, current) => {return current.score >= MINIMUM_SCORE ? total + 1 : total}, 0);
console.log("# Students Passed: " + passedStudentsCnt);
