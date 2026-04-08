import React, { useState, useRef, useEffect } from 'react'
import { Send, Bot, User, Sparkles, Truck, BarChart3 } from 'lucide-react'

export function ChatPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Hello! I'm your AI-Native TMS assistant. I can help you with freight operations, carrier management, load optimization, and analytics. What would you like to know?",
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [messages])

  const simulatedResponses = {
    'carrier': "I found 15 qualified carriers for your Chicago to LA route. Here are the top 3 matches:\n\n🚛 **Premier Logistics** - $2,450\n- Safety Score: 98/100\n- On-time Performance: 96%\n- Available: Next Day\n\n🚛 **Highway Express** - $2,320\n- Safety Score: 94/100  \n- On-time Performance: 94%\n- Available: Same Day\n\n🚛 **Swift Transport** - $2,280\n- Safety Score: 92/100\n- On-time Performance: 91% \n- Available: 2 Days\n\nWould you like me to create load tenders for any of these carriers?",
    
    'load': "I can help optimize your load assignments! Based on current data:\n\n📊 **Current Load Status:**\n- 47 loads pending assignment\n- 23 loads in transit\n- 8 loads delivered today\n\n🎯 **Optimization Recommendations:**\n1. Consolidate 3 partial loads to Chicago into 1 full truckload\n2. Reroute LA-bound freight through Phoenix hub for 15% cost savings\n3. 5 loads have premium carriers available for on-time delivery\n\nShall I proceed with these optimizations?",
    
    'analytics': "Here's your performance summary for this week:\n\n📈 **Key Metrics:**\n- Revenue: $2.1M (+12% vs last week)\n- Load Volume: 1,247 loads (+8%)\n- On-time Performance: 94.7% (+2.1%)\n- Average Margin: 18.3% (+1.2%)\n\n🔍 **Insights:**\n- Tuesday had highest volume (287 loads)\n- Chicago-LA lane showing 15% rate increase\n- Carrier Premier Logistics exceeded SLA expectations\n\n📊 **Predictions:**\n- Next week volume forecast: 1,340 loads\n- Recommended rate adjustments on 3 high-volume lanes\n\nWould you like me to generate a detailed report?",
    
    'rfp': "I'll help you create an RFP for the West Coast distribution project:\n\n📋 **RFP Template Generated:**\n\n**Project:** West Coast Distribution Network\n**Duration:** 12 months\n**Volume:** 500 loads/month\n**Lanes:** \n- LA to Seattle (125 loads/month)\n- LA to Portland (150 loads/month) \n- LA to San Francisco (225 loads/month)\n\n**Requirements:**\n- Temperature controlled equipment\n- 24/7 tracking capability\n- 95% on-time performance SLA\n- $2M cargo insurance minimum\n\n**Bid Deadline:** 10 business days\n\nShall I send this RFP to your approved carrier list?",
    
    'default': "I understand you're asking about transportation operations. I can assist with:\n\n🚛 **Load Management**\n- Find carriers for specific routes\n- Optimize load assignments\n- Track shipment status\n\n📊 **Analytics & Insights** \n- Performance metrics\n- Cost analysis\n- Market intelligence\n\n📋 **Contract Management**\n- Generate RFPs\n- Evaluate bids\n- Rate recommendations\n\n💰 **Financial Operations**\n- Invoice processing\n- Payment tracking\n- Profitability analysis\n\nWhat specific area would you like help with?"
  }

  const handleSend = async () => {
    if (!inputValue.trim()) return

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate AI processing delay
    setTimeout(() => {
      let response = simulatedResponses.default
      const input = inputValue.toLowerCase()

      if (input.includes('carrier') || input.includes('chicago') || input.includes('la')) {
        response = simulatedResponses.carrier
      } else if (input.includes('load') || input.includes('optimize') || input.includes('assignment')) {
        response = simulatedResponses.load
      } else if (input.includes('analytic') || input.includes('performance') || input.includes('metric') || input.includes('report')) {
        response = simulatedResponses.analytics
      } else if (input.includes('rfp') || input.includes('bid') || input.includes('contract') || input.includes('proposal')) {
        response = simulatedResponses.rfp
      }

      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: response,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const quickActions = [
    { text: "Find carriers for Chicago to LA", icon: Truck },
    { text: "Show this week's performance metrics", icon: BarChart3 },
    { text: "Optimize pending load assignments", icon: Sparkles },
    { text: "Generate RFP for new project", icon: Bot }
  ]

  return (
    <div className="max-w-4xl mx-auto h-screen flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-6">
        <h1 className="text-2xl font-bold text-gray-900">AI Assistant</h1>
        <p className="text-gray-600 mt-1">
          Chat with your intelligent TMS in natural language
        </p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex max-w-3xl ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              {/* Avatar */}
              <div className={`flex-shrink-0 ${message.type === 'user' ? 'ml-3' : 'mr-3'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  message.type === 'user' 
                    ? 'bg-primary-600' 
                    : 'bg-gray-600'
                }`}>
                  {message.type === 'user' ? (
                    <User className="h-4 w-4 text-white" />
                  ) : (
                    <Bot className="h-4 w-4 text-white" />
                  )}
                </div>
              </div>
              
              {/* Message */}
              <div className={`px-4 py-3 rounded-2xl ${
                message.type === 'user'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white border border-gray-200 text-gray-900'
              }`}>
                <div className="whitespace-pre-wrap">{message.content}</div>
                <div className={`text-xs mt-1 ${
                  message.type === 'user' ? 'text-primary-100' : 'text-gray-500'
                }`}>
                  {message.timestamp.toLocaleTimeString()}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
                <Bot className="h-4 w-4 text-white" />
              </div>
              <div className="bg-white border border-gray-200 px-4 py-3 rounded-2xl">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Actions */}
      {messages.length === 1 && (
        <div className="px-6 py-4 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-3">Try asking:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {quickActions.map((action, index) => {
              const Icon = action.icon
              return (
                <button
                  key={index}
                  onClick={() => setInputValue(action.text)}
                  className="flex items-center space-x-2 p-3 text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-sm"
                >
                  <Icon className="h-4 w-4 text-gray-600" />
                  <span className="text-gray-700">{action.text}</span>
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="bg-white border-t border-gray-200 p-6">
        <div className="flex space-x-4">
          <div className="flex-1">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything about your transportation operations..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              rows={1}
              disabled={isTyping}
            />
          </div>
          <button
            onClick={handleSend}
            disabled={!inputValue.trim() || isTyping}
            className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}