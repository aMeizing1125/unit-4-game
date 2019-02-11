
class combatant {

    constructor(name) {
        this.name = name;
        this.action = null;
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

    setAction(currentAction){
        this.action = currentAction;
    }
    getAction(){
        return this.action;
    }

    enemyAction(hero){
        var random = (Math.floor(Math.random() * 4));
        switch(random) {
            case 0: //enemy physical attack
                console.log("Enemy is attacking physically");
                if (!(hero.getAction() == "Physical Defense")){
                    hero.setHealthPoints(hero.getHealthPoints()-this.getAttackPower());
                }
                console.log("Player HP is now ".concat(hero.getHealthPoints()));
                break;

            case 1: //enemy force attack
                console.log("Enemy is attacking forcefully");
                if (!(hero.getAction() == "Force Defense")){
                    hero.setHealthPoints(hero.getHealthPoints()-this.getForcePower());
                }
                console.log("Player HP is now ".concat(hero.getHealthPoints()));
                break;

            case 2: //enemy physical defense
                console.log("Enemy is blocking physically");
                this.setAction("Physical Defense");
                break;

            case 3: //enemy force defense
                console.log("Enemy is blocking forcefully");
                this.setAction("Force Defense");
                break;
          }

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
    console.log("player is physically attacking for ".concat(activeHero.getAttackPower()));
    //activeEnemy runs function setHealthPoints
        
        activeHero.setAction("Physical Attack");
        activeEnemy.enemyAction(activeHero);
        if (!(activeEnemy.getAction()=="Physical Defense")){
            activeEnemy.setHealthPoints(activeEnemy.getHealthPoints()-activeHero.getAttackPower());
        }
        console.log("enemy health is now ".concat(activeEnemy.getHealthPoints()));

    }
});

$('.force_attack_btn').on('click', function(){
    if((heroSelected == true) && (enemySelected == true)){
        console.log("player is forcefully attacking for ".concat(activeHero.getForcePower()));
        
        activeHero.setAction("Force Attack");
        activeEnemy.enemyAction(activeHero);
        let enemyAction = activeEnemy.getAction();
        if (!(activeEnemy.getAction()=="Force Defense")){
            activeEnemy.setHealthPoints(activeEnemy.getHealthPoints()-activeHero.getForcePower());
        }
        console.log("enemy health is now ".concat(activeEnemy.getHealthPoints()));
    }
});


//I am going to leave off the decrease defend does to attack for now. If i get time I will include it.
$('.phys_defend_btn').on('click', function(){
    if((heroSelected == true) && (enemySelected == true)){
        console.log(activeHero.getDefend());
    //this is needs to be switched to subtracting the 
        activeEnemy.setHealthPoints(activeEnemy.getHealthPoints()-activeHero.getAttack());
        console.log(activeEnemy.getHealthPoints());
    }
});
// $('.force_defend_btn').on('click', function(){
//     if((heroSelected == true) && (enemySelected == true)){
//         activeEnemy.setHealthPoints(activeEnemy.getHealthPoints()-activeHero.getAttack());
//     }
// });

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