/** 
var players = {
    luke: {
        attackPower: 50,
        defend: 50,
        forcePower: 50,
        forceDefend: 50,
        heroBonus: 5,
        healthPoints: 150
    },
    yoda: {
        attackPower: 50,
        defend: 50,
        forcePower: 100,
        forceDefend: 100,
        heroBonus: 5,
        healthPoints: 200
    },
    bountyHunter: {
        attackPower: 25,
        defend: 50,
        forcePower: 30,
        forceDefend: 100,
        heroBonus: 5,
        healthpoints: 250,
    },
    stromtrooper: {
        attackpower: 20,
        defend: 50,
        forcePower: 20,
        forceDefend: 50,
        heroBonus: 5,
        healthPoints: 125,
    }
}*/
//this counts how many times the hero attacks (n*5)



class combatant {

    constructor(name) {
        this.name = name;
        if (this.name == "luke"){
            this.attackPower=50;
            this.defend=50;
            this.forcePower=50;
            this.forceDefend=50;
            this.heroBonus=5;
            this.healthPoints= 150;
        }
        if (this.name == "yoda"){
            this.attackPower=50;
            this.defend=50;
            this.forcePower=100;
            this.forceDefend=100;
            this.heroBonus=5;
            this.healthPoints= 200;
        }
        if (this.name == "bountyHunter"){
            this.attackPower=50;
            this.defend=50;
            this.forcePower=50;
            this.forceDefend=50;
            this.heroBonus=5;
            this.healthPoints= 150;
        }
        if (this.name == "stormtrooper"){
            this.attackPower=50;
            this.defend=50;
            this.forcePower=50;
            this.forceDefend=50;
            this.heroBonus=5;
            this.healthPoints=150;
        }
    }
  
    getName(){
        return this.name;
    }
    getAttackPower(){
        return this.attackPower;
    }
    getDefend(){
        return this.defend;
    }
    getForcePower(){
        return this.forcePower;
    }
    getForceDefend(){
        return this.forceDefend;
    }
    getHealthPoints(){
        return this.healthPoints;
    }

    setHealthPoints(hp){
        this.healthPoints = hp;
        return;
    }
  
}

 var heroSelected = false;
 var enemySelected = false;
 var activeEnemy = null;
 var activeHero = null;

$('.characterCard').on('click', function() {
    //return exits the function you're in **note**
    if ((heroSelected == true) && (enemySelected == false)){
        enemySelected = true;
        console.log(this);
        alert("something something dark side");
        $(this).css('border', "solid 5px red");
        activeEnemy = new combatant($(this).attr('id'));
        console.log(activeEnemy);
        //this is backwards b/c I said so
    }else if(heroSelected == false){
        heroSelected = true;
        console.log(this);
        alert("Hero's fight until their death. Long live the chief.");
        $(this).css('border', "solid 5px green");
        activeHero = new combatant($(this).attr('id'));
        console.log(activeHero);
        console.log(activeHero.getAttackPower());
    }
});




$('.phys_attack_btn').on('click', function(){
    if ((heroSelected == true) && (enemySelected == true)){
    console.log(activeHero.getAttackPower());
    //activeEnemy runs function setHealthPoints
        activeEnemy.setHealthPoints(activeEnemy.getHealthPoints()-activeHero.getAttackPower());
        console.log(activeEnemy.getHealthPoints());

    }
});

//maybe I should do something like a clear fix? 
    // like with the heads or tails coin activity in class
    // $(this).on('click', selectHero() 
        
//How do I add the restriction you can only select 1 hero and the benefit. 
//created selectHero(). 
// });
// $(this).slideDown('.heroPosition');
//if you have time figure out how to slide the hero icon down to heroPosition row2

//lock selection until 0 HP or defeat enemy
//




// var hero = players[i];
//define enemy first then uncomment
// var enemy = players[i];

//function selectEnemy
// function selectEnemy(){
    // enemy = character[i];
   

// }


// function battground(){
//     if (selectHero.)
// Decrement hero.healthPoints - enemy.attackPower
// Decrement hero.healthPoints by enemy.forcePower

// Decrement  enemy.attackPower by hero.healPoints 
// Decrement hero.healthPoints by enemy.focePower

// Increment hero.attackPower by hero.heroBonus => (hero.attackPower += hero.heroBonus)
    
// }

// function starWarsGame (){


// }