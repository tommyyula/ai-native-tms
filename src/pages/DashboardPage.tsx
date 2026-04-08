import React from 'react'
import { 
  TrendingUp, 
  TrendingDown, 
  Truck, 
  Users, 
  DollarSign, 
  Clock,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react'
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart as RechartsPie,
  Cell
} from 'recharts'

export function DashboardPage() {
  const kpis = [
    {
      title: 'Active Loads',
      value: '1,247',
      change: '+12.5%',
      trend: 'up',
      icon: Truck,
      color: 'blue'
    },
    {
      title: 'Available Carriers', 
      value: '2,156',
      change: '+8.3%',
      trend: 'up',
      icon: Users,
      color: 'green'
    },
    {
      title: 'Monthly Revenue',
      value: '$8.9M',
      change: '+15.2%',
      trend: 'up',
      icon: DollarSign,
      color: 'emerald'
    },
    {
      title: 'Avg Processing Time',
      value: '3.2 min',
      change: '-22.1%',
      trend: 'down',
      icon: Clock,
      color: 'orange'
    }
  ]

  const loadVolumeData = [
    { name: 'Jan', loads: 890, revenue: 7200000 },
    { name: 'Feb', loads: 1120, revenue: 8100000 },
    { name: 'Mar', loads: 1350, revenue: 8900000 },
    { name: 'Apr', loads: 1247, revenue: 8500000 },
    { name: 'May', loads: 1480, revenue: 9200000 },
    { name: 'Jun', loads: 1650, revenue: 9800000 },
  ]

  const performanceData = [
    { name: 'Mon', onTime: 94, efficiency: 88 },
    { name: 'Tue', onTime: 96, efficiency: 92 },
    { name: 'Wed', onTime: 93, efficiency: 87 },
    { name: 'Thu', onTime: 97, efficiency: 94 },
    { name: 'Fri', onTime: 95, efficiency: 91 },
    { name: 'Sat', onTime: 91, efficiency: 85 },
    { name: 'Sun', onTime: 89, efficiency: 83 },
  ]

  const carrierDistribution = [
    { name: 'Premium', value: 35, color: '#10b981' },
    { name: 'Standard', value: 45, color: '#3b82f6' },
    { name: 'Economy', value: 20, color: '#f59e0b' },
  ]

  const agentActivity = [
    { agent: 'Contract AI', tasks: 87, status: 'active' },
    { agent: 'Capacity AI', tasks: 64, status: 'active' },
    { agent: 'Carrier AI', tasks: 92, status: 'active' },
    { agent: 'Dispatch AI', tasks: 156, status: 'active' },
    { agent: 'Analytics AI', tasks: 43, status: 'active' },
    { agent: 'Finance AI', tasks: 78, status: 'active' },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Operations Dashboard</h1>
        <p className="text-lg text-gray-600">
          Real-time insights and performance metrics powered by AI agents.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {kpis.map((kpi, index) => {
          const Icon = kpi.icon
          const isPositive = kpi.trend === 'up' ? kpi.change.includes('+') : kpi.change.includes('-')
          
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div className={`w-12 h-12 rounded-lg bg-${kpi.color}-100 flex items-center justify-center`}>
                  <Icon className={`h-6 w-6 text-${kpi.color}-600`} />
                </div>
                <div className={`flex items-center space-x-1 text-sm font-medium ${
                  isPositive ? 'text-green-600' : 'text-red-600'
                }`}>
                  {kpi.trend === 'up' ? (
                    <TrendingUp className="h-4 w-4" />
                  ) : (
                    <TrendingDown className="h-4 w-4" />
                  )}
                  <span>{kpi.change}</span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold text-gray-900">{kpi.value}</p>
                <p className="text-sm text-gray-600">{kpi.title}</p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Load Volume Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Load Volume & Revenue Trends</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={loadVolumeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip 
                  formatter={(value, name) => [
                    name === 'loads' ? `${value} loads` : `$${(value/1000000).toFixed(1)}M`,
                    name === 'loads' ? 'Loads' : 'Revenue'
                  ]}
                />
                <Bar dataKey="loads" fill="#3b82f6" name="loads" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Carrier Distribution */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Carrier Distribution</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPie data={carrierDistribution}>
                <RechartsPie
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                >
                  {carrierDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </RechartsPie>
                <Tooltip formatter={(value) => `${value}%`} />
              </RechartsPie>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            {carrierDistribution.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-sm text-gray-600">{item.name}</span>
                </div>
                <span className="text-sm font-medium text-gray-900">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Performance Metrics */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Performance</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => `${value}%`} />
                <Line 
                  type="monotone" 
                  dataKey="onTime" 
                  stroke="#10b981" 
                  strokeWidth={2}
                  name="On-time Performance"
                />
                <Line 
                  type="monotone" 
                  dataKey="efficiency" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  name="Operational Efficiency"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Agent Activity */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Agent Activity</h3>
          <div className="space-y-4">
            {agentActivity.map((agent, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-900">{agent.agent}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">{agent.tasks} tasks</span>
                  <Activity className="h-4 w-4 text-green-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}