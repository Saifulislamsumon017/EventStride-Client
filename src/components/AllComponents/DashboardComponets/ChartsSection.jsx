import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';
import ChartCard from './ChartCard';

const ChartsSection = ({ marathons, registrations, organizers }) => {
  // Monthly Marathon Count
  const monthlyData = Object.values(
    marathons.reduce((acc, m) => {
      const month = new Date(m.marathonStartDate).toLocaleString('default', {
        month: 'short',
      });
      acc[month] = acc[month] || { month, count: 0 };
      acc[month].count += 1;
      return acc;
    }, {})
  );

  // Registrations per Marathon
  const regByMarathon = marathons.map(m => ({
    name: m.title?.slice(0, 12) + '...',
    registrations: registrations.filter(r => r.marathonId === m._id).length,
  }));

  // Top Organizers Pie Chart
  const topOrganizersData = organizers.map(o => ({
    name: o.companyName,
    marathons: o.totalMarathons || 0,
  }));

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
      {/* Monthly Marathon Count */}
      <ChartCard title="Monthly Marathon Count">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={monthlyData} barSize={28}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#E5E7EB"
            />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
            <Tooltip
              cursor={{ fill: 'rgba(59,130,246,0.1)' }}
              contentStyle={{
                borderRadius: '8px',
                border: 'none',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              }}
            />
            <Bar dataKey="count" fill="#3B82F6" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* Registrations per Marathon */}
      <ChartCard title="Registrations per Marathon">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={regByMarathon} barSize={28}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#E5E7EB"
            />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
            <Tooltip
              cursor={{ fill: 'rgba(16,185,129,0.1)' }}
              contentStyle={{
                borderRadius: '8px',
                border: 'none',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              }}
            />
            <Bar
              dataKey="registrations"
              fill="#22C55E"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* Top Organizers */}
      <ChartCard title="Top Organizers">
        <ResponsiveContainer width="100%" height={280}>
          <PieChart>
            <Pie
              data={topOrganizersData}
              dataKey="marathons"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
              stroke="#fff"
              strokeWidth={2}
            >
              {topOrganizersData.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                borderRadius: '8px',
                border: 'none',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
};

export default ChartsSection;
