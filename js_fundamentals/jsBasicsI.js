
//Basic 1
var x = [];
x.push("coding");
x.push("dojo");
x.push("rocks");

x.pop();

console.log(x);

//Basic 2

const y = [];
y.push(88);
// Works in 

//Basic 3.0
var z = [9, 10, 6, 5, -1, 20, 13, 2];
for(let i = 0; i < z.length; i++){
	console.log(z[i]);
}

//Basic 3.1
for(let i = 0; i < z.length - 1; i++){
	console.log(z[i]);

//Basic 4.0
names = ["Kadie", "Joe", "Fritz", "Pierre", "Alphonso"];
for(let i=0; i<names.length; i++){
	console.log(i.length);
}

//Basic 4.1
for(let i=0; i<names.length; i++){
	if(i.length === 5){
		console.log(i.length);
	}
}

//Basic 5
function yell(string){
	console.log(string.toUpperCase() + "!");
}