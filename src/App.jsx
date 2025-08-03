import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
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
          <div className="logo">🌊 AquaVida</div>
          <ul className="nav-links">
            <li><a href="#home" onClick={() => scrollToSection('home')}>Início</a></li>
            <li><a href="#about" onClick={() => scrollToSection('about')}>Sobre</a></li>
            <li><a href="#justificativa" onClick={() => scrollToSection('justificativa')}>Justificativa do Projeto</a></li>
            <li><a href="#objetivo" onClick={() => scrollToSection('objetivo')}>Objetivo do Projeto</a></li>
            <li><a href="#threats" onClick={() => scrollToSection('threats')}>Ameaças</a></li>
            <li><a href="#actions" onClick={() => scrollToSection('actions')}>Ações</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contato</a></li>
          </ul>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Preserve Nossos Oceanos</h1>
          <p>Juntos podemos proteger a vida marinha e garantir um futuro sustentável para as próximas gerações</p>
          <a href="#about" className="cta-button" onClick={() => scrollToSection('about')}>Descubra Como Ajudar</a>
        </div>
      </section>

      <section id="about" className="section fade-in">
        <h2>Por Que Preservar?</h2>
        <p style={{textAlign: 'center', fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9}}>
          Os oceanos cobrem 71% da superfície terrestre e abrigam uma biodiversidade incrível. 
          Eles regulam o clima, produzem oxigênio e sustentam bilhões de vidas.
        </p>
        
        <div className="stats-container">
          <div className="stat">
            <span className="stat-number">70%</span>
            <span>do oxigênio que respiramos vem dos oceanos</span>
          </div>
          <div className="stat">
            <span className="stat-number">3 bilhões</span>
            <span>de pessoas dependem dos oceanos para sobreviver</span>
          </div>
          <div className="stat">
            <span className="stat-number">80%</span>
            <span>da vida na Terra está nos oceanos</span>
          </div>
          <div className="stat">
            <span className="stat-number">8 milhões</span>
            <span>de toneladas de plástico chegam aos oceanos anualmente</span>
          </div>
        </div>
      </section>

      <section id="justificativa" className="section fade-in">
        <h2>Justificativa do Projeto</h2>
        <div className="cards-container">
          <div className="card">
            <span className="card-icon">🌍</span>
            <h3>Urgência Ambiental</h3>
            <p>A degradação dos oceanos atingiu níveis críticos. Estudos mostram que temos apenas uma década para reverter os danos mais graves e evitar o colapso de ecossistemas marinhos essenciais.</p>
          </div>
          <div className="card">
            <span className="card-icon">⚖️</span>
            <h3>Responsabilidade Social</h3>
            <p>Como sociedade, temos a obrigação moral de proteger os oceanos para as futuras gerações. Cada ação individual contribui para um impacto coletivo significativo.</p>
          </div>
          <div className="card">
            <span className="card-icon">💡</span>
            <h3>Educação e Conscientização</h3>
            <p>A falta de conhecimento sobre a importância dos oceanos é um dos principais obstáculos. Este projeto visa educar e mobilizar pessoas para ações concretas de preservação.</p>
          </div>
        </div>
      </section>

      <section id="objetivo" className="section fade-in">
        <h2>Objetivo do Projeto</h2>
        <div className="action-section">
          <h3 style={{color: '#00ccff', marginBottom: '1rem'}}>Missão Principal</h3>
          <p style={{fontSize: '1.2rem', marginBottom: '2rem'}}>
            Criar uma plataforma educativa e mobilizadora que inspire ações concretas para a preservação da vida marinha, 
            conectando pessoas, organizações e iniciativas em prol dos oceanos.
          </p>
        </div>
        
        <div className="cards-container">
          <div className="card">
            <span className="card-icon">📚</span>
            <h3>Educar</h3>
            <p>Fornecer informações científicas acessíveis sobre a importância dos oceanos e os impactos das ações humanas no ecossistema marinho.</p>
          </div>
          <div className="card">
            <span className="card-icon">🤝</span>
            <h3>Mobilizar</h3>
            <p>Conectar pessoas interessadas em preservação marinha e facilitar a participação em ações coletivas e iniciativas locais.</p>
          </div>
          <div className="card">
            <span className="card-icon">🎯</span>
            <h3>Transformar</h3>
            <p>Promover mudanças comportamentais duradouras que resultem em redução significativa do impacto humano nos oceanos.</p>
          </div>
        </div>
      </section>

      <section id="threats" className="section fade-in">
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

      <section id="actions" className="section fade-in">
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
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h3 style={{color: '#00ccff', marginBottom: '1rem'}}>AquaVida - Preservação Marinha</h3>
          <p>Trabalhando juntos por oceanos mais limpos e vida marinha protegida.</p>
          <p style={{marginTop: '1rem', opacity: 0.7}}>
            Entre em contato: info@aquavida.org | (11) 9999-9999
          </p>
          <p style={{marginTop: '2rem', fontSize: '0.9rem', opacity: 0.6}}>
            © 2025 AquaVida. Todos os direitos reservados. Feito com 💙 para nossos oceanos.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App