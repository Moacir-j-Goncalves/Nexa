import { useState } from 'react';
import './Horarios.css';

function Horarios({ dataSelecionada }) {
  const agora = new Date();
  const hojeStr = agora.toDateString(); 
  const [horarioSelecionado, setHorarioSelecionado] = useState(null)

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

  const labelStatus = {
    disponivel: 'Disponível',
    poucas: 'Poucas vagas',
    indisponivel: 'Indisponível',
  };

  function getStatus(horario, statusOriginal) {
    if (!dataSelecionada) return statusOriginal;

    const ehHoje = dataSelecionada.toDateString() === hojeStr;
    if (!ehHoje) return statusOriginal;

    const [hora, minuto] = horario.split(':').map(Number);
    const horaHorario = new Date();
    horaHorario.setHours(hora, minuto, 0, 0);

    if (horaHorario <= agora) return 'indisponivel';
    return statusOriginal;
  }

  return (
    <div className="horarios-container">
      <p className="horarios-label">ESCOLHA O HORÁRIO</p>

      {dataSelecionada && (
        <p className="horarios-data">
          {dataSelecionada.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })}
        </p>
      )}

      <div className="horarios-grid">
        {horarios.map((h) => {
          const status = getStatus(h.hora, h.status);
          return (
            <div
  key={h.hora}
  className={"horario-card " + status}
  onClick={() => { if (status !== 'indisponivel') setHorarioSelecionado(h.hora); }}
  style={{ outline: horarioSelecionado === h.hora ? '2px solid #6b1a1a' : 'none' }}
>
              <p className="horario-hora">{h.hora}</p>
              <p className={"horario-status-" + status}>{labelStatus[status]}</p>
            </div>
          );
        })}
      </div>

      <div className="horarios-aviso">
        <span>ⓘ</span>
        <div>
  
          <p className="horarios-aviso-titulo">IMPORTANTE</p>
          <p className="horarios-aviso-texto">Horários disponíveis podem ser alterados a qualquer momento.</p>
        </div>
      </div>
                 {horarioSelecionado && (
  <p style={{ textAlign: 'center', color: '#6b1a1a', fontSize: '13px', marginTop: '12px' }}>
    Horário selecionado: {horarioSelecionado}
  </p>
)}

      <button className="horarios-btn" onClick={() => {
  if (!horarioSelecionado) {
    alert('Selecione um horário primeiro!');
    return;
  }
  if (window.confirm('Tem certeza que deseja confirmar o agendamento?')) {
    window.location.href = '/meus-agendamentos';
    
  }
}}>
        CONTINUAR COM O AGENDAMENTO
      </button>
    </div>
  );
}

export default Horarios;