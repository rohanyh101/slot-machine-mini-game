import React from 'react';
import { GameItem } from '../types/game';

interface RewardDisplayProps {
  reward: GameItem | null;
  spinning: boolean;
}

const RewardDisplay: React.FC<RewardDisplayProps> = ({ reward, spinning }) => {
  const rarityColors = {
    Common: 'bg-gray-200',
    Uncommon: 'bg-green-200',
    Rare: 'bg-blue-200',
    Epic: 'bg-purple-200',
    Legendary: 'bg-yellow-200',
  };

  return (
    <div className={`h-48 mb-6 rounded-lg flex items-center justify-center ${
      reward ? rarityColors[reward.rarity] : 'bg-gray-100'
    } transition-all duration-300`}>
      {spinning ? (
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-400 border-t-blue-500" />
      ) : reward ? (
        <div className="text-center">
          <p className="text-lg font-semibold">{reward.name}</p>
          <p className="text-sm text-gray-600">
            {reward.type} - {reward.rarity}
          </p>
          <p className="text-sm text-gray-600">x{reward.count}</p>
        </div>
      ) : (
        <p className="text-gray-500">Spin to get rewards!</p>
      )}
    </div>
  );
};

export default RewardDisplay;