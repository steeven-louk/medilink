import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../store/authContext'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
    const {login} = useAuth()
  const handleLogin = (e) => {
    e.preventDefault()
    // Simuler une authentification
    if (email === 'test@example.com' && password === '123456') {
      // setUser({ email })
      login()
      navigate('/boutique');
    } else {
      toast.error("Identifiants incorrects")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <form onSubmit={handleLogin} className="bg-gray-800 p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Connexion</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
          Se connecter
        </button>
      </form>
    </div>
  )
}

export default Login
