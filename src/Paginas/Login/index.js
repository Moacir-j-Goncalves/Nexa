import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../Componentes/Imagens/N_Icone.png';
import fundo from '../../Componentes/Imagens/nexa_fundo.jpg'; // Ajusta o caminho do fundo se necessário
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setErro('');

    // Validação das credenciais solicitadas
    //===================================== email e senha nexa===========================================
    if (email === 'nexatest@gmail.com' && senha === 'nexa@123') { 
      navigate('/'); // Sucesso: redireciona para a Home    
    
    } else {
      setErro('E-mail ou senha incorretos.'); // Erro: exibe mensagem
    }
  }
//=======================================================================================================
  return (
    <div 
      className="login-container" 
      style={{ backgroundImage: `url(${fundo})` }}
    >
      <div className="login-box">
        {/* Logo */}
        <img 
          src={logo} 
          alt="NEXA" 
          className="logo" 
          onClick={() => navigate('/')} 
        />

        {/* Mensagem de Erro Condicional */}
        {erro && <div className="mensagem-erro">{erro}</div>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="Digite o seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              placeholder="Digite a sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn-login">
            Entrar
          </button>
        </form>

        <div className="esqueceu">
          Esqueceu a senha?
        </div>

        <div className="primeiro-acesso" onClick={() => navigate('/cadastro')}>
          Primeiro acesso? Cadastre-se
        </div>
      </div>
    </div>
  );
}

export default Login;