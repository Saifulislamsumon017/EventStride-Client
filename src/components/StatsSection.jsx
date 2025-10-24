import React from 'react';
import { Trophy, Target, TrendingUp, Star } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      id: 1,
      icon: <Trophy className="h-16 w-16 mx-auto mb-4" />,
      title: '500+ Events',
      description: 'Marathon events hosted globally',
    },
    {
      id: 2,
      icon: <Target className="h-16 w-16 mx-auto mb-4" />,
      title: '100K+ Runners',
      description: 'Active community members',
    },
    {
      id: 3,
      icon: <TrendingUp className="h-16 w-16 mx-auto mb-4" />,
      title: '95% Success',
      description: 'Completion rate for registered runners',
    },
    {
      id: 4,
      icon: <Star className="h-16 w-16 mx-auto mb-4" />,
      title: 'Top Rated',
      description: 'Highly rated by participants',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 my-20">
      {stats.map(stat => (
        <div
          key={stat.id}
          className={`  p-8 shadow hover:shadow-md transition duration-300 text-center border rounded-xl`}
        >
          {stat.icon}
          <h3 className="text-2xl font-bold mb-2">{stat.title}</h3>
          <p className={stat.textColor}>{stat.description}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
