// Put your code here

console.log("Let's roll some dice, baby!");
console.log("---------------------------");


    function getRandomInt(min, max) {
    min = Math.ceil(1);
    max = Math.floor(6);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  



for (i = 0; i < 10; i++){
    die1 = getRandomInt();
    die2 = getRandomInt();

    let message = `${die1} + ${die2} == ${die1 + die2}`;
    if (die1 == die2)
    {
        message += " DOUBLES";
    }
    console.log(message);
}
