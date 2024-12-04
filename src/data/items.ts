import { GameItem } from '../types/game';

export const ITEMS: GameItem[] = [
  { type: 'Weapon', rarity: 'Common', name: 'P92 Pistol', count: 1 },
  { type: 'Weapon', rarity: 'Uncommon', name: 'UMP45', count: 1 },
  { type: 'Weapon', rarity: 'Rare', name: 'M416', count: 1 },
  { type: 'Weapon', rarity: 'Epic', name: 'AWM', count: 1 },
  { type: 'Weapon', rarity: 'Legendary', name: 'Groza', count: 1 },
  { type: 'Consumable', rarity: 'Common', name: 'Bandage', count: 5 },
  { type: 'Consumable', rarity: 'Uncommon', name: 'First Aid Kit', count: 3 },
  { type: 'Consumable', rarity: 'Rare', name: 'Med Kit', count: 1 },
  { type: 'Material', rarity: 'Common', name: 'Scrap Metal', count: 10 },
  { type: 'Material', rarity: 'Uncommon', name: 'Gunpowder', count: 5 },
  { type: 'Material', rarity: 'Rare', name: 'Advanced Parts', count: 3 },
];