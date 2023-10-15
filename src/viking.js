// Soldier

class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  // Metodos

  attack() {
    return this.strength;
  }

  receiveDamage(dmg) {
    this.health -= dmg;
  }
}

// Viking

class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  // Metodos

  attack() {
    return this.strength;
  }
  receiveDamage(dmg) {
    this.health -= dmg;
    if (this.health > 0) {
      return `${this.name} has received ${dmg} points of damage`;
    } else if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon

class Saxon extends Soldier {
  // Metodos

  receiveDamage(dmg) {
    this.health -= dmg;
    if (this.health > 0) {
      return `A Saxon has received ${dmg} points of damage`;
    } else if (this.health <= 0) {
      return "A Saxon has died in combat";
    }
  }
}

// War

class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  // Metodos

  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    const resultado = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
    if (this.saxonArmy[randomSaxon].health <= 0) {
      this.saxonArmy.splice(randomSaxon, 1);
    }
    return resultado;
  }
  saxonAttack() {
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    const resultado = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);
    if (this.vikingArmy[randomViking].health <= 0) {
      this.vikingArmy.splice(randomViking, 1);
    }
    return resultado;
  }
  showStatus() {
    if (this.saxonArmy.length === 0 && this.vikingArmy.length >= 1) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0 && this.saxonArmy.length >= 1) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
