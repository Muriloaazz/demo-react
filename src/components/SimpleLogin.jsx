import { useState } from 'react'

function SimpleLogin({ onClose, onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onLogin({ email, password })
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(45deg, #001122 0%, #003366 25%, #004488 50%, #0066aa 75%, #0088cc 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2000
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(15px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '20px',
        padding: '3rem',
        width: '100%',
        maxWidth: '400px',
        textAlign: 'center',
        position: 'relative',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
      }}>
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'none',
            border: 'none',
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '2rem',
            cursor: 'pointer',
            width: '40px',
            height: '40px',
            borderRadius: '50%'
          }}
        >×</button>
        
        <img 
          src="/src/assets/logocerta11.jpg" 
          alt="Preserv Ocean" 
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            margin: '0 auto 2rem',
            boxShadow: '0 20px 60px rgba(0, 204, 255, 0.4)',
            objectFit: 'cover'
          }}
        />
        
        <h2 style={{
          fontSize: '2rem',
          fontWeight: '800',
          marginBottom: '0.5rem',
          background: 'linear-gradient(135deg, #00ccff, #ffffff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>Bem-vindo</h2>
        
        <p style={{
          fontSize: '0.9rem',
          opacity: 0.7,
          marginBottom: '2rem',
          color: '#fff'
        }}>Faça login para acessar o Preserv Ocean</p>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontSize: '0.9rem',
              color: 'rgba(255, 255, 255, 0.8)'
            }}>E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
              style={{
                width: '100%',
                padding: '1rem',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.05)',
                color: 'white',
                fontSize: '1rem'
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontSize: '0.9rem',
              color: 'rgba(255, 255, 255, 0.8)'
            }}>Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              style={{
                width: '100%',
                padding: '1rem',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.05)',
                color: 'white',
                fontSize: '1rem'
              }}
            />
          </div>

          <button 
            type="submit"
            style={{
              width: '100%',
              padding: '1rem',
              background: 'linear-gradient(135deg, #00ccff, #0088cc)',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              marginBottom: '1rem'
            }}
          >Entrar</button>
          
          <a 
            href="#" 
            style={{
              color: '#00ccff',
              textDecoration: 'none',
              fontSize: '0.9rem'
            }}
          >Esqueceu sua senha?</a>
        </form>
      </div>
    </div>
  )
}

export default SimpleLogin