import SobreNos from './components/SobreNos'

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="App">
      <div className="ocean-bg"></div>
      <div className="waves">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>

      <header>
        <nav>
          <ul className="nav-links">
            <li><a href="#home" onClick={() => scrollToSection('home')}>Início</a></li>
            <li><a href="#sobre-nos" onClick={() => scrollToSection('sobre-nos')}>Sobre Nós</a></li>
            <li><a href="#actions" className="donate-btn" onClick={() => scrollToSection('actions')}>DOE</a></li>
          </ul>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Preserve Nossos Oceanos</h1>
          <p>Juntos podemos proteger a vida marinha e garantir um futuro sustentável para as próximas gerações</p>
          <a href="#sobre-nos" className="cta-button" onClick={() => scrollToSection('sobre-nos')}>Descubra Como Ajudar</a>
        </div>
      </section>

      <SobreNos />

      <section id="threats" className="section">
        <h2>Principais Ameaças</h2>
        <div className="cards-container">
          <div className="card">
            <span className="card-icon">🏭</span>
            <h3>Poluição</h3>
            <p>Plásticos, químicos e resíduos industriais contaminam os oceanos, afetando toda a cadeia alimentar marinha e causando a morte de milhões de animais marinhos anualmente.</p>
          </div>
          <div className="card">
            <span className="card-icon">🌡️</span>
            <h3>Aquecimento Global</h3>
            <p>O aumento da temperatura oceânica causa branqueamento de corais, altera correntes marítimas e força espécies a migrar, destruindo ecossistemas inteiros.</p>
          </div>
          <div className="card">
            <span className="card-icon">🎣</span>
            <h3>Pesca Excessiva</h3>
            <p>A exploração descontrolada dos recursos pesqueiros leva ao colapso de populações de peixes, desequilibrando todo o ecossistema marinho.</p>
          </div>
        </div>
      </section>

      <section id="actions" className="section">
        <h2>Como Você Pode Ajudar</h2>
        
        <div className="action-section">
          <h3 style={{color: '#00ccff', marginBottom: '1rem'}}>Ações Individuais</h3>
          <p>Pequenas mudanças em nosso dia a dia podem fazer uma grande diferença para os oceanos.</p>
          <div className="action-buttons">
            <button className="action-btn">Reduza o Plástico</button>
            <button className="action-btn">Consuma Conscientemente</button>
            <button className="action-btn">Economize Energia</button>
            <button className="action-btn">Limpe as Praias</button>
          </div>
        </div>

        <div className="cards-container">
          <div className="card">
            <span className="card-icon">♻️</span>
            <h3>Recicle e Reutilize</h3>
            <p>Evite produtos de uso único, recicle corretamente e escolha alternativas sustentáveis. Cada item reciclado é um a menos nos oceanos.</p>
          </div>
          <div className="card">
            <span className="card-icon">🐟</span>
            <h3>Escolha Frutos do Mar Sustentáveis</h3>
            <p>Prefira peixes de pesca sustentável e evite espécies ameaçadas. Consulte guias de consumo responsável antes de comprar.</p>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div style={{maxWidth: '1600px', margin: '0 auto'}}>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem'}}>
            <div>
              <h3 style={{color: '#00ccff', marginBottom: '1rem'}}>🌊 Preserv Ocean</h3>
              <p style={{marginBottom: '1rem'}}>Dedicados à preservação da vida marinha e proteção dos oceanos para as futuras gerações.</p>
              <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
                <span style={{fontSize: '1.5rem', cursor: 'pointer'}}>📧</span>
                <span style={{fontSize: '1.5rem', cursor: 'pointer'}}>📱</span>
                <span style={{fontSize: '1.5rem', cursor: 'pointer'}}>🌐</span>
              </div>
            </div>
            
            <div>
              <h4 style={{color: '#00ccff', marginBottom: '1rem'}}>Contato</h4>
              <p>📧 info@preservocean.org</p>
              <p>📱 (11) 99999-9999</p>
              <p>📍 São Paulo, SP - Brasil</p>
              <p>🕒 Seg-Sex: 9h às 18h</p>
            </div>
            
            <div>
              <h4 style={{color: '#00ccff', marginBottom: '1rem'}}>Links Úteis</h4>
              <p style={{marginBottom: '0.5rem', cursor: 'pointer', opacity: 0.8}}>• Como Ajudar</p>
              <p style={{marginBottom: '0.5rem', cursor: 'pointer', opacity: 0.8}}>• Projetos Ativos</p>
              <p style={{marginBottom: '0.5rem', cursor: 'pointer', opacity: 0.8}}>• Relatórios</p>
              <p style={{marginBottom: '0.5rem', cursor: 'pointer', opacity: 0.8}}>• Parcerias</p>
            </div>
            
            <div>
              <h4 style={{color: '#00ccff', marginBottom: '1rem'}}>Impacto</h4>
              <p>🐠 +50 espécies protegidas</p>
              <p>🏖️ 200km de praias limpas</p>
              <p>👥 +10.000 voluntários</p>
              <p>🌱 15 projetos ativos</p>
            </div>
          </div>
          
          <div style={{borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '2rem', textAlign: 'center'}}>
            <p style={{marginBottom: '1rem'}}>Trabalhando juntos por oceanos mais limpos e vida marinha protegida.</p>
            <p style={{fontSize: '0.9rem', opacity: 0.6}}>
              © 2025 Preserv Ocean. Todos os direitos reservados. Feito com 💙 para nossos oceanos.
            </p>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default App