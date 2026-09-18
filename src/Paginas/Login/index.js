import './Login.css';
import { useNavigate } from 'react-router-dom';
import Menu from '../../Componentes/Menu/index.js';
import logo from '../../Componentes/Imagens/N_Icone.png';
import fundo from '../../Componentes/Imagens/nexa_fundo.jpg';

function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    localStorage.setItem('nexaUsuario', 'logado');
    navigate('/agendamento');
  }

  return (
    <div className="login-container" style={{ backgroundImage: `url(${fundo})` }}>

      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 999 }}>
        <Menu />
      </div>

      <div className="login-box">

        <img src={logo} alt="Logo" className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />

        <div className="input-group">
          <label style={{ fontSize: '16px' }}>USUÁRIO</label>
          <input type="text" placeholder="Digite seu usuário" />
        </div>

        <div className="input-group">
          <label style={{ fontSize: '16px' }}>SENHA</label>
          <input type="password" placeholder="Digite sua senha" />
        </div>

        <button className="btn-login" onClick={handleLogin}>
          Entrar
        </button>

        <p className="esqueceu" onClick={() => navigate('/esqueceu-senha')}>
          Esqueceu a senha?
        </p>

        <hr />

        <p className="primeiro-acesso" onClick={() => navigate('/primeiro-acesso')}>
          Primeiro acesso?
        </p>

      </div>
    </div>
  );
}

export default Login;