

// NOTE: I tried switching things out to === and it broke THINGS! A lot of things
// So don't even act like I didn't hear what Darin and Kevin were saying because I did. 
//  And it doesn't work with my code. 


class combatant {
    //sorry, not sorry I went extra. I really enjoyed making a video game. 
    //It is stupid hard, but I wouldn't say no to Valve if I got a job offer. 

    constructor(name) {
        this.name = name;
        this.action = null;
        if (this.name == "luke"){
            //tried === here NOPE! 
            this.attackPower=25;
            this.counter=20;
            this.defend=50;//defense perfect against forcePower/forceAttack
            this.forcePower=80;
            this.forceDefend=50; //defense perfect against forcePower/forceAttack
            this.heroBonus=5;
            this.healthPoints= 250;
            //trying to prevent hero/enemy bug ****
            // this.heroTag = false; **commented out to try a var 
        }
        if (this.name == "yoda"){
            this.attackPower=30;
            this.counter=20;
            this.defend=50;
            this.forcePower=100;
            this.forceDefend=100;//defense perfect against forcePower/forceAttack
            this.heroBonus=5;
            this.healthPoints= 300;
        }
        if (this.name == "bountyHunter"){
            this.attackPower=20;
            this.counter=20;
            this.defend=50;//defense perfect against forcePower/forceAttack
            this.forcePower=20;
            this.forceDefend=50;//defense perfect against forcePower/forceAttack
            this.heroBonus=5;
            this.healthPoints= 150;
        }
        if (this.name == "stormtrooper"){
            this.attackPower=15;
            this.counter=15;
            this.defend=50;//defense perfect against forcePower/forceAttack
            this.forcePower=15;
            this.forceDefend=50;//defense perfect against forcePower/forceAttack
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

    die(){
        //generates a REGEX expression to find divs by ID (since they all have the same name) and automatically hide any matches. 
        //pattern matching language jquery can use regex but must be one line
        //you have to .concat the regex expression that actually searches for the div based on the name attribute of this class
        //this actually refers to game.js the class combatant above.  
        $('div[id^="'.concat(this.getName().concat('"]'))).hide();
        killCount++;
        if (killCount ==3){
            alert("You win");
            alert("Restart when you are ready");
        }
    }

    gameOver(){
        $('.players').hide();
        alert ("GAME OVER");
        alert ("Restart the game when you are done morning your defeat! Muah ha ha ha!");
        $('.reset_btn_area').css('border', "solid 20px red");

    
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
                $("#physicalAttack").html("<h3> " + (hero.getAttackPower()) + "</h3>");
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
 var killCount = 0;
 var heroSelected = false;
 var enemySelected = false;
 var activeEnemy = null;
 var activeHero = null;
 //created this tag to prevent duplication of the hero being activeHero being enemySelected
 var attacker = false;


// // BUG FOUND You want logic that works like this:
// When the user clicks the square
// Check if that square has been selected as either defender or attacker
//  - if true, just exit click handler
// Set their attribute to whether they’re attackers or not (or set a class so you can visually differentiate on the screen)


// This is the oringal code to the select a hero/enemy stage of the game. resolving bug. 


$('.characterCard').on('click', function() {
    //return exits the function you're in **note**
    if ((attacker == true) && (enemySelected == false)) {
        //trying to prevent hero/enemy bug "&& heroTag==false" removed to test another method
        enemySelected = true && attacker ==true;
        console.log(attacker);
        console.log(this);
        alert("something something dark side");
        $(this).css('border', "solid 5px red");
        activeEnemy = new combatant($(this).attr('id'));
        console.log(activeEnemy);
        //moves enemy to board
        $(this).appendTo('#board_enemy');
        
        // you often have to code things backwards
    }else if(heroSelected == false){
        heroSelected = true;
        attacker = true;
        console.log(this);
        alert("Hero's fight until their death. Long live the chief.");
        $(this).css('border', "solid 5px green");
        activeHero = new combatant($(this).attr('id'));
        console.log(activeHero);
        console.log(activeHero.getAttackPower());
        //move hero when selected
        $(this).appendTo('#board_hero');
    }
});


//my attempts to solve a bug *** 
// $('.characterCard').on('click', function() {
//     //return exits the function you're in **note**
//     if ((attacker == false) && (enemySelected == false)){
//         //trying to prevent hero/enemy bug "&& heroTag==false" removed to test another method
//         enemySelected = true;
//         console.log(this.attacker);
//         console.log(this);
//         alert("something something dark side");
//         $(this).css('border', "solid 5px red");
//         activeEnemy = new combatant($(this).attr('id'));
//         console.log(activeEnemy);
//         //this is backwards b/c I said so
//     }else if((heroSelected == false) && (attacker == false)){
//         heroSelected = true;
//         console.log(this);
//         attacker = true;
//         console.log(this);
//         activeHero = new combatant($(this).html())
//         alert("Hero's fight until their death. Long live the chief.");
//         $(this).css('border', "solid 5px green");
//         activeHero = new combatant($(this).attr('id'));
//         console.log(activeHero);
//         console.log(activeHero.getAttackPower());
//     }
// });

$('.phys_attack_btn').on('click', function(){
    if ((heroSelected == true) && (enemySelected == true)){
    console.log("player is physically attacking for ".concat(activeHero.getAttackPower()));
    //send action to board area so player can be notified of the actinos instead of in console.log()
    //activeEnemy runs function setHealthPoints
        
        activeHero.setAction("Physical Attack");
        activeEnemy.enemyAction(activeHero);
        if (!(activeEnemy.getAction()=="Physical Defense")){
            activeEnemy.setHealthPoints(activeEnemy.getHealthPoints()-activeHero.getAttackPower());
        }
        console.log("enemy health is now ".concat(activeEnemy.getHealthPoints()));
        if (activeEnemy.getHealthPoints()<=0){
            enemySelected = false;
            activeEnemy.die();
        }
        if (activeHero.getHealthPoints() <= 0){
            activeHero.gameOver();
        }
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
        if (activeEnemy.getHealthPoints()<=0){
            enemySelected = false;
            activeEnemy.die();
        }
        if (activeHero.getHealthPoints() <= 0){
            activeHero.gameOver();
        }
    }
});


//I am going to leave off the decrease defend does to attack for now. If i get time I will include it.
$('.phys_defend_btn').on('click', function(){
    if((heroSelected == true) && (enemySelected == true)){
        console.log("hero is defending physically!");

    activeHero.setAction("Physical Defense"); 
    activeEnemy.enemyAction(activeHero);
    if (activeHero.getHealthPoints() <= 0){
        activeHero.gameOver();
    }
    }
});

$('.force_defend_btn').on('click', function(){
    if((heroSelected == true) && (enemySelected == true)){
        console.log("Hero is defending forcefully!");

    activeHero.setAction("Force Defense"); 
    activeEnemy.enemyAction(activeHero);
    if (activeHero.getHealthPoints() <= 0){
        activeHero.gameOver();
    }
    }
});