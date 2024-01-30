const Character = require("./Character");

class Warrior extends Character{
    constructor(name, lifePts, attackPts, defenderPts, shildPts){
        super(name, lifePts, attackPts,defenderPts)
        this.shildPts = shildPts
        this.stance = 'attacking'
    }

    attack(targetCharacter){
        if (this.stance === 'attacking'){
            super.attack(targetCharacter)
        }
    }

    switchStance(){
        if(this.stance === 'attacking'){
            this.stance = 'defending'
            this.defenderPts += this.shildPts
        } else{
            this.stance = 'attacking'
            this.defenderPts -= this.shildPts
        }
    }
}