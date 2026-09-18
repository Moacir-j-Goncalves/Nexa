import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Menu from '../../Componentes/Menu/index.js';
import fundo from '../../Componentes/Imagens/nexa_fundo.jpg';
import Calendario from '../../Componentes/Calendario/index.js';
import Horarios from '../../Componentes/Horarios/index.js';

function Agendamento() {
  const [dataSelecionada, setDataSelecionada] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    const logado = localStorage.getItem('nexaUsuario');
    if (!logado) {
      navigate('/primeiro-acesso');
    }
  }, [navigate]);

  return (
    <div style={{ backgroundImage: "url(" + fundo + ")", backgroundSize: 'cover', minHeight: '100vh' }}>
      <Menu />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 16px',
        width: '100%',
      }}>
        <h1 style={{ color: '#fdf6f0', fontFamily: 'serif', fontSize: '28px', marginBottom: '24px' }}>
          Agendar Serviço
        </h1>
        <div style={{
          backgroundColor: '#fdf6f0',
          borderRadius: '24px',
          padding: '24px',
          width: '90%',
          maxWidth: '480px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        }}>
          <Calendario onDataChange={setDataSelecionada} />
          <Horarios dataSelecionada={dataSelecionada} />
        </div>
      </div>
    </div>
  );
}

export default Agendamento;