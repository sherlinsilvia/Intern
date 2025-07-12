import React from 'react'
import { MapPin, Calendar, DollarSign, Users, Clock, Share2, Bookmark, Eye } from 'lucide-react'

const JobHeader = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
        {/* Left Section */}
        <div className="flex-1">
          <div className="flex items-start space-x-4">
            {/* Company Logo */}
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            
            {/* Job Info */}
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                  Actively Hiring
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                  Remote
                </span>
              </div>
              
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Senior Frontend Developer
              </h1>
              
              <div className="flex items-center space-x-6 text-gray-600 mb-4">
                <div className="flex items-center space-x-1">
                  <span className="font-semibold text-gray-900">Google Inc.</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>Posted 2 days ago</span>
                </div>
              </div>
              
              {/* Job Stats */}
              <div className="flex items-center space-x-8 text-sm">
                <div className="flex items-center space-x-1">
                  <DollarSign className="w-4 h-4 text-green-600" />
                  <span className="font-semibold text-gray-900">$120k - $180k</span>
                  <span className="text-gray-500">/ year</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span className="font-semibold text-gray-900">45</span>
                  <span className="text-gray-500">applicants</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4 text-orange-600" />
                  <span className="font-semibold text-gray-900">Full-time</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="w-4 h-4 text-purple-600" />
                  <span className="font-semibold text-gray-900">1.2k</span>
                  <span className="text-gray-500">views</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Section - Action Buttons */}
        <div className="flex items-center space-x-3 mt-6 lg:mt-0">
          <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </button>
          
          <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
            <Bookmark className="w-4 h-4" />
            <span>Save</span>
          </button>
          
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default JobHeader