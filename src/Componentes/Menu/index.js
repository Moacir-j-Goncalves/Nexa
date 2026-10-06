import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import perfil from '../../Componentes/Imagens/icon-Perfil.svg';
import './Menu.css';

function Menu() {
  const navigate = useNavigate();
  const [aberto, setAberto] = useState(false);

  return (
    <div style={{ position: 'relative' }}>
      {/* Barra superior */}
      <div className="menu-barra">
        {/* Botão hamburguer */}
        <button
          onClick={() => setAberto(!aberto)}
          className="menu-hamburguer"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Ícone de Perfil na Navbar */}
        <div className="menu-perfil-container" onClick={() => navigate('/perfil')}>
          <img src={perfil} alt="Perfil" className="menu-perfil-icon" />
          
        </div>
      </div>

      {/* Menu lateral */}
      <div className={`menu-lateral ${aberto ? 'aberto' : ''}`}>
        <button className="menu-botao" onClick={() => { navigate('/'); setAberto(false); }}>Home</button>
        <button className="menu-botao" onClick={() => { navigate('/login'); setAberto(false); }}>Login</button>
        <button className="menu-botao" onClick={() => { navigate('/profissional'); setAberto(false); }}>Profissional</button>
        <button className="menu-botao" onClick={() => { navigate('/area-do-cliente'); setAberto(false); }}>Área do Cliente</button>
        <button className="menu-botao" onClick={() => { navigate('/agendamento'); setAberto(false); }}>Agendar Horário</button>
        <button className="menu-botao" onClick={() => { navigate('/sobre'); setAberto(false); }}>Sobre nós</button>
        <button className="menu-botao" onClick={() => { navigate('/assinatura'); setAberto(false); }}>Página do associado</button>
        <button className="menu-botao" onClick={() => { navigate('/central-de-ajuda'); setAberto(false); }}>
          Central de Ajuda
        </button>
      </div>
    </div>
  );
}

export default Menu;