// Importa o useState para guardar a data selecionada no calendário
import { useState } from 'react';

// Importa o componente Menu (barra de navegação)
import Menu from '../../Componentes/Menu/index.js';

// Importa a imagem de fundo
import fundo from '../../Componentes/Imagens/nexa_fundo.jpg';

// Importa o componente de calendário
// Note que o nome do arquivo agora começa com letra maiúscula: Calendario2.js
import Calendario from '../../Componentes/Calendario/Calendario2.js';

// Importa o componente de horários
// Aqui o nome do componente importado é "Horarios2", mas o arquivo real chama-se index.js
// dentro da pasta Horarios — isso é uma convenção comum em React
import Horarios2 from '../../Componentes/Horarios/index.js';

// Importa o arquivo de estilos da página
import './HorarioDoProfissional.css';

// O nome do componente foi alterado de "Horarios" para "HorarioDoProfissional"
// provavelmente para deixar mais claro qual página é essa dentro do projeto
function HorarioDoProfissional() {

  // Cria o estado que guarda a data clicada no calendário
  // Começa com a data de hoje (new Date())
  // Const pode ser considerado uma "váriavel"
  const [dataSelecionada, setDataSelecionada] = useState(new Date());

  return (

    // Div principal com imagem de fundo ocupando a tela toda
    <div style={{ backgroundImage: "url(" + fundo + ")", backgroundSize: 'cover', minHeight: '100vh' }}>

      {/* Renderiza a barra de menu no topo */}
      <Menu />

      {/* Container que centraliza o card na tela */}
      <div className="horarios-page-container">
        <div className="horarios-page-card">

          {/* Label e título da página */}
          <p className="horarios-page-label">ÁREA DO PROFISSIONAL</p>
          <h1 className="horarios-page-titulo">Horários de Atendimentos</h1>

          {/* Divisor decorativo */}
          <div className="horarios-page-divider">◆</div>

          {/* Componente do calendário
              onDataChange é a prop que recebe a função setDataSelecionada
              toda vez que o usuário clica numa data no calendário,
              o estado dataSelecionada é atualizado */}
          <Calendario onDataChange={setDataSelecionada} />

          {/* Componente de horários
              dataSelecionada é a prop que passa a data escolhida no calendário
              o Horarios2 usa essa data para calcular quais horários já passaram */}
          <Horarios2 dataSelecionada={dataSelecionada} />

        </div>
      </div>
    </div>
  );
}

// Exporta o componente com o novo nome HorarioDoProfissional
// para ser usado no App.js
export default HorarioDoProfissional;