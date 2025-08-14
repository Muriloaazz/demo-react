import { useState } from 'react'
import './Login.css'

function Login({ onClose, onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onLogin({ email, password })
  }

  return (
    <div className="login-overlay">
      <div className="ocean-bg"></div>
      <div className="waves">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      
      <div className="login-container">
        <div className="login-card">
          <button className="close-btn" onClick={onClose}>×</button>
          
          <img src="/src/assets/logocerta11.jpg" alt="Preserv Ocean" className="login-logo" />
          
          <h2 className="login-title">Bem-vindo</h2>
          <p className="login-subtitle">Faça login para acessar o Preserv Ocean</p>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>

            <button type="submit" className="login-btn">Entrar</button>
            
            <a href="#" className="forgot-password">Esqueceu sua senha?</a>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login