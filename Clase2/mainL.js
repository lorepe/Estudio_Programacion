const natalia = {
<<<<<<< HEAD
  name: "Natalia",
  age: 6,
  cursosAprobados: [
    "Curso definitivo de HTML",
    "Curso definitivo de CSS",
    "Curso definitivo de JAVA",
  ],
  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  },
};
//Hacer que natalia apruebe otro curso
/* natalia.cursosAprobados.push("")
natalia.name("") */
function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;
  /* this.aprobarCurso = function (nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso)
    } */
}
//crear un prototipo fuera del objeto(prototipo de funciones)
Student.prototype.aprobarCurso = function (nuevoCurso) {
  this.cursosAprobados.push(nuevoCurso);
};

const juanita = new Student("", 15, [
  "Curso de Produccion de video Juegos",
  "Curso de Produccion de Personas",
]);

//Prototipo con la sintaxis de clases
class Student2 {
  constructor(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
  }
}

//Ejercicio Jacobo
class Mascotas {
  constructor({ tipo, nombre, edad }) {
    this.tipo = tipo;
    this.nombre = nombre;
    this.edad = edad;
  }

  
  comer(hora) {
    let alive = true;
    if (hora > 6 && hora < 8) {
      console.log("Desayunó");
    } else {
      console.log("Se murió tu mascota!! :(");
      alive = false;
    }
    return alive;
  }


  dormir(hora) {
    if (this.comer.alive && hora >= 20) {
      console.log("Se durmio");
    } else if (this.comer.alive) {
      console.log("Es irresponsable, se va de farra");
    } else if (!this.comer.alive) {
      console.log("Ya no va a despertar, es un angelito");
    }
  }
}
//Crear una instancia
const lorito = new Mascotas({
  nombre: "Pepe",
  tipo: "Pajaro",
  edad: 1,
});
=======
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
    constructor(name, age, cursoAprobados) {
        this.name = name;
        this.age = age;
        this.cursoAprobados = cursoAprobados;
    }

    aprobarCurso(nuevoCursito) {
        this.cursoAprobados.push(nuevoCursito)
    }
}

const miguel = new Student2(
    "Miguel",
    28,
    [
        "Curso de Js",
        "Curso de HTML"
    ]
)
>>>>>>> Jacobo
