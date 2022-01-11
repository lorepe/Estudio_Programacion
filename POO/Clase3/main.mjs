/* 
    Pilares de POO
        -Abstraccion
        -Encapsulamiento
        -herencia
        -polimorfismo
*/

/* class Course {
  constructor({
    name,
    classes = [],
  }) {
    this._name = name;
    this.classes = classes;
  }

  get name() {
    return this._name;
  }

  set name(nuevoNombrecito) {
    if (nuevoNombrecito === "Curso Malito de Programación Básica") {
      console.error("Web... no");
    } else {
      this._name = nuevoNombrecito; 
    }
  }
}

const cursoProgBasica = new Course({
  name: "Curso Gratis de Programación Básica",
});

const cursoDefinitivoHTML = new Course({
  name: "Curso Definitivo de HTML y CSS",
});
const cursoPracticoHTML = new Course({
  name: "Curso Practico de HTML y CSS",
}); */


function videoPlay(id) {
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Se esta reproduciendo desde la url " + urlSecreta)
}

function videoPause(id) {
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Se esta pausando desde la url " + urlSecreta)
}



export class PlatziClass {
    constructor({
        name,
        videoID,
    }) {
        this.name = name;
        this.videoID = videoID;
    }

    reproducir() {
        videoPlay(this.videoID)
    }

    pausar() {
        videoPause(this.videoID)
    }
}
















class Replay {
    constructor({
        text,
        img = undefined,
        likes,
        time
    }) {
        this.text = text;
        this.img = img;
        this.likes = likes;
        this.time = time;
    }
}

const replyComent = new Replay({
    text: "No se si estoy bien o mal pero pienso que los cursos de cierta forma deben de estar ligados al estudiante no Ya que tiene la posibilidas de hacer aportes y preguntas incluso el alumno tendría estos métodos 🤔",
    likes: 2,
    time: "21/09/2021"
})
const replyComent2 = new Replay({
    text: "No se si estoy bien o mal pero pienso que los cursos de cierta forma deben de estar ligados al estudiante no Ya que tiene la posibilidas de hacer aportes y preguntas incluso el alumno tendría estos métodos 🤔",
    likes: 2,
    time: "21/09/2021"
})
const replyComent3 = new Replay({
    text: "No se si estoy bien o mal pero pienso que los cursos de cierta forma deben de estar ligados al estudiante no Ya que tiene la posibilidas de hacer aportes y preguntas incluso el alumno tendría estos métodos 🤔",
    likes: 2,
    time: "21/09/2021"
})

/* ---------------------------------------------------- */

class Coments {
    constructor({
        text,
        img = undefined,
        likes,
        time,
        reply = [],
    }) {
        this.text = text;
        this.img = img;
        this.likes = likes;
        this.time = time;
        this.reply = reply;
    }
}

const coment2 = new Coments({
    text: "Posible diagrama de clases básico, de Platzi",
    likes: 1,
    time: "20/09/2021",
    reply: [
        replyComent,
        replyComent2,
        replyComent3
    ]
})

const coment = new Coments({
    text: "Posible diagrama de clases básico, de Platzi",
    likes: 1,
    time: "20/09/2021",
    reply: [
        coment2
    ]
})

/* ---------------------------------------------------- */

class Clases {
    constructor({
        name,
        time,
        description,
        files = []
    }) {
        this.name = name;
        this.time = time;
        this.description = description;
        this.files = files;
    }
}

const POO = new Clases({
    name: "Ventajas de POO",
    time: "20:00",
    description: "fkjdshakfjhdaksljhflkjdsahlkfjhasdlkjfhldjhakl",
    files: [
        "index.html",
        "main.js",
        "readme.md"
    ]
})

/* --------------------------------------------------- */

class Course {
    constructor({
        name,
        teacher,
        amount,
        clases = [],
    }) {
        this.name = name;
        this.teacher = teacher;
        this.amount = amount;
        this.clases = clases;
    }
}

const cursoDeProgramacionBasica = new Course({
    name: "Curso De Programacion Basica"
})

/* ------------------ */
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
