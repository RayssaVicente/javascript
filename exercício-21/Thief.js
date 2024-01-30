const Character = require("./Character");

class Thief extends Character{
    attack(targetCharacter){
        targetCharacter.lifePts -= (this.attackPts - targetCharacter.defenderPts) * 2
    }
}

module.exports = Thief