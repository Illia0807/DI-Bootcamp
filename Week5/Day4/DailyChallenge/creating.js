class Video{
        constructor(title,uploader,time){
                this.title=title;
                this.uploader=uploader;
                this.time=time;
        }
        watch(){
                return console.log(`${this.uploader} parametr watched all ${this.time} parametr of ${this.title} parametr`);
                
        }
}


// const matrix= new Video("Matrix", "tor","180")
// matrix.watch();

// const matrix2= new Video("Matrix2","tor2","200")
// matrix2.watch();

// const matrix3= new Video("Matrix3","tor3","220")

// const videos=[
//         matrix,matrix2,matrix3
// ]
const videoDates=[
        { title: "Matrix", uploader: "tor", time: "180" },
        { title: "Matrix2", uploader: "tor2", time: "200" },
        { title: "Inception", uploader: "alice", time: "150" },
        { title: "Interstellar", uploader: "bob", time: "170" },
        { title: "The Dark Knight", uploader: "john", time: "152" }
];


const videos=[]

videoDates.forEach(data => {
        const videoInstance = new Video(data.title, data.uploader, data.time);
        videos.push(videoInstance);
      });

videos.forEach(video=> video.watch());
