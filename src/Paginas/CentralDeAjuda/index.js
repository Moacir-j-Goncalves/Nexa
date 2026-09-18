import React, { useState } from 'react';
import './CentralDeAjuda.css';
import { useNavigate } from 'react-router-dom';
import Menu from '../../Componentes/Menu';
import fundo from '../../Componentes/Imagens/nexa_fundo.jpg';

function Centraldeajuda() {
  const [abrirPergunta1, setAbrirPergunta1] = useState(false);
  const [abrirPergunta2, setAbrirPergunta2] = useState(false);
  const [abrirPergunta3, setAbrirPergunta3] = useState(false);
  const [abrirPergunta4, setAbrirPergunta4] = useState(false);

  return (
    <div
      style={{
        backgroundImage: `url(${fundo})`,
        backgroundSize: 'cover',
        minHeight: '100vh'
      }}
    >
      <Menu />
      <div className="ajuda-container">
        <div className="ajuda-card-principal">

          <p className="ajuda-label">SUPORTE</p>
          <h1 className="ajuda-titulo">Central de Ajuda</h1>
          <div className="ajuda-divider">◆</div>

          {/* CARD 1 */}
          <div className="ajuda-item">
            <div
              className="ajuda-item-header"
              onClick={() => setAbrirPergunta1(!abrirPergunta1)}
            >
              <h3 className="ajuda-item-titulo">Como agendar um serviço?</h3>
              <span className="ajuda-seta">{abrirPergunta1 ? '▲' : '▼'}</span>
            </div>
            {abrirPergunta1 && (
              <p className="ajuda-item-texto">
                Para agendar um serviço primeiro conecte sua conta, em seguida
                ative sua localização e escolha o serviço desejado, acessando a
                agenda profissional do estabelecimento, escolha uma data, um
                horário e o procedimento desejado.
              </p>
            )}
          </div>

          {/* CARD 2 */}
          <div className="ajuda-item">
            <div
              className="ajuda-item-header"
              onClick={() => setAbrirPergunta2(!abrirPergunta2)}
            >
              <h3 className="ajuda-item-titulo">
                Esqueci minha senha, como faço para recuperar?
              </h3>
              <span className="ajuda-seta">{abrirPergunta2 ? '▲' : '▼'}</span>
            </div>
            {abrirPergunta2 && (
              <p className="ajuda-item-texto">
                Clique em "Esqueci minha senha" na tela de conectar-se para
                redefinir sua senha.
              </p>
            )}
          </div>

          {/* CARD 3 */}
          <div className="ajuda-item">
            <div
              className="ajuda-item-header"
              onClick={() => setAbrirPergunta3(!abrirPergunta3)}
            >
              <h3 className="ajuda-item-titulo">
                Preciso fazer algum pagamento para agendar um serviço?
              </h3>
              <span className="ajuda-seta">{abrirPergunta3 ? '▲' : '▼'}</span>
            </div>
            {abrirPergunta3 && (
              <p className="ajuda-item-texto">
                Não, o pagamento é feito diretamente no estabelecimento no dia
                do serviço.
              </p>
            )}
          </div>

          {/* CARD 4 */}
          <div className="ajuda-item">
            <div
              className="ajuda-item-header"
              onClick={() => setAbrirPergunta4(!abrirPergunta4)}
            >
              <h3 className="ajuda-item-titulo">Falar com suporte</h3>
              <span className="ajuda-seta">{abrirPergunta4 ? '▲' : '▼'}</span>
            </div>
            {abrirPergunta4 && (
              <p className="ajuda-item-texto">
                Nossa equipe está pronta para te ajudar. WhatsApp: (81)
                94002-8922
              </p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Centraldeajuda;
