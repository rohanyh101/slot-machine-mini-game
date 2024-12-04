import React from 'react';

interface SpinButtonProps {
  spinning: boolean;
  onSpin: () => void;
}

const SpinButton: React.FC<SpinButtonProps> = ({ spinning, onSpin }) => (
  <button
    onClick={onSpin}
    disabled={spinning}
    className={`w-full py-3 rounded-lg text-white font-semibold transition-all ${
      spinning
        ? 'bg-gray-400 cursor-not-allowed'
        : 'bg-blue-500 hover:bg-blue-600'
    }`}
  >
    {spinning ? 'Spinning...' : 'Spin'}
  </button>
);

export default SpinButton;