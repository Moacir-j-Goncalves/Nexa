
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import CardProfissional from '../../Componentes/CardProfissional/';
import CardVaga from '../../Componentes/CardVaga/';
import Menu from '../../Componentes/Menu/index';

import fundo from '../../Componentes/Imagens/nexa_fundo.jpg';
import './Buscar.css';

// Profissionais recomendados
const recomendacoes = [
  {
    id: 1,
    nome: 'Studio Bella',
    cargo: 'Salão',
    cidade: 'Igarassu - PE',
    distancia: '3.2 km',
    iniciais: 'SB',
    cor: '#6B7C5A',
    categoria: 'saloes',
  },
  {
    id: 2,
    nome: 'Guilherme Mendes',
    cargo: 'Personal Trainer',
    cidade: 'Recife - PE',
    distancia: '5.4 km',
    iniciais: 'GM',
    cor: '#5C6E7B',
    categoria: 'personal',
  },
  {
    id: 3,
    nome: 'Camila Oliveira',
    cargo: 'Manicure',
    cidade: 'Abreu e Lima - PE',
    distancia: '9.0 km',
    iniciais: 'CO',
    cor: '#e5a4eb',
    categoria: 'manicure',
  },
  {
    id: 4,
    nome: 'LUMOS BEAUTY SPA',
    cargo: 'SPA',
    cidade: 'Recife - PE',
    distancia: '9.0 km',
    iniciais: 'Lumos',
    cor: '#6B7C5A',
    categoria: 'saloes',
  },
  {
    id: 5,
    nome: 'Beauty Center',
    cargo: 'Centro de Beleza',
    cidade: 'Recife - PE',
    distancia: '3.8 km',
    iniciais: 'BC',
    cor: '#a4cceb',
    categoria: 'saloes',
  },
  {
    id: 6,
    nome: 'Barbearia Premium',
    cargo: 'Barbeiro',
    cidade: 'Abreu e Lima - PE',
    distancia: '2.5 km',
    iniciais: 'BP',
    cor: '#5C6E7B',
    categoria: 'barbearia',
  },
  {
    id: 7,
    nome: 'Barber Club',
    cargo: 'Barbearia',
    cidade: 'Recife - PE',
    distancia: '4.1 km',
    iniciais: 'BC',
    cor: '#6B7C5A',
    categoria: 'barbearia',
  },
  {
    id: 8,
    nome: 'Studio das Unhas',
    cargo: 'Manicure e Pedicure',
    cidade: 'Igarassu - PE',
    distancia: '3.7 km',
    iniciais: 'SU',
    cor: '#e5a4eb',
    categoria: 'manicure',
  },
  {
    id: 9,
    nome: 'Unhas Perfeitas',
    cargo: 'Manicure',
    cidade: 'Abreu e Lima - PE',
    distancia: '5.2 km',
    iniciais: 'UP',
    cor: '#d98ca3',
    categoria: 'manicure',
  },
  {
    id: 10,
    nome: 'Nutri Saúde',
    cargo: 'Nutricionista',
    cidade: 'Recife - PE',
    distancia: '6.0 km',
    iniciais: 'NS',
    cor: '#6B7C5A',
    categoria: 'nutricionista',
  },
  {
    id: 11,
    nome: 'Equilíbrio Nutricional',
    cargo: 'Nutricionista',
    cidade: 'Igarassu - PE',
    distancia: '4.8 km',
    iniciais: 'EN',
    cor: '#8BAA75',
    categoria: 'nutricionista',
  },
  {
    id: 12,
    nome: 'Personal Fitness',
    cargo: 'Personal Trainer',
    cidade: 'Abreu e Lima - PE',
    distancia: '3.5 km',
    iniciais: 'PF',
    cor: '#5C6E7B',
    categoria: 'personal',
  },
  {
    id: 13,
    nome: 'Performance Training',
    cargo: 'Treinamento Funcional',
    cidade: 'Recife - PE',
    distancia: '7.2 km',
    iniciais: 'PT',
    cor: '#647C8A',
    categoria: 'personal',
  },
  {
    id: 14,
    nome: 'Movimento Fisioterapia',
    cargo: 'Fisioterapeuta',
    cidade: 'Igarassu - PE',
    distancia: '4.2 km',
    iniciais: 'MF',
    cor: '#7B9C9A',
    categoria: 'fisioterapeuta',
  },
  {
    id: 15,
    nome: 'Reabilitar Saúde',
    cargo: 'Fisioterapeuta',
    cidade: 'Recife - PE',
    distancia: '8.1 km',
    iniciais: 'RS',
    cor: '#6B7C5A',
    categoria: 'fisioterapeuta',
  },
  {
    id: 16,
    nome: 'Espaço Equilíbrio',
    cargo: 'Psicólogo',
    cidade: 'Abreu e Lima - PE',
    distancia: '3.9 km',
    iniciais: 'EE',
    cor: '#9A8297',
    categoria: 'psicologo',
  },
  {
    id: 17,
    nome: 'Cuidar da Mente',
    cargo: 'Psicólogo',
    cidade: 'Recife - PE',
    distancia: '6.7 km',
    iniciais: 'CM',
    cor: '#8D7896',
    categoria: 'psicologo',
  },
  {
    id: 18,
    nome: 'Relax Terapias',
    cargo: 'Massagista',
    cidade: 'Igarassu - PE',
    distancia: '4.5 km',
    iniciais: 'RT',
    cor: '#B59A72',
    categoria: 'massagista',
  },
  {
    id: 19,
    nome: 'Momento Relaxante',
    cargo: 'Massagista',
    cidade: 'Abreu e Lima - PE',
    distancia: '5.6 km',
    iniciais: 'MR',
    cor: '#C2A58A',
    categoria: 'massagista',
  },
];

const vagas = [
  {
    id: 5,
    titulo: 'Beauty Center',
    empresa: 'Centro de Beleza',
    distancia: '2.1 km',
    categoria: 'saloes',
  },
];

// Títulos das categorias
const titulosCategorias = {
  barbearia: 'Barbearias',
  saloes: 'Salões de beleza',
  manicure: 'Manicure e Pedicure',
  nutricionista: 'Nutricionistas',
  personal: 'Personal Trainers',
  fisioterapeuta: 'Fisioterapeutas',
  psicologo: 'Psicólogos',
  massagista: 'Massagistas',
};

export default function Buscar() {
  const [searchParams] = useSearchParams();

  const categoria = (
    searchParams.get('categoria') || ''
  ).trim().toLowerCase();

  const termoInicial = searchParams.get('termo') || '';

  const [busca, setBusca] = useState(termoInicial);

  // Atualiza a busca ao navegar entre categorias ou termos
  useEffect(() => {
    setBusca(termoInicial);
  }, [termoInicial, categoria]);

  // Normaliza texto para facilitar a comparação
  function normalizar(texto = '') {
    return String(texto)
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim();
  }

  const termoNormalizado = normalizar(busca);

  // Filtra profissionais por categoria e pesquisa
  const profissionaisFiltrados = recomendacoes.filter((prof) => {
    const matchCategoria =
      !categoria || prof.categoria === categoria;

    const textoProfissional = normalizar(
      `${prof.nome} ${prof.cargo} ${prof.cidade} ${prof.categoria}`
    );

    const matchBusca =
      !termoNormalizado ||
      textoProfissional.includes(termoNormalizado);

    return matchCategoria && matchBusca;
  });

  // Filtra vagas por categoria e pesquisa
  const vagasFiltradas = vagas.filter((vaga) => {
    const matchCategoria =
      !categoria || vaga.categoria === categoria;

    const textoVaga = normalizar(
      `${vaga.titulo} ${vaga.empresa} ${vaga.categoria}`
    );

    const matchBusca =
      !termoNormalizado ||
      textoVaga.includes(termoNormalizado);

    return matchCategoria && matchBusca;
  });

  const tituloPagina =
    titulosCategorias[categoria] || 'Buscar';

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Menu />

      <div
        className="buscar-page"
        style={{ backgroundImage: `url(${fundo})` }}
      >
        <div className="buscar-box">
          {categoria && (
            <h2
              className="buscar-secao-titulo"
              style={{ marginBottom: '12px' }}
            >
              {tituloPagina}
            </h2>
          )}

          <div className="buscar-search-bar">
            <input
              type="search"
              placeholder="Pesquisar profissional ou serviço..."
              aria-label="Pesquisar profissional ou serviço"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>

          {profissionaisFiltrados.length > 0 && (
            <section className="buscar-secao">
              <h2 className="buscar-secao-titulo">
                Recomendações
              </h2>

              {profissionaisFiltrados.map((prof) => (
                <CardProfissional
                  key={prof.id}
                  profissional={prof}
                />
              ))}
            </section>
          )}

          {vagasFiltradas.length > 0 && (
            <section className="buscar-secao">
              <h2 className="buscar-secao-titulo">
                Vagas disponíveis
              </h2>

              {vagasFiltradas.map((vaga) => (
                <CardVaga
                  key={vaga.id}
                  vaga={vaga}
                />
              ))}
            </section>
          )}

          {profissionaisFiltrados.length === 0 &&
            vagasFiltradas.length === 0 && (
              <p className="buscar-sem-resultado">
                Nenhum resultado encontrado.
              </p>
            )}
        </div>
      </div>
    </div>
  );
}
