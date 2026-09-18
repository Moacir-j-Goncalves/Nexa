// Importa o useState para controlar o modo de edição e o texto
import { useState } from 'react';

// Importa o componente Menu (barra de navegação)
import Menu from '../../Componentes/Menu/index.js';

// Importa a imagem de fundo
import fundo from '../../Componentes/Imagens/nexa_fundo.jpg';

// Importa o arquivo de estilos da página
import './sobre.css';

function Sobre() {

  // Controla se a página está no modo edição ou visualização
  // false = visualizando | true = editando
  const [editando, setEditando] = useState(false);

  // Guarda o texto oficial que aparece na tela
  const [texto, setTexto] = useState(
    'Esse estabelecimento está em funcionamento desde o ano X e tem como principal objetivo satisfazer os clientes e fazer nosso trabalho do melhor jeito possível.'
  );

  // Guarda o texto temporário enquanto o usuário está editando
  // Se cancelar, esse texto é descartado e o "texto" original é mantido
  const [textoTemp, setTextoTemp] = useState(texto);

  // Função chamada ao clicar em "Salvar"
  // Atualiza o texto oficial com o texto temporário e sai do modo edição
  function handleSalvar() {
    setTexto(textoTemp);
    setEditando(false);
  }

  // Função chamada ao clicar em "Cancelar"
  // Descarta as alterações voltando o textoTemp para o texto original
  function handleCancelar() {
    setTextoTemp(texto);
    setEditando(false);
  }

  return (

    // Div principal com imagem de fundo ocupando a tela toda
    <div style={{ backgroundImage: "url(" + fundo + ")", backgroundSize: 'cover', minHeight: '100vh' }}>

      {/* Renderiza a barra de menu no topo */}
      <Menu />

      {/* Container que centraliza o card na tela */}
      <div className="sobre-container">
        <div className="sobre-card">

          {/* Label e título da página */}
          <p className="sobre-label">ÁREA DO PROFISSIONAL</p>
          <h1 className="sobre-titulo">Sobre Nós</h1>

          {/* Divisor decorativo */}
          <div className="sobre-divider">◆</div>

          {/* Área do texto: mostra textarea se estiver editando, ou parágrafo se não estiver */}
          <div className="sobre-texto">
            {editando ? (
              // Modo edição: textarea onde o usuário digita
              // onChange atualiza o textoTemp a cada letra digitada
              <textarea
                className="sobre-textarea"
                value={textoTemp}
                onChange={(e) => setTextoTemp(e.target.value)}
                rows={6}
              />
            ) : (
              // Modo visualização: mostra o texto salvo em parágrafo
              <p>{texto}</p>
            )}
          </div>

          {/* Área dos botões: muda conforme o modo */}
          <div className="sobre-botoes">
            {editando ? (
              // Modo edição: mostra botões Salvar e Cancelar
              <>
                <button className="sobre-btn-salvar" onClick={handleSalvar}>Salvar</button>
                <button className="sobre-btn-cancelar" onClick={handleCancelar}>Cancelar</button>
              </>
            ) : (
              // Modo visualização: mostra apenas o botão Editar
              <button className="sobre-btn-editar" onClick={() => setEditando(true)}>Editar</button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

// Exporta o componente para ser usado no App.js
export default Sobre;