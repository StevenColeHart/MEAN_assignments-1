
//Math 1
function zero_negativity(arr){
	for(i=0;i<arr.length;i++){
		if arr[i] < 0{
			return false;
		}
	}
	return true;
}

//Math 2
function is_even(num){
	if(num % 2 === 0){
		return true;
	}
	return false;
}

//Math 3
function how_many_even(arr){
	var count = 0;
	for(i=0;i < arr.length; i++){
		if(is_even(arr[i])){
			count++;
		}
	}
	return count;
}

//Math 4
function create_dummy_array(n){
	var newArr = [];
	for(i=0;i<n;i++){
		newArr.push(Math.floor(Math.random() * 10));
	}
	return newArr;
}


//Math 5
function random_choice(arr){
	var idx = Math.floor(Math.random() * arr.length);
	return arr[idx];
}
