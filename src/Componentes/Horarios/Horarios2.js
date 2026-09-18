// Importa o useState para guardar o horário clicado pelo usuário
import { useState } from 'react';

// Importa o arquivo de estilos do componente
import './Horarios2.css';

// dataSelecionada é uma prop recebida da página pai (HorarioDoProfissional.js)
// O componente agora se chama "Horarios2" (antes era só "Horarios")
function Horarios2({ dataSelecionada }) {

  // Captura o momento atual (hora e minuto de agora)
  const agora = new Date();

  // Converte hoje para string para comparar com a data selecionada
  const hojeStr = agora.toDateString();

  // Guarda o horário que o usuário clicou
  // null significa que nenhum horário foi selecionado ainda
  const [horarioSelecionado, setHorarioSelecionado] = useState(null);

  // Lista fixa de horários com seus status padrão
  const horarios = [
    { hora: '08:00', status: 'disponivel' },
    { hora: '09:00', status: 'disponivel' },
    { hora: '10:00', status: 'poucas' },
    { hora: '11:00', status: 'indisponivel' },
    { hora: '14:00', status: 'disponivel' },
    { hora: '15:00', status: 'disponivel' },
    { hora: '16:00', status: 'poucas' },
    { hora: '17:00', status: 'disponivel' },
  ];

  // Objeto que traduz o status interno para texto legível na tela
  const labelStatus = {
    disponivel: 'Disponível',
    poucas: 'Poucas vagas',
    indisponivel: 'Indisponível',
  };

  // Função que calcula o status real de cada horário
  // Se a data selecionada for hoje, horários que já passaram viram "indisponivel"
  function getStatus(horario, statusOriginal) {

    // Se não há data selecionada, retorna o status original sem alteração
    if (!dataSelecionada) return statusOriginal;

    // Verifica se a data selecionada é hoje comparando as strings
    const ehHoje = dataSelecionada.toDateString() === hojeStr;

    // Se não for hoje, retorna o status original sem alteração
    if (!ehHoje) return statusOriginal;

    // Separa a string "08:00" em hora=8 e minuto=0
    const [hora, minuto] = horario.split(':').map(Number);

    // Cria um objeto Date com o horário do card para comparar com agora
    const horaHorario = new Date();
    horaHorario.setHours(hora, minuto, 0, 0);

    // Se o horário já passou, retorna indisponivel
    if (horaHorario <= agora) return 'indisponivel';

    // Caso contrário, mantém o status original
    return statusOriginal;
  }

  return (
    <div className="horarios-container">

      {/* Label acima da grade de horários */}
      <p className="horarios-label">ESCOLHA O HORÁRIO</p>

      {/* Mostra a data selecionada por extenso se houver uma data */}
      {dataSelecionada && (
        <p className="horarios-data">
          {/* Formata a data em português: ex: "segunda-feira, 3 de junho" */}
          {dataSelecionada.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })}
        </p>
      )}

      {/* Grade que exibe todos os cards de horário */}
      <div className="horarios-grid">
        {horarios.map((h) => {

          // Calcula o status real do horário (pode mudar se for hoje)
          const status = getStatus(h.hora, h.status);

          return (
            <div
              key={h.hora}
              // Aplica a classe do status: "horario-card disponivel", "horario-card poucas" etc
              className={"horario-card " + status}
              // Só permite selecionar se não for indisponivel
              onClick={() => { if (status !== 'indisponivel') setHorarioSelecionado(h.hora); }}
              // Destaca com borda escura o horário selecionado
              style={{ outline: horarioSelecionado === h.hora ? '2px solid #6b1a1a' : 'none' }}
            >
              {/* Mostra a hora do card */}
              <p className="horario-hora">{h.hora}</p>

              {/* Mostra o texto do status com a classe de cor correspondente */}
              <p className={"horario-status-" + status}>{labelStatus[status]}</p>
            </div>
          );
        })}
      </div>

      {/* Aviso informativo abaixo da grade */}
      <div className="horarios-aviso">
        <span>ⓘ</span>
        <div>
          <p className="horarios-aviso-titulo">IMPORTANTE</p>
          <p className="horarios-aviso-texto">Horários disponíveis podem ser alterados a qualquer momento.</p>
        </div>
      </div>

      {/* Mostra o horário selecionado em texto abaixo da grade */}
      {horarioSelecionado && (
        <p style={{ textAlign: 'center', color: '#6b1a1a', fontSize: '13px', marginTop: '12px' }}>
          Horário selecionado: {horarioSelecionado}
        </p>
      )}

      {/* Botão de continuar: valida se há horário selecionado antes de prosseguir */}
      <button className="horarios-btn" onClick={() => {

        // Se nenhum horário foi selecionado, alerta o usuário
        if (!horarioSelecionado) {
          alert('Selecione um horário primeiro!');
          return;
        }

        // Pede confirmação antes de finalizar
        // Se confirmar, redireciona para a página de agendamentos
        if (window.confirm('Tem certeza que deseja confirmar o agendamento?')) {
          window.location.href = '/meus-agendamentos';
        }
      }}>
        CONTINUAR COM O ATENDIMENTO
      </button>

    </div>
  );
}

// Exporta o componente com o nome Horarios2
// para ser usado em HorarioDoProfissional.js
export default Horarios2;