import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CardProfissional from '../../Componentes/CardProfissional/';
import CardVaga from '../../Componentes/CardVaga/';
import './Buscar.css';
import fundo from '../../Componentes/Imagens/nexa_fundo.jpg';
import Menu from '../../Componentes/Menu/index';


const recomendacoes = [
  { id: 1, nome: 'Studio Bella', cargo: 'Salão', cidade: 'Igarassu - PE', distancia: '3.2 km', iniciais: 'SB', cor: '#6B7C5A', categoria: 'saloes' },
  { id: 2, nome: 'Guilherme Mendes', cargo: 'Personal Trainer', cidade: 'Recife - PE', distancia: '5.4 km', iniciais: 'GM', cor: '#5C6E7B', categoria: 'academia' },
  { id: 3, nome: 'Camila Oliveira', cargo: 'Manicure', cidade: 'Abreu e Lima - PE', distancia: '9.0 km', iniciais: 'CO', cor: '#e5a4eb', categoria: 'manicure' },
  { id: 4, nome: 'LUMOS BEAUTY SPA', cargo: 'SPA', cidade: 'Recife - PE', distancia: '9.0 km', iniciais: 'Lumos', cor: '#6B7C5A', categoria: 'estetica' },
  { id: 5, nome: 'Beauty Center', cargo: 'Centro de Beleza', cidade: 'Recife - PE', distancia: '3.8 km', iniciais: 'BC', cor: '#a4cceb', categoria: 'centro' },

  { id: 6, nome: 'Barbearia Premium', cargo: 'Barbeiro', cidade: 'Abreu e Lima - PE', distancia: '2.5 km', iniciais: 'BP', cor: '#5C6E7B', categoria: 'barbearia' },
  { id: 7, nome: 'Barber Club', cargo: 'Barbearia', cidade: 'Recife - PE', distancia: '4.1 km', iniciais: 'BC', cor: '#6B7C5A', categoria: 'barbearia' },

  { id: 8, nome: 'Studio das Unhas', cargo: 'Manicure e Pedicure', cidade: 'Igarassu - PE', distancia: '3.7 km', iniciais: 'SU', cor: '#e5a4eb', categoria: 'manicure' },
  { id: 9, nome: 'Unhas Perfeitas', cargo: 'Manicure', cidade: 'Abreu e Lima - PE', distancia: '5.2 km', iniciais: 'UP', cor: '#d98ca3', categoria: 'manicure' },

  { id: 10, nome: 'Nutri Saúde', cargo: 'Nutricionista', cidade: 'Recife - PE', distancia: '6.0 km', iniciais: 'NS', cor: '#6B7C5A', categoria: 'nutricionista' },
  { id: 11, nome: 'Equilíbrio Nutricional', cargo: 'Nutricionista', cidade: 'Igarassu - PE', distancia: '4.8 km', iniciais: 'EN', cor: '#8BAA75', categoria: 'nutricionista' },

  { id: 12, nome: 'Personal Fitness', cargo: 'Personal Trainer', cidade: 'Abreu e Lima - PE', distancia: '3.5 km', iniciais: 'PF', cor: '#5C6E7B', categoria: 'academia' },
  { id: 13, nome: 'Performance Training', cargo: 'Treinamento Funcional', cidade: 'Recife - PE', distancia: '7.2 km', iniciais: 'PT', cor: '#647C8A', categoria: 'academia' },

  { id: 14, nome: 'Movimento Fisioterapia', cargo: 'Fisioterapeuta', cidade: 'Igarassu - PE', distancia: '4.2 km', iniciais: 'MF', cor: '#7B9C9A', categoria: 'fisioterapia' },
  { id: 15, nome: 'Reabilitar Saúde', cargo: 'Fisioterapeuta', cidade: 'Recife - PE', distancia: '8.1 km', iniciais: 'RS', cor: '#6B7C5A', categoria: 'fisioterapia' },

  { id: 16, nome: 'Espaço Equilíbrio', cargo: 'Psicólogo', cidade: 'Abreu e Lima - PE', distancia: '3.9 km', iniciais: 'EE', cor: '#9A8297', categoria: 'psicologia' },
  { id: 17, nome: 'Cuidar da Mente', cargo: 'Psicólogo', cidade: 'Recife - PE', distancia: '6.7 km', iniciais: 'CM', cor: '#8D7896', categoria: 'psicologia' },

  { id: 18, nome: 'Relax Terapias', cargo: 'Massagista', cidade: 'Igarassu - PE', distancia: '4.5 km', iniciais: 'RT', cor: '#B59A72', categoria: 'massagem' },
  { id: 19, nome: 'Momento Relaxante', cargo: 'Massagista', cidade: 'Abreu e Lima - PE', distancia: '5.6 km', iniciais: 'MR', cor: '#C2A58A', categoria: 'massagem' }
];

const vagas = [
  { id: 5, titulo: 'Beauty Center', empresa: 'Centro de Beleza ', distancia: '2.1 km', categoria: 'saloes' },
];

export default function Buscar() {
  const [busca, setBusca] = useState('');
  const [searchParams] = useSearchParams();
  const categoria = searchParams.get('categoria') || '';

  useEffect(() => {
    if (categoria) setBusca('');
  }, [categoria]);

  const profissionaisFiltrados = recomendacoes.filter((p) => {
    const matchCategoria = categoria ? p.categoria === categoria : true;
    const matchBusca = busca
      ? p.nome.toLowerCase().includes(busca.toLowerCase()) ||
        p.cargo.toLowerCase().includes(busca.toLowerCase())
      : true;
    return matchCategoria && matchBusca;
  });

  const vagasFiltradas = vagas.filter((v) => {
    const matchCategoria = categoria ? v.categoria === categoria : true;
    const matchBusca = busca
      ? v.titulo.toLowerCase().includes(busca.toLowerCase()) ||
        v.empresa.toLowerCase().includes(busca.toLowerCase())
      : true;
    return matchCategoria && matchBusca;
  });

  const tituloPagina = {
    saloes: 'Salões',
    manicure: 'Manicure',
    estetica: 'Estética',
    academia: 'Academia',
  }[categoria] || 'Buscar';

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Menu />
      <div className="buscar-page" style={{ backgroundImage: `url(${fundo})` }}>
        <div className="buscar-box">

          {categoria && (
            <h2 className="buscar-secao-titulo" style={{ marginBottom: '12px' }}>
              {tituloPagina}
            </h2>
          )}

          <div className="buscar-search-bar">
            <input
              type="text"
              placeholder="Pesquisar"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>

          {profissionaisFiltrados.length > 0 && (
            <section className="buscar-secao">
              <h2 className="buscar-secao-titulo">Recomendações</h2>
              {profissionaisFiltrados.map((prof) => (
                <CardProfissional key={prof.id} profissional={prof} />
              ))}
            </section>
          )}

          {vagasFiltradas.length > 0 && (
            <section className="buscar-secao">
              <h2 className="buscar-secao-titulo">Vagas disponíveis</h2>
              {vagasFiltradas.map((vaga) => (
                <CardVaga key={vaga.id} vaga={vaga} />
              ))}
            </section>
          )}

          {profissionaisFiltrados.length === 0 && vagasFiltradas.length === 0 && (
            <p className="buscar-sem-resultado">Nenhum resultado encontrado.</p>
          )}

        </div>
      </div>
    </div>
  );
}