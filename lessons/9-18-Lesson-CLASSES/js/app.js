console.log('js is running');

// //classes - are basically a blueprint for an object
// //they alow us to make multiple instances of and object

// // for example, in a game you may have 100 enemies,
// // and they all are relativly the same
// // you may have to create an enemy class that is blueprint for all 
// // enemies

// // below is how to define a class
// // creating a blueprint
// // the name of the class always starts with capital letter
class Person {
	// constructor method, is always called constructor 
	// and it is called by 
	constructor(name, eyeColor){
		this.legs = 2;
		this.arms = 2;
		this.eyes = eyeColor;
		this.name = name;
	}

	// for multiple methodw, no coomas
	greet(otherPerson){
		console.log('Hi  ${otherPerson!}');
	}
	jump(){
		console.log('Weeeeee')
	}
}

// instatiating a class
// creating an object from out blueprint
// we are creating a new object from the blueprint of person
const bob = new Person('Jawad','brown');
const joan = new Person('Joan','blue');

// we can edit the properties of out instance on the fly
// the instance is just an object
bob.eyes = 'orange';
//or
bob['eyes'] = 'red'
console.log(bob);
console.log(joan);
////////////////////////////////////

//// we are creating a new seperate class
//// that inherits all the properties and methods
//// from the person class 
class SuperHero extends Person {
	constructor(name, eyeColor, powers){
	// this is calling the person constructor
	// and we pass to it what the person constructor nees
	super(name, eyeColor);// brought the name and eleColor from person class
	this.superPowers = ['flight', 'x-ray vision',powers];
	this.age = age;
	}
	
	fly(){
		console.log('op op and awayyy')
	}

	jump(){
		// super is how we refernce the parent class
	}
}

const superman = new SuperHero('Clark Kent', 'black');
console.log(superman);

////////////////////////////////////////////////////


// class Pet {
// 	constructor(animal, color, sound){
// 		this.legs = 4;
// 		this.eyes = 2;
// 		this.color = color;
// 		this.animal = animal;
// 		this.sound = sound;
// 	}

// 	petSound(sound){
// 		console.log(this.sound);
// 	}
// }

// const lab = new Pet('dog','yellow', 'woof woof');
// const retweiller = new Pet('dog', 'black');

// console.log(Pet);
// console.log(lab.animal);
//////////////////////////////////
















































