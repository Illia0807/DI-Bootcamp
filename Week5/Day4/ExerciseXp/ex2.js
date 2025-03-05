function displayStudentInfo(objUser){
       const{first,last}=objUser;
       console.log(first);
       console.log(last);
       console.log(`Your full name is ${first} ${last}`);
       
       
       
    }
    
    displayStudentInfo({first: 'Elie', last:'Schoppik'});