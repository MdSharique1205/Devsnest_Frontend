// Question -1 
console.log('Question -1');

var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
console.log(Object.keys(student));

// Question -2
console.log('Question -2');

var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 

func = (obj) =>
{
    console.log(obj);
    delete obj.rollno;
    console.log(obj);
}
func(student);

// Question -3

console.log('Question -3');

var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 

size =(obj) =>
{
    var ans=0;
    for(let key in obj)
        ans++;
    return ans;
}

console.log(size(student));

// Question -4

console.log('Question -4');

var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },
 { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },
 { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; 

q4= (obj)=>
{
    for(let k in library)
        console.log(library[k]);
}
q4(library);

// Question -5

console.log('Question -5');

var cylinder = {
    radius : 0,
    height : 0,
    volume :0
};
cylinder.height=10;
cylinder.radius=5;
q5 =(obj)=>
{
    obj.volume=2*22*obj.radius*obj.height/7;
    console.log(obj.volume.toFixed(4));
}
q5(cylinder);

// Question -6

console.log('Question -6');

var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 },
 { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
  { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }]; 
library.sort(s_func=(a,b)=>{
    return b.libraryID-a.libraryID;
});

console.log(library);
