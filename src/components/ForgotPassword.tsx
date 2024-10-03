import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el correo de recuperación
    console.log('Password reset requested for:', email)
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="bg-green-50 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
          Recuperar contraseña
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center bg-white rounded-md px-3 py-2">
            <Mail className="text-green-600 mr-2" />
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-300"
          >
            Enviar instrucciones
          </button>
        </form>
        <div className="mt-6 text-center">
          <Link to="/" className="text-green-600 hover:underline">
            Volver a selección de rol
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword