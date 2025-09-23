import { useState, useEffect } from 'react';
import './Auth.css';

const Auth = () => {
  const [isActive, setIsActive] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({
    name: '', email: '', password: '', confirmPassword: ''
  });
  const [messages, setMessages] = useState({
    loginError: '', loginSuccess: '', registerError: '', registerSuccess: ''
  });

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      window.location.href = 'login-page.html';
    }
  }, []);

  const showMessage = (type, message) => {
    setMessages(prev => ({ ...prev, [type]: message }));
    setTimeout(() => setMessages(prev => ({ ...prev, [type]: '' })), type.includes('success') ? 3000 : 5000);
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = loginData;

    if (!isValidEmail(email)) {
      showMessage('loginError', 'Por favor, digite um email válido.');
      return;
    }

    if (password.length < 6) {
      showMessage('loginError', 'A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      showMessage('loginSuccess', 'Login realizado com sucesso! Redirecionando...');
      localStorage.setItem('currentUser', JSON.stringify(user));
      setTimeout(() => window.location.href = 'login-page.html', 1500);
    } else {
      showMessage('loginError', 'Email ou senha incorretos.');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = registerData;

    if (name.length < 2) {
      showMessage('registerError', 'Nome deve ter pelo menos 2 caracteres.');
      return;
    }

    if (!isValidEmail(email)) {
      showMessage('registerError', 'Por favor, digite um email válido.');
      return;
    }

    if (password.length < 6) {
      showMessage('registerError', 'A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    if (password !== confirmPassword) {
      showMessage('registerError', 'As senhas não coincidem.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find(u => u.email === email)) {
      showMessage('registerError', 'Este email já está cadastrado.');
      return;
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    showMessage('registerSuccess', 'Cadastro realizado com sucesso!');
    setRegisterData({ name: '', email: '', password: '', confirmPassword: '' });
    setTimeout(() => setIsActive(false), 2000);
  };

  const showForgotPassword = () => {
    const email = prompt('Digite seu email para recuperar a senha:');
    if (email && isValidEmail(email)) {
      showMessage('loginSuccess', 'Instruções enviadas para seu email!');
    } else if (email) {
      showMessage('loginError', 'Por favor, digite um email válido.');
    }
  };

  return (
    <div>
      <div className="ocean-bg"></div>
      <div className="floating-bubbles">
        {[...Array(12)].map((_, i) => <div key={i} className="bubble"></div>)}
      </div>

      <div className={`container ${isActive ? 'active' : ''}`}>
        <div className="form-container sign-up">
          <form onSubmit={handleRegister}>
            <h1>Criar Conta</h1>
            <div className="social-icons">
              <a href="#"><i className="fa-brands fa-google-plus-g"></i></a>
              <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
            </div>
            <span>ou use seu email para cadastro</span>
            {messages.registerError && <div className="error-message" style={{display: 'block'}}>{messages.registerError}</div>}
            {messages.registerSuccess && <div className="success-message" style={{display: 'block'}}>{messages.registerSuccess}</div>}
            <input
              type="text"
              placeholder="Nome Completo"
              value={registerData.name}
              onChange={(e) => setRegisterData(prev => ({...prev, name: e.target.value}))}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={registerData.email}
              onChange={(e) => setRegisterData(prev => ({...prev, email: e.target.value}))}
              required
            />
            <input
              type="password"
              placeholder="Senha"
              value={registerData.password}
              onChange={(e) => setRegisterData(prev => ({...prev, password: e.target.value}))}
              required
              minLength="6"
            />
            <input
              type="password"
              placeholder="Confirmar Senha"
              value={registerData.confirmPassword}
              onChange={(e) => setRegisterData(prev => ({...prev, confirmPassword: e.target.value}))}
              required
            />
            <button type="submit">Cadastrar</button>
          </form>
        </div>

        <div className="form-container sign-in">
          <form onSubmit={handleLogin}>
            <h1>Entrar</h1>
            <div className="social-icons">
              <a href="#"><i className="fa-brands fa-google-plus-g"></i></a>
              <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i className="fa-brands fa-github"></i></a>
              <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
            <span>ou use seu email e senha</span>
            {messages.loginError && <div className="error-message" style={{display: 'block'}}>{messages.loginError}</div>}
            {messages.loginSuccess && <div className="success-message" style={{display: 'block'}}>{messages.loginSuccess}</div>}
            <input
              type="email"
              placeholder="Email"
              value={loginData.email}
              onChange={(e) => setLoginData(prev => ({...prev, email: e.target.value}))}
              required
            />
            <input
              type="password"
              placeholder="Senha"
              value={loginData.password}
              onChange={(e) => setLoginData(prev => ({...prev, password: e.target.value}))}
              required
            />
            <a href="#" onClick={showForgotPassword}>Esqueceu sua senha?</a>
            <button type="submit">Entrar</button>
          </form>
        </div>

        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Bem-vindo de volta!</h1>
              <p>Faça login para acessar sua conta</p>
              <button className="hidden" onClick={() => setIsActive(false)}>Entrar</button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Olá, Amigo!</h1>
              <p>Cadastre-se para começar</p>
              <button className="hidden" onClick={() => setIsActive(true)}>Cadastrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;