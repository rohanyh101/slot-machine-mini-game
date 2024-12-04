import React, { useState } from 'react';
import { GameItem } from '../types/game';
import { getRandomItem } from '../utils/gameLogic';
import Header from './Header';
import RewardDisplay from './RewardDisplay';
import SpinButton from './SpinButton';

const SlotMachine: React.FC = () => {
  const [spinning, setSpinning] = useState(false);
  const [reward, setReward] = useState<GameItem | null>(null);

  const handleSpin = () => {
    setSpinning(true);
    setTimeout(() => {
      const item = getRandomItem();
      setReward(item);
      setSpinning(false);
    }, 1000);
  };

  return (
    <div className="w-96 p-6 bg-white rounded-xl shadow-xl">
      <Header />
      <RewardDisplay reward={reward} spinning={spinning} />
      <SpinButton spinning={spinning} onSpin={handleSpin} />
    </div>
  );
};

export default SlotMachine;