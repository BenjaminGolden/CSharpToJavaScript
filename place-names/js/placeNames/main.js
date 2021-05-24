// Put your code here

const names = [
    "Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"
]

for (const name of names){
    console.log(name);
}

console.log("");


    const theName = names.filter(name => name.toLowerCase().includes("the"))

console.log("'The' Place Names")
    
const NamesStartingWithThe = theName.forEach(name => console.log(name));