function videoPlay(id){
    const urlSecreta = "Https:platziiijfjf.com" +id
    console.log("Se esta reproduciendo desde la url" + urlSecreta)
}


function videoStop(id){
    const urlSecreta = "Https:platziiijfjf.com" +id
    console.log("SPausamos la url" + urlSecreta)
}

class PlatziClass {
    constructor({
        name,
        videoID,

    }){
        this.name = name;
        this.videoID = videoID;
    }
    reproducir(){
        videoPlay(this.videoID)
    }
    pausar(){
        videoStop(this.videoID)
    }
}

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
  