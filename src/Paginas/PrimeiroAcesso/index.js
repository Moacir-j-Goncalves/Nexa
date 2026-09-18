import './PrimeiroAcesso.css';
import { useNavigate } from 'react-router-dom';
import Menu from '../../Componentes/Menu';
import logo from '../../Componentes/Imagens/N_Icone.png';
import fundo from '../../Componentes/Imagens/nexa_fundo.jpg';
import { useState } from 'react';

function PrimeiroAcesso() {
  const navigate = useNavigate();
  const [tipoCadastro, setTipoCadastro] = useState('');

  function handleCriarConta() {
    localStorage.setItem('nexaUsuario', 'logado');
    navigate('/agendamento');
  }

  return (
    <div
      className="primeiro-container"
      style={{ backgroundImage: `url(${fundo})` }}
    >
      <div className="menu-topo">
        <Menu />
      </div>

      <div className="primeiro-box">
        <img
          src={logo}
          alt="Logo"
          className="logo"
          onClick={() => navigate('/')}
        />

        <h1 className="titulo">Primeiro Acesso</h1>
        <p className="descricao">Escolha o tipo de cadastro</p>

        <div className="tipo-cadastro">
          <button
            className={tipoCadastro === 'cpf' ? 'tipo-btn ativo' : 'tipo-btn'}
            onClick={() => setTipoCadastro('cpf')}
            disabled={tipoCadastro === 'cnpj'}
          >
            Usuário (CPF)
          </button>

          <button
            className={tipoCadastro === 'cnpj' ? 'tipo-btn ativo' : 'tipo-btn'}
            onClick={() => setTipoCadastro('cnpj')}
            disabled={tipoCadastro === 'cpf'}
          >
            Profissional (CNPJ)
          </button>
        </div>

        {tipoCadastro === 'cpf' && (
          <div className="input-group">
            <label>CPF</label>
            <input type="text" placeholder="Digite seu CPF" />
          </div>
        )}

        {tipoCadastro === 'cnpj' && (
          <>
            <div className="input-group">
              <label>CNPJ</label>
              <input type="text" placeholder="Digite seu CNPJ" />
            </div>
            <div className="input-group">
              <label>Nome do estabelecimento</label>
              <input type="text" placeholder="Nome do estabelecimento" />
            </div>
          </>
        )}

        {tipoCadastro && (
          <>
            <div className="input-group">
              <label>E-mail</label>
              <input type="email" placeholder="Digite seu e-mail" />
            </div>

            <div className="input-group">
              <label>Data de Nascimento</label>
              <input type="Date" placeholder="Digite sua data de Nascimento" />
            </div>

            <div className="input-group">
              <label>Nova Senha</label>
              <input type="password" placeholder="Crie sua senha" />
            </div>

            <div className="input-group">
              <label>Confirmar Senha</label>
              <input type="password" placeholder="Confirme sua senha" />
            </div>

            <button className="btn-criar" onClick={handleCriarConta}>
              Criar Conta
            </button>
          </>
        )}

        <p className="voltar" onClick={() => navigate('/login')}>
          Voltar para Login
        </p>
      </div>
    </div>
  );
}

export default PrimeiroAcesso;