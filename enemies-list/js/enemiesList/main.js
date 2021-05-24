// Put your code here

console.log("My Enemies List!");
console.log("----------------");


    const enemies = [{
        firstName: "Joshua",
        lastName: "Flowers",
        offenses: {
          offense1:  "Being a jerk to me in elementary school",
          offense2:  "Not being nice to me in elementary school",
        },
        isReallyHated: true    
    },
    {
        firstName: "Darth",
        lastName: "Vader",
        offenses: {
          offense1:  "Cut off Luke's hand",
          offense2:  "murdered all those kids",
          offense3: "Unkind management practices"
        },
        isReallyHated: false   
    },
    {
        firstName: "Betty",
        lastName: "Rudelady",
        offenses: {
          offense1:  "Phone calls in the theater",
          offense2:  "Phone calls on the bus",
          offense3:  "Phone calls in line at the grocery store",
          offense4:  "poor conversationalist"
        },
        isReallyHated: true    
    },
    {
        firstName: "Leon",
        lastName: "Peck",
        offenses: {
          offense1:  "keeps giving me a hotplate",
        },
        isReallyHated: false    
    }]
    
    
    for (const enemy of enemies){
        if (enemy.isReallyHated)
        {
            console.log(`${enemy.firstName} ${enemy.lastName} ('Really, really dislike!')`);
        }
        else
        {
            console.log(`${enemy.firstName} ${enemy.lastName}`);
        }
    }
