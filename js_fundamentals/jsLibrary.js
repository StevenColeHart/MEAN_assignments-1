var _ = {
   map: function(arr, iteratee) {
     for(let i=0; i<arr.length; i++){
        arr[i] = iteratee(arr[i]);
     }
     return arr;
   },
   reduce: function(arr, iteratee, memo) {
     if(typeof(memo) == "undefined"){
       memo = arr[0];
       arr[0] = 0;
     }
     for(let i=0; i<arr.length; i++){
       //console.log(memo);
       memo = iteratee(arr[i], memo);
     }
     return memo;
   },
   find: function(list, predicate) {   
     for(let i=0; i<list.length;i++){
      if(predicate(list[i])){
        return list[i];
      }
      return undefined;
     }
   },
   filter: function(list, predicate) { 
     var resultList = [];
     for(let i=0;i<list.length;i++){
      if(predicate(list[i])){
        resultList.push(list[i]);
      }
     }
     return resultList;
   },
   reject: function(list, predicate) { 
     var resultList = [];
     for(let i=0;i<list.length;i++){
      if(!predicate(list[i])){
        resultList.push(list[i]);
      }
     }
     return resultList;
   }
 };

var test = [2, 3, 4];
// var myMap = _.map(test, function(num){
//   num = num * 2;
//   return num;
// });
// console.log(myMap);

// var myRedu = _.reduce([1,2,3], function(idx, base){ return idx + base; }, 100);
// console.log(myRedu);

// var myFind = _.find(test, function(num){
//   return num > 3;
// });
// console.log(myFind);

// var myFilter = _.filter(test, function(num){
//   return num % 2 == 0;
// });
// console.log(myFilter);


var myReject = _.reject(test, function(num){
  return num % 2 == 0;
});
console.log(myReject);