const student = {
    name:'juyel',
    age:22,
    marks:{
        // math:44,
        english:55,
        bangla:66,
    },
}

const marks = student.marks.bangla;
const english = student['marks']['english']
const subject = 'bangla';
const marks1 = student.marks['subject']
console.log(english)