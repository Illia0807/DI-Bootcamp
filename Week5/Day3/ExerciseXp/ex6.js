const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
        {name: "Liam", course: "Computer Science", isPassed: false}, 
        {name: "Jenner", course: "Information Technology", isPassed: true}, 
        {name: "Marco", course: "Robotics", isPassed: true}, 
        {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
        {name: "Jamie", course: "Big Data", isPassed: false}];

// const passedStud= students.filter(stusent=> stusent.isPassed=== true);
// console.log(passedStud);

const passedStud= students.filter(stusent=> stusent.isPassed=== true).forEach(stusent=> console.log(`Good Job ${stusent.name} you passed the course in Robotics`));


