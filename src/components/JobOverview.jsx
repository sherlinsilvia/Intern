import React from 'react'
import { MapPin, Clock, Users, GraduationCap, Building, Calendar } from 'lucide-react'

const JobOverview = () => {
  const overviewItems = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      subValue: 'Remote work available'
    },
    {
      icon: Clock,
      label: 'Job Type',
      value: 'Full-time',
      subValue: 'Monday to Friday'
    },
    {
      icon: Users,
      label: 'Team Size',
      value: '10-15 people',
      subValue: 'Frontend Engineering'
    },
    {
      icon: GraduationCap,
      label: 'Experience',
      value: '3-5 years',
      subValue: 'Senior level'
    },
    {
      icon: Building,
      label: 'Department',
      value: 'Engineering',
      subValue: 'Product Development'
    },
    {
      icon: Calendar,
      label: 'Start Date',
      value: 'Immediate',
      subValue: 'ASAP'
    }
  ]

  const skills = [
    'React', 'TypeScript', 'Node.js', 'GraphQL', 'Redux', 'Tailwind CSS',
    'Next.js', 'Jest', 'Git', 'Figma', 'AWS', 'Docker'
  ]

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Job Overview</h2>
      
      {/* Overview Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {overviewItems.map((item, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <item.icon className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">{item.label}</p>
              <p className="text-gray-900 font-semibold">{item.value}</p>
              <p className="text-sm text-gray-500">{item.subValue}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Skills Section */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Required Skills</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium rounded-full hover:from-indigo-600 hover:to-purple-700 transition-all duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default JobOverview