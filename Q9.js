const students = [
    {name: 'Ana', grade: 8},
    {name: 'Carlos', grade: 5},
    {name: 'João', grade: 7}
];

students.forEach(student => {
    if (student.grade >= 7) {
        console.log(student.name, "Aprovado");
    } else {
        console.log(student.name, "Reprovado");
    }
});