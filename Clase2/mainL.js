const natalia = {
    name: "Natalia",
    age: 20,
    cursoAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS"
    ],

    aprobarCurso(nuevoCursito) {
        this.cursoAprobados.push(nuevoCursito)
    }
};
//Hacer que natalia apruebe otro curso

//natalia.cursoAprobados.push("Curso de Responsive Design")

natalia.aprobarCurso("Jacobo")

/* ------------------------------------------------------------ */

function Student(name, age, cursoAprobados) {
    this.name = name;
    this.age = age;
    this.cursoAprobados = cursoAprobados;
    /* this.aprobarCurso = function (nuevoCursito) {
        this.cursoAprobados.push(nuevoCursito)
    } */
}

//creamos metodo desde afuera del prototipo student
Student.prototype.aprobarCurso = function (nuevoCursito) {
    this.cursoAprobados.push(nuevoCursito)
}

//Palabra reservada new para crear un objeto
const juanita = new Student(
    "Juanita Alejandra",
    15,
    [
        "Curso de HTML",
        "Curso de CSS"
    ]
);


/* Prototipos con la sintaxis de clases */

class Student2 {
    constructor({
        name, 
        age, 
        cursoAprobados = [],
    }) {
        this.name = name;
        this.age = age;
        this.cursoAprobados = cursoAprobados;
    }

    aprobarCurso(nuevoCursito) {
        this.cursoAprobados.push(nuevoCursito)
    }
}

const miguel = new Student2(
    {
        name: "Miguel",
        age: 28,
        cursoAprobados: [
            "Curso de Js",
            "Curso de HTML"
        ]
    }
)