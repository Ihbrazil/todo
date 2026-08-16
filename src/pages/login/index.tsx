import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles.css'

export default function Login() {
  const [nome, setNome] = useState<string>('')
  const navigate = useNavigate()

  const handleEntrar = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (nome.trim()) {
      localStorage.setItem('usuario_todo', nome)
      navigate('/home')
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Informe seu nome</h2>
        <form onSubmit={handleEntrar}>
          <div className="input-group">
            <label>Nome</label>
            <input 
              type="text" 
              placeholder="Ex: Wesley Bruno"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  )
}