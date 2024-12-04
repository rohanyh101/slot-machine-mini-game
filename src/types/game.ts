export type Rarity = 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary';

export type ItemType = 'Weapon' | 'Consumable' | 'Material';

export interface GameItem {
  type: ItemType;
  rarity: Rarity;
  name: string;
  count: number;
}