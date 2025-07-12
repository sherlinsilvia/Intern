import React from 'react'
import { MapPin, Users, Calendar, Globe, Star, ExternalLink } from 'lucide-react'

const CompanyInfo = () => {
  const companyStats = [
    { label: 'Founded', value: '1998', icon: Calendar },
    { label: 'Employees', value: '156,000+', icon: Users },
    { label: 'Locations', value: '50+ countries', icon: MapPin },
    { label: 'Rating', value: '4.4/5', icon: Star }
  ]

  const companyValues = [
    'Innovation & Excellence',
    'Diversity & Inclusion',
    'Sustainability',
    'User Privacy & Security'
  ]

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Company Information</h2>
      
      {/* Company Header */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
          <span className="text-white font-bold text-2xl">G</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">Google Inc.</h3>
          <p className="text-gray-600">Technology Company</p>
          <div className="flex items-center space-x-1 mt-1">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-medium">4.4</span>
            <span className="text-sm text-gray-500">(12k reviews)</span>
          </div>
        </div>
      </div>
      
      {/* Company Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {companyStats.map((stat, index) => (
          <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
            <stat.icon className="w-5 h-5 text-indigo-600 mx-auto mb-2" />
            <p className="text-sm text-gray-600">{stat.label}</p>
            <p className="font-semibold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>
      
      {/* About Company */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3">About Google</h4>
        <p className="text-gray-700 text-sm leading-relaxed">
          Google's mission is to organize the world's information and make it universally accessible and useful. 
          We're a global technology leader focused on improving the ways people connect with information through 
          our products and platforms.
        </p>
      </div>
      
      {/* Company Values */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3">Our Values</h4>
        <div className="space-y-2">
          {companyValues.map((value, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
              <span className="text-sm text-gray-700">{value}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="space-y-3">
        <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          <Globe className="w-4 h-4" />
          <span>Visit Website</span>
          <ExternalLink className="w-4 h-4" />
        </button>
        
        <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
          <Users className="w-4 h-4" />
          <span>View All Jobs</span>
        </button>
      </div>
    </div>
  )
}

export default CompanyInfo