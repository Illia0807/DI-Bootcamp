// 1.false- this is 4 diferent objects
// const object1 = { number: 5 }; 
// const object2 = object1; 
// const object3 = object2; 
// const object4 = { number: 5};

// object1.number = 4;
// console.log(object2.number)
// console.log(object3.number)
// console.log(object4.number)
//4 4 5-Since copying only copies the reference and not the object itself, changing a field in one object will be reflected in all references to it.
//2.1
class Animal{
        constructor(name,type,color){
                this.name=name;
                this.type=type;
                this.color=color;
        }
}
 class Dog extends Animal{
        constructor(name,type,color,dogBreed){
                super(name,type,color)
                this.dogBreed=dogBreed
        }
 }

//2.2
class Mammal extends Animal{
        
        sound(sound){
                return `this ${this.name} is a ${this.type} and color is ${this.color} make sound ${sound}`


        }
}

const newObj= new Mammal("Rex","mammal","gold")
console.log(newObj.sound("GAV"));

const farmerCow= new Mammal("Lily","cow","white")
console.log(farmerCow.sound("moooo"));


