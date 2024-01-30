const Character = require("./Character");

class Mage extends Character{
    constructor(name, lifePts, attackPts, defensePts, magePts){
       super(name, lifePts, attackPts, defensePts)
        this.magePts= magePts
    }

    attack(targetCharacter){
        targetCharacter.lifePts -= (this.attackPts + this.magePts) - targetCharacter.defensePts 
    }

    heal(targetCharacter){
       targetCharacter.lifePts += this.magePts * 2
    }
}

