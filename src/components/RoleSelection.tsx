import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UserCircle, Users, GraduationCap } from 'lucide-react'

const roles = [
  { name: 'Estudiante', icon: GraduationCap, color: 'bg-green-500' },
  { name: 'Administrativo', icon: Users, color: 'bg-green-600' },
  { name: 'Profesor', icon: UserCircle, color: 'bg-green-700' },
]

const RoleSelection: React.FC = () => {
  const navigate = useNavigate()

  const handleRoleSelect = (role: string) => {
    navigate(`/login/${role.toLowerCase()}`)
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-800 mb-8">Selecciona tu rol</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roles.map((role) => (
            <button
              key={role.name}
              onClick={() => handleRoleSelect(role.name)}
              className={`${role.color} text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center`}
            >
              <role.icon size={48} className="mb-4" />
              <span className="text-xl font-semibold">{role.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RoleSelection