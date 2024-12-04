import { Sparkles } from 'lucide-react';

const Header: React.FC = () => (
  <div className="flex items-center justify-center mb-6">
    <Sparkles className="w-6 h-6 mr-2 text-yellow-500" />
    <h2 className="text-2xl font-bold text-gray-800">Lucky Spin</h2>
  </div>
);

export default Header;