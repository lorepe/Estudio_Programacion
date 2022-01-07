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
