import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RoleSelection from './components/RoleSelection'
import Login from './components/Login'
import ForgotPassword from './components/ForgotPassword'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<RoleSelection />} />
          <Route path="/login/:role" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App