import Menu from '../../Componentes/Menu/index.js';
import fundo from '../../Componentes/Imagens/nexa_fundo.jpg';
import './sobrenexa.css'
function SobreNexa() {

  return (

    // Div principal com imagem de fundo ocupando a tela toda
    <div style={{ backgroundImage: "url(" + fundo + ")", backgroundSize: 'cover', minHeight: '100vh' }}>

      {/* Renderiza a barra de menu no topo */}
      <Menu />

      {/* Container que centraliza o card na tela */}
      <div className="sobre-container">
        <div className="sobre-card">

          {/* Label e título da página */}
          <p className="sobre-label">SOBRE NÓS</p>
          <h1 className="sobre-titulo">Conheça o NEXA</h1>

          {/* Divisor decorativo */}
          <div className="sobre-divider">◆</div>

          {/* Texto fixo — não pode ser editado */}
          <div className="sobre-texto">
            <p>
              O Nexa é uma plataforma de agendamento que conecta profissionais e clientes em um único lugar. 
              Por meio do nosso site, o profissional poderá cadastrar seus dias e horários disponíveis, 
              permitindo que os clientes realizem seus agendamentos de forma simples, rápida e organizada.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

// Exporta o componente para ser usado no App.js
export default SobreNexa;