const SobreNos = () => {
  return (
    <section id="sobre-nos" className="section fade-in">
      <h2>Sobre Nós</h2>
      <div className="action-section">
        <p style={{fontSize: '1.2rem', marginBottom: '2rem'}}>
          Somos uma equipe dedicada à preservação da vida marinha, comprometida em educar e mobilizar 
          pessoas para a proteção dos oceanos através de ações concretas e sustentáveis.
        </p>
      </div>
      
      <div className="cards-container">
        <div className="card">
          <span className="card-icon">🌊</span>
          <h3>Nossa Missão</h3>
          <p>Proteger e preservar os ecossistemas marinhos através da educação, conscientização e ações diretas de conservação.</p>
        </div>
        <div className="card">
          <span className="card-icon">👥</span>
          <h3>Nossa Equipe</h3>
          <p>Biólogos marinhos, ambientalistas e voluntários unidos pela paixão de preservar a vida nos oceanos.</p>
        </div>
        <div className="card">
          <span className="card-icon">🎯</span>
          <h3>Nossa Visão</h3>
          <p>Um futuro onde os oceanos sejam limpos, saudáveis e repletos de vida marinha diversificada.</p>
        </div>
      </div>
    </section>
  )
}

export default SobreNos