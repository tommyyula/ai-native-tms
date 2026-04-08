import React, { useState } from 'react'
import { 
  FileText, 
  BarChart3, 
  Users, 
  Zap, 
  TrendingUp, 
  DollarSign,
  Brain,
  Activity,
  CheckCircle,
  Clock,
  AlertTriangle
} from 'lucide-react'

export function AgentsPage() {
  const [selectedAgent, setSelectedAgent] = useState('contract')

  const agents = [
    {
      id: 'contract',
      name: 'Contract Intelligence Agent',
      icon: FileText,
      status: 'active',
      description: 'Handles RFP generation, bid evaluation, and contract optimization',
      capabilities: [
        'Dynamic RFP Generation from Natural Language',
        'Multi-criteria Bid Analysis and Scoring',
        'Market-aware Rate Optimization',
        'Contract Risk Assessment',
        'Automated Award Recommendations'
      ],
      metrics: {
        'RFPs Processed': 1247,
        'Average Processing Time': '3.2 min',
        'Bid Accuracy': '94.3%',
        'Cost Savings': '$2.1M'
      }
    },
    {
      id: 'capacity',
      name: 'Capacity Intelligence Agent',
      icon: BarChart3,
      status: 'active',
      description: 'Forecasts demand, optimizes capacity, and plans strategic allocation',
      capabilities: [
        'Predictive Demand Forecasting',
        'Load Bundling and Optimization',
        'Scenario Planning and What-if Analysis',
        'Network Capacity Optimization',
        'Route Efficiency Analysis'
      ],
      metrics: {
        'Loads Optimized': 3891,
        'Capacity Utilization': '87.2%',
        'Route Efficiency': '+23%',
        'Planning Accuracy': '91.8%'
      }
    },
    {
      id: 'carrier',
      name: 'Carrier Intelligence Agent',
      icon: Users,
      status: 'active', 
      description: 'Manages carrier relationships, performance scoring, and qualification',
      capabilities: [
        'Intelligent Carrier Matching',
        'Performance Trend Analysis',
        'Automated Risk Assessment',
        'Compliance Monitoring',
        'Onboarding Automation'
      ],
      metrics: {
        'Carriers Managed': 2156,
        'Match Accuracy': '96.1%',
        'Onboarding Time': '-65%',
        'Performance Score': '88.4/100'
      }
    },
    {
      id: 'dispatch',
      name: 'Dispatch Operations Agent',
      icon: Zap,
      status: 'active',
      description: 'Handles real-time operations, load assignment, and exception management',
      capabilities: [
        'Dynamic Load Assignment',
        'Real-time Exception Handling',
        'Automated Communication',
        'Performance Optimization',
        'Proactive Problem Detection'
      ],
      metrics: {
        'Loads Dispatched': 5643,
        'On-time Performance': '94.7%',
        'Exception Resolution': '2.1 hours',
        'Automation Rate': '78%'
      }
    },
    {
      id: 'analytics',
      name: 'Analytics Intelligence Agent',
      icon: TrendingUp,
      status: 'active',
      description: 'Provides business intelligence, predictive insights, and performance monitoring',
      capabilities: [
        'Conversational Analytics',
        'Predictive Modeling',
        'Anomaly Detection',
        'Market Intelligence',
        'Custom Report Generation'
      ],
      metrics: {
        'Reports Generated': 892,
        'Insights Delivered': 4567,
        'Prediction Accuracy': '89.3%',
        'Time Saved': '340 hours'
      }
    },
    {
      id: 'finance',
      name: 'Financial Management Agent',
      icon: DollarSign,
      status: 'active',
      description: 'Manages billing, payments, cost analysis, and financial reporting',
      capabilities: [
        'Automated Invoice Generation',
        'Payment Processing',
        'Cost Allocation Analysis',
        'Cash Flow Forecasting',
        'Audit Trail Management'
      ],
      metrics: {
        'Invoices Processed': 7234,
        'Payment Accuracy': '99.2%',
        'Processing Time': '-75%',
        'Cost Reduction': '$850K'
      }
    }
  ]

  const selectedAgentData = agents.find(agent => agent.id === selectedAgent) || agents[0]
  const Icon = selectedAgentData.icon

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">AI Agents Dashboard</h1>
        <p className="text-lg text-gray-600">
          Monitor and interact with your intelligent agents working 24/7 to optimize your operations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Agent List */}
        <div className="lg:col-span-1">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Active Agents</h2>
          <div className="space-y-2">
            {agents.map((agent) => {
              const AgentIcon = agent.icon
              return (
                <button
                  key={agent.id}
                  onClick={() => setSelectedAgent(agent.id)}
                  className={`w-full text-left p-4 rounded-lg border transition-colors ${
                    selectedAgent === agent.id
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-lg ${
                      selectedAgent === agent.id ? 'bg-primary-600' : 'bg-gray-100'
                    } flex items-center justify-center`}>
                      <AgentIcon className={`h-4 w-4 ${
                        selectedAgent === agent.id ? 'text-white' : 'text-gray-600'
                      }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className={`text-sm font-medium truncate ${
                          selectedAgent === agent.id ? 'text-primary-900' : 'text-gray-900'
                        }`}>
                          {agent.name.split(' ')[0]}
                        </p>
                        <div className="flex items-center">
                          <Activity className="h-3 w-3 text-green-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Agent Details */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            {/* Agent Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-primary-600 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900">{selectedAgentData.name}</h2>
                  <p className="text-gray-600 mt-1">{selectedAgentData.description}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium text-green-600 capitalize">
                    {selectedAgentData.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Metrics</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {Object.entries(selectedAgentData.metrics).map(([key, value], index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm font-medium text-gray-600">{key}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Capabilities */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Core Capabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedAgentData.capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
              <Brain className="h-6 w-6 text-primary-600 mb-2" />
              <p className="font-medium text-gray-900">Chat with Agent</p>
              <p className="text-sm text-gray-600">Start a conversation</p>
            </button>
            <button className="p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
              <BarChart3 className="h-6 w-6 text-green-600 mb-2" />
              <p className="font-medium text-gray-900">View Analytics</p>
              <p className="text-sm text-gray-600">Performance insights</p>
            </button>
            <button className="p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
              <Clock className="h-6 w-6 text-orange-600 mb-2" />
              <p className="font-medium text-gray-900">Recent Activity</p>
              <p className="text-sm text-gray-600">Latest actions</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}