let FirstName = 'Steven', Lastname = 'Das'

const Middle ="Leo"
console.log(FirstName +" " + Middle +" "+ Lastname)
Lastname ='Leo Das'
console.log(FirstName +" " + Lastname)

let course = {
    name :'ravi',
    age : 24,
    clg : "SJSU"  
} 
// Object in javascript is used to store Key Value pairs


let property = 'clg';
console.log(course[property]);

// we can either use dot or bracket nototaion method of accessing objects in js


console.log(course.age)

function merge(FirstName,Lastname){
    return FirstName+" "+ Lastname;
}
console.log(merge(FirstName,Middle) + " " + "//")
