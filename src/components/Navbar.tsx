import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Truck, BarChart3, Cpu, MessageSquare } from 'lucide-react'
import clsx from 'clsx'

export function Navbar() {
  const location = useLocation()
  
  const navigation = [
    { name: 'Home', href: '/', icon: Truck },
    { name: 'Dashboard', href: '/dashboard', icon: BarChart3 },
    { name: 'AI Agents', href: '/agents', icon: Cpu },
    { name: 'Chat', href: '/chat', icon: MessageSquare },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Truck className="h-8 w-8 text-primary-600" />
              <span className="font-bold text-xl text-gray-900">AI-Native TMS</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.href
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={clsx(
                    'flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors',
                    isActive
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}