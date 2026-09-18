import './EsqueceuSenha.css';

import { useNavigate } from 'react-router-dom';

import Menu from '../../Componentes/Menu';

import logo from '../../Componentes/Imagens/N_Icone.png';

import fundo from '../../Componentes/Imagens/nexa_fundo.jpg';

function EsqueceuSenha() {

  // Navegação entre páginas
  const navigate = useNavigate();

  return (

    <div
      className="esqueceu-container"
      style={{
        backgroundImage: `url(${fundo})`
      }}
    >

      {/* MENU */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 999,
        }}
      >
        <Menu />
      </div>

      {/* Caixa principal */}
      <div className="esqueceu-box">

        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="logo"
          onClick={() => navigate('/')}
        />

        {/* Título */}
        <h1 className="titulo">
          Recuperar Senha
        </h1>

        {/* Texto */}
        <p className="descricao">
          Informe seu e-mail para receber
          as instruções de recuperação.
        </p>

        {/* Campo email */}
        <div className="input-group">

          <label>E-MAIL</label>

          <input
            type="email"
            placeholder="Digite seu e-mail"
          />

        </div>

        {/* Botão */}
        <button className="btn-enviar">
          Enviar
        </button>

        {/* Voltar */}
        <p
          className="voltar"
          onClick={() => navigate('/login')}
        >
          Voltar para Login
        </p>

      </div>

    </div>
  );
}

export default EsqueceuSenha;