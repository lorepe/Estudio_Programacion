class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.emai = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}





class Course {
    constructor({
        name,
        classes =[],
        teacher
    }){
        this.name = name;
        this.classes = classes;
        this.teacher = teacher
    }
}
class Classes{
    constructor({
        name,
        description,
        time = "",
        files = []
    }
    ){
        this.name = name;
        this.description = description;
        this.time = time;
        this.files = files; 
    }
}
// Ejemplo
const CursoBasicoPOO = new Classes({
    name: "Abstraccion JavaScript",
    time: "9:15",
    files:["main.js","index.html"]
})

class Comments{
    constructor({
        student,
        time,
        
    })
}


class LearningPaths {
  constructor({ name, courses = [] }) {
    this.name = name;
    this.courses = courses;
  }
}

const EscuelaDesarrollo = new LearningPaths({
  name: "RutaDesarrollo",
  courses: [
    "Curso Html",
    "Curso Css",
    "Curso Base de datos",
    "Curso Pensaminto computacional",
  ],
});



