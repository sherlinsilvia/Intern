import React from 'react'
import { NavLink } from 'react-router-dom'
import { 
  Users, 
  Target, 
  MessageCircle, 
  User, 
  Briefcase,
  X
} from 'lucide-react'

const Sidebar = ({ isOpen, setIsOpen }) => {
  const navigationItems = [
    { name: 'Job Preview', icon: Briefcase, path: '/job-preview', active: true },
    { name: 'Applicants', icon: Users, path: '/applicants', active: false },
    { name: 'Match', icon: Target, path: '/match', active: false },
    { name: 'Messages', icon: MessageCircle, path: '/messages', active: false },
  ]

  return (
    <>
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-br from-indigo-600 to-purple-700 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-between h-16 px-6 bg-black bg-opacity-10">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-indigo-600" />
            </div>
            <span className="ml-3 text-xl font-bold text-white">JobBoard</span>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="lg:hidden text-white hover:text-gray-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="mt-8 px-4">
          <div className="space-y-2">
            {navigationItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => 
                  `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    isActive || item.active
                      ? 'bg-white bg-opacity-20 text-white shadow-lg'
                      : 'text-indigo-100 hover:bg-white hover:bg-opacity-10 hover:text-white'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </NavLink>
            ))}
          </div>
        </nav>
        
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="bg-white bg-opacity-10 rounded-lg p-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-indigo-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-white">RS</p>
                <p className="text-xs text-indigo-200">HR Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
