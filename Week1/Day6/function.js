/*Q2.) Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
Should work like that:
let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false */



let schedule ={}

function isEmpty(schedule){
    return schedule.length>0;
}

//alert( isEmpty(schedule) );
schedule["8:30"] = "get up";
alert( isEmpty(schedule) );