// Importações necessárias
import { useState } from 'react'; // Hook do React para gerenciar estado
import Menu from '../Menu/index'; // Componente de menu
import fundo from '../Imagens/nexa_fundo.jpg'; // Imagem usada como fundo
import './Perfil2.css'; // Estilos específicos do componente

// Componente principal
function Perfil2() {
  // Estado inicial com os dados do perfil
  const [dados, setDados] = useState({
    nome: '',
    telefone: '',
    email: '',
    cep: '',
    rua: '',
    bairro: '',
    numero: '',
    complemento: '',
  });

  // Função para atualizar os campos do formulário
  function handleChange(e) {
    setDados({ ...dados, [e.target.name]: e.target.value });
  }

  // Função chamada ao clicar em "Salvar alterações"
  function handleSalvar() {
    alert('Dados salvos com sucesso!');
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
      <Menu />

      <div className="perfil-container">
        <div className="perfil-card">
          
          {/* Cabeçalho do perfil */}
          <div className="perfil-header">
            <div className="perfil-avatar">
              <span>P</span>
            </div>
            <div className="perfil-header-info">
              <p className="perfil-label">PERFIL DO PROFISSIONAL</p>
              <h1 className="perfil-nome">{dados.nome || 'Profissional'}</h1>
              <p className="perfil-sub">Gerencie informações do seu estabelecimento.</p>
            </div>
          </div>

          {/* Divisor visual */}
          <div className="perfil-divider">◆</div>

          {/* Formulário de edição */}
          <div className="perfil-form">
            <div className="perfil-campo">
              <label>Nome</label>
              <input 
                name="nome" 
                value={dados.nome} 
                onChange={handleChange} 
                placeholder="Nome do Estabelecimento" 
              />
            </div>

            <div className="perfil-campo">
              <label>Telefone</label>
              <input 
                name="telefone" 
                value={dados.telefone} 
                onChange={handleChange} 
                placeholder="(00) 00000-0000" 
              />
            </div>

            <div className="perfil-campo">
              <label>Email</label>
              <input 
                name="email" 
                value={dados.email} 
                onChange={handleChange} 
                placeholder="seu@email.com" 
              />
            </div>

            <div className="perfil-campo">
              <label>Endereço</label>
              <input name="cep" value={dados.cep} onChange={handleChange} placeholder="CEP" />
              <input name="rua" value={dados.rua} onChange={handleChange} placeholder="Rua" />
              <input name="numero" value={dados.numero} onChange={handleChange} placeholder="Número" />
              <input name="bairro" value={dados.bairro} onChange={handleChange} placeholder="Bairro" />
              <input name="complemento" value={dados.complemento} onChange={handleChange} placeholder="Complemento" />
            </div>

            {/* Divisor visual */}
            <div className="perfil-divider">◆</div>

            <div className="perfil-campo">
              <label>CNPJ <span className="nao-editavel">(não editável)</span></label>
              <input value="00.000.000/0000-00" disabled />
            </div>
          </div>

          {/* Botão de salvar */}
          <button className="perfil-btn" onClick={handleSalvar}>
            Salvar alterações
          </button>
        </div>
      </div>
    </div> 
  );
}

// Exporta o componente para uso em outras partes da aplicação
export default Perfil2;
