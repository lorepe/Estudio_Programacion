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
