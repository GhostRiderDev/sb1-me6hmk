import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { User, Lock } from 'lucide-react'

const Login: React.FC = () => {
  const { role } = useParams<{ role: string }>()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica de autenticación
    console.log('Login attempt:', { role, email, password })
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="bg-green-50 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
          Iniciar sesión como {role}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center bg-white rounded-md px-3 py-2">
            <User className="text-green-600 mr-2" />
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow outline-none"
              required
            />
          </div>
          <div className="flex items-center bg-white rounded-md px-3 py-2">
            <Lock className="text-green-600 mr-2" />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-grow outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-300"
          >
            Iniciar sesión
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/forgot-password" className="text-green-600 hover:underline">
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
        <div className="mt-6 text-center">
          <Link to="/" className="text-green-600 hover:underline">
            Volver a selección de rol
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login