import React from 'react'

const JobDescription = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Job Description</h2>

      {/* About the Role */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">About the Role</h3>
        <div className="text-gray-700 space-y-4">
          <p>
            We are looking for a talented Senior Frontend Developer to join our dynamic engineering team. 
            You will be responsible for building and maintaining user-facing applications that serve millions 
            of users worldwide. This is an excellent opportunity to work with cutting-edge technologies and 
            contribute to products that make a real impact.
          </p>
          <p>
            As a Senior Frontend Developer, you'll work closely with our product, design, and backend teams 
            to create exceptional user experiences. You'll have the opportunity to mentor junior developers, 
            influence technical decisions, and drive the adoption of best practices across the team.
          </p>
        </div>
      </div>
    </div>
  )
}

export default JobDescription
