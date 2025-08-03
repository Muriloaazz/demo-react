const ObjetivoProjeto = () => {
  return (
    <section id="objetivo-projeto" className="section fade-in">
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
  )
}

export default ObjetivoProjeto