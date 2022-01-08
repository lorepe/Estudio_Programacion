/* const juan1 = {
    name: "Jacobo",
    username: "Jacobo121",
    points: 100,
    socialMedia: {
        twitter: "Jacobo",
        facebook: undefined
    },
    approvedCourses: [
        "Curso definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS"
    ],
    learningPaths: [
        {
            name: "Escuela de Desarrollo Web",
            courses: [
                "Curso definitivo de HTML y CSS",
                "Curso Practico de HTML y CSS",
                "Responsive Design",
                "Curso de sistemas de diseño"
            ]
        },
        {
            name: "Escuela de VideoJuegos",
            courses: [
                "Curso Introduccion a la Produccion de Vsg",
                "Curso de Unreal Engine",
            ]
        }
    ]
} */


class LearningPaths {
    constructor({
        name,
        courses = []
    }) {
        this.name = name;
        this.courses = courses
    }
}

const desarrolloWeb = new LearningPaths({
    name: "Curso De Desarrollo Web",
    courses: [
        "Curso definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS",
        "Responsive Design",
        "Curso de sistemas de diseño"
    ]
})

const escuelaDeVideojuegos = new LearningPaths({
    name: "Escuela de VideoJuegos",
    courses: [
        "Curso Introduccion a la Produccion de Vsg",
        "Curso de Unreal Engine",
    ]
})

/* ------------------------------------------------------------------------- */

class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = []
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        }
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

const juan2 = new Student({
    name: "Juan",
    email: "juanito@juan.com",
    username: "juAnito",
    instagram: "juanito121",
    learningPaths: [
        desarrolloWeb,
        escuelaDeVideojuegos
    ]
})
