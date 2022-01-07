const natalia = {
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

/* ----------------------------------------------------------------- */

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


/* ------------------------------------------------------- */

//Ejercicio Jacobo

class Mascotas {
  constructor({ tipo, nombre, edad }) {
    this.tipo = tipo;
    this.nombre = nombre;
    this.edad = edad;
    this.alive = true
  }

  
  comer(hora) {
    if (hora > 6 && hora < 8) {
      console.log("Desayunó");
    } else {
      console.log("Se murió tu mascota!! :(")
      this.alive = false;
    }
  }


  dormir(hora) {
    if(this.alive) {
        if(hora >= 20) {
            console.log("Se durmio");
        } else {
            console.log("Es irresponsable, se va de farra");
        }
    } else {
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

/* ------------------------------------------------------------ */


