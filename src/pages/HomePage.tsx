import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Truck, 
  Brain, 
  Zap, 
  BarChart3, 
  Users, 
  DollarSign,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

export function HomePage() {
  const agents = [
    {
      name: 'Contract Intelligence',
      icon: Brain,
      description: 'AI-powered RFP generation, bid evaluation, and rate optimization',
      color: 'text-blue-600 bg-blue-100'
    },
    {
      name: 'Capacity Intelligence', 
      icon: BarChart3,
      description: 'Demand forecasting, load optimization, and capacity planning',
      color: 'text-green-600 bg-green-100'
    },
    {
      name: 'Carrier Intelligence',
      icon: Users,
      description: 'Carrier matching, performance scoring, and compliance tracking', 
      color: 'text-purple-600 bg-purple-100'
    },
    {
      name: 'Dispatch Operations',
      icon: Zap,
      description: 'Real-time load assignment, exception handling, and optimization',
      color: 'text-orange-600 bg-orange-100'
    },
    {
      name: 'Analytics Intelligence',
      icon: BarChart3, 
      description: 'Predictive analytics, business intelligence, and market insights',
      color: 'text-indigo-600 bg-indigo-100'
    },
    {
      name: 'Financial Management',
      icon: DollarSign,
      description: 'Automated billing, payment processing, and cost analysis',
      color: 'text-emerald-600 bg-emerald-100'
    }
  ]

  const features = [
    'Natural Language Interface - Chat with your TMS in plain English/Chinese',
    'AI-Powered Decision Making - Intelligent automation for complex logistics',
    'Real-time Optimization - Dynamic load assignment and route planning', 
    'Predictive Analytics - Market intelligence and demand forecasting',
    'Seamless Integration - Connect with existing TMS and external systems',
    'Mobile Responsive - Works perfectly on all devices'
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Native Transport
              <br />
              Management System
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Revolutionary TMS powered by 6 intelligent AI agents working collaboratively 
              to optimize freight operations, reduce costs, and improve efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/chat" 
                className="btn btn-primary bg-white text-primary-700 hover:bg-gray-100 px-8 py-3 text-lg inline-flex items-center"
              >
                Try AI Chat <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/dashboard" 
                className="btn border-2 border-white text-white hover:bg-white hover:text-primary-700 px-8 py-3 text-lg"
              >
                View Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Built for Modern Logistics
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the next generation of transport management with AI-native design
              and intelligent automation at every step.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Agents Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Your AI Agents
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Six specialized AI agents working together to handle every aspect of 
              your transportation operations with intelligence and efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agents.map((agent, index) => {
              const Icon = agent.icon
              return (
                <div key={index} className="agent-card group">
                  <div className={`w-12 h-12 rounded-lg ${agent.color} flex items-center justify-center mb-4`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {agent.name}
                  </h3>
                  <p className="text-gray-600">
                    {agent.description}
                  </p>
                </div>
              )
            })}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/agents" 
              className="btn btn-primary px-8 py-3 inline-flex items-center"
            >
              Explore All Agents <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Experience the future of transport management with our AI-native platform.
              Start chatting with your intelligent TMS today.
            </p>
            <Link 
              to="/chat" 
              className="btn bg-white text-primary-700 hover:bg-gray-100 px-8 py-3 text-lg inline-flex items-center"
            >
              Start Free Chat <MessageSquare className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function MessageSquare({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  )
}