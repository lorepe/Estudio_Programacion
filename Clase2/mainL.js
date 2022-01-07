const natalia = {
    name:"Natalia",
    age:6,
    cursosAprobados:["Curso definitivo de HTML","Curso definitivo de CSS","Curso definitivo de JAVA"],
    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso)
    }
};
//Hacer que natalia apruebe otro curso
/* natalia.cursosAprobados.push("")
natalia.name("") */
 function Student(name,age,cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    /* this.aprobarCurso = function (nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso)
    } */
  }
 Student.prototype.aprobarCurso = function (nuevoCurso) {
     this.cursosAprobados.push(nuevoCurso);
 }
 
 const juanita = new Student(
     "",
     15,
     ["Curso de Produccion de video Juegos",
     "Curso de Produccion de Personas"]
 )