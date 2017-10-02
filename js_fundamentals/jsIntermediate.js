//Part I
function starString(num){
	return "*".repeat(num);
}

//let stars = starString(8);
//console.log(stars);

//Part II
function drawStars(arr){
	for(let i=0;i<arr.length;i++){
		console.log(starString(arr[i]));
	}
}

//let x = [4, 6, 1, 3, 5, 7, 25];
//drawStars(x);

//Part III
function drawStarsII(arr){
	for(let i=0;i<arr.length;i++){
		if(typeof arr[i] === 'string'){
            let letter = arr[i][0].toLowerCase(); 
			console.log(letter.repeat(arr[i].length));
		}
		else{
			console.log(starString(arr[i]));
		}
	}
}

let x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"];
drawStarsII(x);