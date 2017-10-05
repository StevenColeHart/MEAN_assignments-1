module.exports = function (){
    return {
        add: function(num1, num2) { 
             console.log("sum is: " + (num1 + num2));
        },
        multiply: function(num1, num2) {
             console.log("product is: " + (num1 * num2));
        },
        square: function(num) {
             console.log("square is: " + (num * num));
        },
        random: function(num1, num2) {
            if(num1 > num2){
                my_random = Math.floor(Math.random() * ((num1 + 1) - num2) + num2);
            }
            else{
                my_random = Math.floor(Math.random() * ((num2 + 1) - num1) + num1);
            }
             console.log("random: " + my_random);
        }
    }
}