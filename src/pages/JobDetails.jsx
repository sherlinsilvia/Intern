import React from 'react'
import JobHeader from '../components/JobHeader'
import JobOverview from '../components/JobOverview'
import JobDescription from '../components/JobDescription'
import CompanyInfo from '../components/CompanyInfo'


const JobDetails = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Job Header */}
      <JobHeader />
      
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <JobOverview />
          <JobDescription />
        </div>
        
        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          <CompanyInfo />
        </div>
      </div>
    </div>
  )
}

export default JobDetails