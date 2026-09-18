import { useState } from 'react';
import Menu from '../../Componentes/Menu/index.js';
import fundo from '../../Componentes/Imagens/nexa_fundo.jpg';
import './MeusAgendamentos.css';


function MeusAgendamentos() {
  const [agendamentos, setAgendamentos] = useState([
    { id: 1, data: '23/05/2026 - 14:00', servico: 'Corte de cabelo', status: 'confirmado' },
    { id: 2, data: '30/05/2026 - 10:00', servico: 'Manicure', status: 'pendente' },
  ]);

  const [confirmarId, setConfirmarId] = useState(null);

  function handleCancelar(id) {
    setAgendamentos(agendamentos.filter(a => a.id !== id));
    setConfirmarId(null);
  }

  return (
    <div style={{ backgroundImage: "url(" + fundo + ")", backgroundSize: 'cover', minHeight: '100vh' }}>
        <Menu/>
      <div className="agendamentos-container">
        <div className="agendamentos-card">
            

          <p className="agendamentos-label">ÁREA DO CLIENTE</p>
          <h1 className="agendamentos-titulo">Meus Agendamentos</h1>

          <div className="agendamentos-divider">◆</div>

          {agendamentos.length === 0 && (
            <p style={{ color: '#9e6b6b', textAlign: 'center' }}>Nenhum agendamento encontrado.</p>
          )}

          {agendamentos.map(a => (
            <div className="agendamento-item" key={a.id}>
              <p className="agendamento-data">{a.data}</p>
              <p className="agendamento-servico">{a.servico}</p>
              <span className={"agendamento-status " + a.status}>
                {a.status === 'confirmado' ? 'Confirmado' : 'Pendente'}
              </span>

              {confirmarId === a.id ? (
                <div className="confirmar-cancelamento">
                  <p>Deseja cancelar este agendamento?</p>
                  <button className="btn-sim" onClick={() => handleCancelar(a.id)}>Sim, cancelar</button>
                  <button className="btn-nao" onClick={() => setConfirmarId(null)}>Não</button>
                </div>
              ) : (
                <button className="btn-cancelar" onClick={() => setConfirmarId(a.id)}>
                  Cancelar agendamento
                </button>
              )}
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default MeusAgendamentos;