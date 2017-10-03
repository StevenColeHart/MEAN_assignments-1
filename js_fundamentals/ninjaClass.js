function Ninja(name, health=100){
	this.name = name;
	this.health = health;
	var speed = 3;
	var strength = 3;

	this.sayName = function(){
		console.log("My name is " + this.name);
	}

	this.showStats = function(){
		console.log("Name: " + this.name);
		console.log("Health: " + this.health);
		console.log("Speed: " + speed);
		console.log("Strength: " + strength);
	}
}

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();

var ninja2 = new Ninja("Bob", 300);
ninja2.showStats();


