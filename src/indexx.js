import { useState } from 'react'
import CardProfissional from '../../Componentes/CardProfissional/'
import CardVaga from '../../Componentes/CardVaga/'
import './Buscar.css'

const recomendacoes = [
  {
    id: 1,
    nome: 'Daniela Costa',
    cargo: 'Project Manager',
    cidade: 'São Paulo - SP',
    distancia: '3.2 km',
    iniciais: 'DC',
    cor: '#7B6E8A',
  },
  {
    id: 2,
    nome: 'Guilherme Mendes',
    cargo: 'Full Stack Developer',
    cidade: 'Rio de Janeiro - RJ',
    distancia: '5.4 km',
    iniciais: 'GM',
    cor: '#5C6E7B',
  },
  {
    id: 3,
    nome: 'Camila Oliveira',
    cargo: 'Accountant',
    cidade: 'Campinas - SP',
    distancia: '9.0 km',
    iniciais: 'CO',
    cor: '#6B7C5A',
  },
]

const vagas = [
  {
    id: 1,
    titulo: 'Data Analista',
    empresa: 'Empresa ABC',
    distancia: '2.1 km',
  },
]

export default function Buscar() {
  const [busca, setBusca] = useState('')

  const profissionaisFiltrados = recomendacoes.filter(
    (p) =>
      p.nome.toLowerCase().includes(busca.toLowerCase()) ||
      p.cargo.toLowerCase().includes(busca.toLowerCase())
  )

  const vagasFiltradas = vagas.filter(
    (v) =>
      v.titulo.toLowerCase().includes(busca.toLowerCase()) ||
      v.empresa.toLowerCase().includes(busca.toLowerCase())
  )

  return (
 
    <div className="buscar-page">
      <div className="buscar-search-bar">
        <span className="buscar-search-icon">🔍</span>
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
  )
}