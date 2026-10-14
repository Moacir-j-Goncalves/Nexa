import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  House,
  LayoutGrid,
  Info,
  Headset,
} from 'lucide-react';

import perfil from '../../Componentes/Imagens/icon-Perfil.svg';
import Logo from '../Imagens/NEXA_nome.png';
import N from '../Imagens/N_Icone.png';
import './Menu.css';

function Menu() {
  const navigate = useNavigate();
  const location = useLocation();
  const [aberto, setAberto] = useState(false);

  const links = [
    { nome: 'Início', rota: '/', icone: House },
    { nome: 'Categorias', rota: '/buscar', icone: LayoutGrid },
    { nome: 'Sobre', rota: '/sobre', icone: Info },
    {
      nome: 'Contato',
      rota: '/central-de-ajuda',
      icone: Headset,
    },
  ];

  const navegar = (rota) => {
    navigate(rota);
    setAberto(false);
  };

  const linksLaterais = [
    { nome: 'Home', rota: '/' },
    { nome: 'Buscar serviços', rota: '/buscar' },
    { nome: 'Login', rota: '/login' },
    { nome: 'Profissional', rota: '/profissional' },
    { nome: 'Área do Cliente', rota: '/area-do-cliente' },
    { nome: 'Agendar Horário', rota: '/agendamento' },
    { nome: 'Sobre nós', rota: '/sobre' },
    { nome: 'Página do associado', rota: '/assinatura' },
    { nome: 'Central de Ajuda', rota: '/central-de-ajuda' },
  ];

  return (
    <header className="menu-container">
      <div className="menu-barra">
        {/* Botão hamburguer */}
        <button
          type="button"
          onClick={() => setAberto(!aberto)}
          className={`menu-hamburguer ${aberto ? 'ativo' : ''}`}
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={aberto}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Logo */}
        <button
          type="button"
          className="menu-logo"
          onClick={() => navegar('/')}
          aria-label="Ir para a página inicial"
        >
          <img src={Logo} alt="NEXA" />
        </button>

        {/* Navegação desktop com ícones */}
        <nav className="menu-navegacao" aria-label="Navegação principal">
          {links.map((link) => {
            const Icone = link.icone;
            const selecionado = location.pathname === link.rota;

            return (
              <button
                key={link.rota}
                type="button"
                className={`menu-link ${
                  selecionado ? 'selecionado' : ''
                }`}
                onClick={() => navegar(link.rota)}
                aria-current={selecionado ? 'page' : undefined}
              >
                <Icone size={18} strokeWidth={1.8} />
                <span>{link.nome}</span>
              </button>
            );
          })}
        </nav>

        {/* Perfil */}
        <button
          type="button"
          className="menu-perfil-container"
          onClick={() => navegar('/perfil')}
          aria-label="Acessar perfil"
        >
          <img
            src={perfil}
            alt=""
            className="menu-perfil-icon"
          />
        </button>
      </div>

      {/* Fundo escuro */}
      <div
        className={`menu-overlay ${aberto ? 'visivel' : ''}`}
        onClick={() => setAberto(false)}
        aria-hidden="true"
      />

      {/* Menu lateral */}
      <nav
        className={`menu-lateral ${aberto ? 'aberto' : ''}`}
        aria-label="Menu lateral"
        aria-hidden={!aberto}
      >
        <div className="menu-lateral-titulo">
          {/* A imagem do logo foi removida daqui */}

          <button
            type="button"
            className="menu-fechar"
            onClick={() => setAberto(false)}
            aria-label="Fechar menu"
          >
            ×
          </button>
        </div>

        {linksLaterais.map((link) => (
          <button
            key={link.rota}
            type="button"
            className="menu-botao"
            onClick={() => navegar(link.rota)}
            tabIndex={aberto ? 0 : -1}
          >
            <span>{link.nome}</span>
            <span aria-hidden="true">›</span>
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Menu;