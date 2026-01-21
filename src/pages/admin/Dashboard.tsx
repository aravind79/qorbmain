import { Helmet } from 'react-helmet-async';
import { Card } from '@/components/ui/card';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar
} from 'recharts';
import { Users, MousePointer2, TrendingUp, Globe } from 'lucide-react';

const data = [
    { name: 'Mon', visitors: 400, clicks: 240 },
    { name: 'Tue', visitors: 300, clicks: 139 },
    { name: 'Wed', visitors: 200, clicks: 980 },
    { name: 'Thu', visitors: 278, clicks: 390 },
    { name: 'Fri', visitors: 189, clicks: 480 },
    { name: 'Sat', visitors: 239, clicks: 380 },
    { name: 'Sun', visitors: 349, clicks: 430 },
];

const Dashboard = () => {
    return (
        <>
            <Helmet>
                <title>Dashboard | QORB Admin</title>
            </Helmet>

            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
                <p className="text-gray-500">Welcome back! Here's what's happening today.</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                    { label: 'Total Visitors', value: '12,453', icon: Users, color: 'bg-blue-500', trend: '+12%' },
                    { label: 'Total Clicks', value: '8,245', icon: MousePointer2, color: 'bg-green-500', trend: '+24%' },
                    { label: 'Conversion Rate', value: '3.2%', icon: TrendingUp, color: 'bg-indigo-500', trend: '+2.1%' },
                    { label: 'Active Regions', value: '14', icon: Globe, color: 'bg-purple-500', trend: 'Global' },
                ].map((stat, i) => (
                    <Card key={i} className="p-6 border-none shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-500 mb-1">{stat.label}</p>
                                <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                            </div>
                            <div className={`p-3 rounded-xl ${stat.color} bg-opacity-10`}>
                                <stat.icon className={`w-6 h-6 ${stat.color.replace('bg-', 'text-')}`} />
                            </div>
                        </div>
                        <div className="mt-4 flex items-center text-sm">
                            <span className="text-green-500 font-medium">{stat.trend}</span>
                            <span className="text-gray-400 ml-2">from last month</span>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Charts */}
            <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Chart */}
                <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold mb-6">Traffic Overview</h3>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.1} />
                                        <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6B7280' }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6B7280' }} />
                                <Tooltip
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                />
                                <Area type="monotone" dataKey="visitors" stroke="#3B82F6" strokeWidth={3} fillOpacity={1} fill="url(#colorVisitors)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Side Chart */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold mb-6">Click Sources</h3>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data}>
                                <Bar dataKey="clicks" fill="#10B981" radius={[4, 4, 0, 0]} />
                                <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '8px' }} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
