import type { GameItem } from '../types/game';
import { ITEMS } from '../data/items';

export const getRandomItem = (): GameItem => {
  const random = Math.random();
  let rarity = 'Common';

  if (random > 0.97) rarity = 'Legendary';
  else if (random > 0.9) rarity = 'Epic';
  else if (random > 0.75) rarity = 'Rare';
  else if (random > 0.5) rarity = 'Uncommon';

  const possibleItems = ITEMS.filter((item) => item.rarity === rarity);
  return possibleItems[Math.floor(Math.random() * possibleItems.length)];
};