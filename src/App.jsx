import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import JobDetails from './pages/JobDetails'
import NotImplemented from './pages/NotImplemented'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/job-preview" replace />} />
          <Route path="/job-preview" element={<JobDetails />} />
          <Route path="/job-details/:id" element={<JobDetails />} />
          <Route path="/applicants" element={<NotImplemented />} />
          <Route path="/match" element={<NotImplemented />} />
          <Route path="/messages" element={<NotImplemented />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
