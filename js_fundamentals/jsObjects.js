//challenge I
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

for(let i=0;i<students.length;i++){
	console.log("Name: " + students[i].name + ", Cohort: " + students[i].cohort);
}

//challenge II
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };
console.log("EMPLOYEES");
for(let i = 0; i < users.employees.length;i++){
 let namelen = users.employees[i].last_name.length  + users.employees[i].first_name.length;
 console.log(i+1 + " - " + users.employees[i].last_name.toUpperCase() + ", " + users.employees[i].first_name.toUpperCase() + " - " + namelen);
}

console.log("MANAGERS");
for(let i = 0; i< users.managers.length; i++){
 let namelen = users.managers[i].last_name.length  + users.managers[i].first_name.length;
 console.log(i+1 + " - " + users.managers[i].last_name.toUpperCase() + ", " + users.managers[i].first_name.toUpperCase() + " - " + namelen);
}

//Why can't I do something like this? :
//for (let role in users){
  //console.log(role.toUpperCase());
  //for(let i = 0; i < users.group.length;i++){
  //let namelen = users.group[i].last_name.length  + users.group[i].first_name.length;
  //console.log(i+1 + " - " + users.group[i].last_name + ", " + users.group[i].first_name + " - " + "namelen");
//}
//}