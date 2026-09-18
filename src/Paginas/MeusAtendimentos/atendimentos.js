// Importações necessárias
import { useState } from 'react'; // Hook do React para gerenciar estado
import Menu from '../../Componentes/Menu/index.js'; // Componente de menu
import fundo from '../../Componentes/Imagens/nexa_fundo.jpg'; // Imagem usada como fundo
import './atendimentos.css'; // Estilos específicos para este componente

// Componente principal
function Atendimentos() {
  // Estado inicial com alguns agendamentos de exemplo
  const [agendamentos, setAgendamentos] = useState([
    { id: 1, data: '23/05/2026 - 14:00', servico: 'Corte de cabelo', status: 'confirmado' },
    { id: 2, data: '30/05/2026 - 10:00', servico: 'Manicure', status: 'pendente' },
  ]);

  // Estado para controlar qual agendamento está em processo de confirmação de cancelamento
  const [confirmarId, setConfirmarId] = useState(null);

  // Função para cancelar um agendamento
  function handleCancelar(id) {
    // Remove o agendamento da lista
    setAgendamentos(agendamentos.filter(a => a.id !== id));
    // Reseta o estado de confirmação
    setConfirmarId(null);
  }

  // Estrutura visual do componente
  return (
    <div 
      style={{ 
        backgroundImage: "url(" + fundo + ")", 
        backgroundSize: 'cover', 
        minHeight: '100vh' 
      }}
    >
      {/* Menu de navegação */}
      <Menu/>

      <div className="agendamentos-container">
        <div className="agendamentos-card">
          
          {/* Cabeçalho da área */}
          <p className="agendamentos-label">ÁREA DO PROFISSIONAL</p>
          <h1 className="agendamentos-titulo">Meus Atendimentos</h1>

          {/* Divisor visual */}
          <div className="agendamentos-divider">◆</div>

          {/* Mensagem caso não haja agendamentos */}
          {agendamentos.length === 0 && (
            <p style={{ color: '#9e6b6b', textAlign: 'center' }}>
              Nenhum agendamento encontrado.
            </p>
          )}

          {/* Lista de agendamentos */}
          {agendamentos.map(a => (
            <div className="agendamento-item" key={a.id}>
              {/* Informações do agendamento */}
              <p className="agendamento-data">{a.data}</p>
              <p className="agendamento-servico">{a.servico}</p>

              {/* Badge de status */}
              <span className={"agendamento-status " + a.status}>
                {a.status === 'confirmado' ? 'Confirmado' : 'Pendente'}
              </span>

              {/* Confirmação de cancelamento */}
              {confirmarId === a.id ? (
                <div className="confirmar-cancelamento">
                  <p>Deseja cancelar este atendimento?</p>
                  <button 
                    className="btn-sim" 
                    onClick={() => handleCancelar(a.id)}
                  >
                    Sim, cancelar
                  </button>
                  <button 
                    className="btn-nao" 
                    onClick={() => setConfirmarId(null)}
                  >
                    Não
                  </button>
                </div>
              ) : (
                // Botão para iniciar processo de cancelamento
                <button 
                  className="btn-cancelar" 
                  onClick={() => setConfirmarId(a.id)}
                >
                  Cancelar atendimento
                </button>
              )}
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

// Exporta o componente para uso em outras partes da aplicação
export default Atendimentos;
