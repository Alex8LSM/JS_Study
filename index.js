const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line

  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const potion of this.potions) {
      if (potion.name===newPotion.name) 
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
    }

    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    const potionNames = [];
    for (const potion of this.potions) 
      potionNames.push(potion.name);

    const potionIndex = potionNames.indexOf(potionName);

    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    const potionNames = [];
    for (const potion of this.potions)
      potionNames.push(potion.name);

    const potionIndex = potionNames.indexOf(oldName);

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    this.potions[potionIndex].name=newName;
  },
  // Change code above this line
};
