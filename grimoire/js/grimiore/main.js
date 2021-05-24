// Put your code here

console.log("Do you believe in magic?");
console.log("------------------------");

const allSpells = [
    {
        name: 'Turn enemy into a newt',
        isEvil: true,
        energyRequired: 5.1
    },
    {
        name: 'Conjure some gold for a local charity',
        isEvil: false,
        energyRequired: 2.99
    },
    {
        name: 'Give a deaf person the ability to heal',
        isEvil: false,
        energyRequired: 12.2
    },
    {
        name: 'Make yourself emperor of the universe',
        isEvil: true,
        energyRequired: 100.0
    },
    {
        name: 'Convince your relatives your political views are correct',
        isEvil: false,
        energyRequired: 2921.5
    },   
]

const makeEvilSpellBook = () => {
    const evilBook = {
        title: 'Evil Book',
        spells: allSpells.filter(spell => spell.isEvil === true)
    }
    return evilBook 
}

const makeGoodSpellBook = () => {
    const goodBook = {
        title: "Good book",
        spells: allSpells.filter(spell => spell.isEvil === false)
    }
    return goodBook
}
console.log(makeGoodSpellBook())

const displaySpellBook = (book) => {
    console.log(book.title)
    for (const spell of book.spells){
        console.log(`${spell.name}`)
    }
}

goodBook = makeGoodSpellBook(allSpells);
evilBook = makeEvilSpellBook(allSpells);

displaySpellBook(goodBook);
displaySpellBook(evilBook);