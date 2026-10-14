import React from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../../Componentes/Menu';

import fundo from '../../Componentes/Imagens/nexa_fundo.jpg';
import logoImg from '../../Componentes/Imagens/NEXA_nome.png';

// Imagens das categorias
import barbeariaImg from '../../Componentes/Imagens/Cards/Barbearia_nexa.png';
import saloesImg from '../../Componentes/Imagens/Cards/Salões_nexa.png';
import manicureImg from '../../Componentes/Imagens/Cards/Manicure_nexa.png';
import nutricionistaImg from '../../Componentes/Imagens/Cards/Nutricionista_nexa.png';
import personalImg from '../../Componentes/Imagens/Cards/Personal_nexa.png';
import fisioterapeutaImg from '../../Componentes/Imagens/Cards/Fisioterapeuta_nexa.png';
import psicologoImg from '../../Componentes/Imagens/Cards/Psicologo_nexa.png';

// Imagens dos profissionais
import studioBellaImg from '../../Componentes/Imagens/Studiobella.jpg';
import espacoGlamourImg from '../../Componentes/Imagens/EspacoGlamour.jpg';
import beautyCenterImg from '../../Componentes/Imagens/BeautyCenter.jpg';

import './Home.css';

function Home() {
  const navigate = useNavigate();

  // Categorias exibidas no carrossel
  const categorias = [
    {
      nome: 'Barbearias',
      filtro: 'barbearia',
      imagem: barbeariaImg,
    },
    {
      nome: 'Salões de beleza',
      filtro: 'saloes',
      imagem: saloesImg,
    },
    {
      nome: 'Manicure e Pedicure',
      filtro: 'manicure',
      imagem: manicureImg,
    },
    {
      nome: 'Nutricionista',
      filtro: 'nutricionista',
      imagem: nutricionistaImg,
    },
    {
      nome: 'Personal trainer',
      filtro: 'personal',
      imagem: personalImg,
    },
    {
      nome: 'Fisioterapeuta',
      filtro: 'fisioterapeuta',
      imagem: fisioterapeutaImg,
    },
    {
      nome: 'Psicólogo',
      filtro: 'psicologo',
      imagem: psicologoImg,
    },
  ];

  // Profissionais mais avaliados
  const profissionais = [
    {
      nome: 'Studio Bella',
      categoria: 'Salão de beleza',
      localizacao: 'Recife, PE',
      avaliacao: '4.9',
      imagem: studioBellaImg,
      rota: '/perfil-salao/1',
    },
    {
      nome: 'Espaço Glamour',
      categoria: 'Manicure e Pedicure',
      localizacao: 'Olinda, PE',
      avaliacao: '4.8',
      imagem: espacoGlamourImg,
      rota: '/perfil-salao/2',
    },
    {
      nome: 'Beauty Center',
      categoria: 'Estética & Beleza',
      localizacao: 'Paulista, PE',
      avaliacao: '4.9',
      imagem: beautyCenterImg,
      rota: '/perfil-salao/3',
    },
  ];

  function irParaCategoria(categoria) {
    navigate(`/buscar?categoria=${encodeURIComponent(categoria)}`);
  }

  function scrollCarousel(direction) {
    const carousel = document.getElementById('carousel');

    if (!carousel) return;

    const primeiroCard = carousel.querySelector('.card');

    const distancia = primeiroCard
      ? primeiroCard.getBoundingClientRect().width + 18
      : 250;

    if (direction === 1) {
      const chegouAoFim =
        carousel.scrollLeft + carousel.clientWidth >=
        carousel.scrollWidth - 5;

      carousel.scrollTo({
        left: chegouAoFim ? 0 : carousel.scrollLeft + distancia,
        behavior: 'smooth',
      });
    } else {
      const chegouAoInicio = carousel.scrollLeft <= 5;

      carousel.scrollTo({
        left: chegouAoInicio ? carousel.scrollWidth : carousel.scrollLeft - distancia,
        behavior: 'smooth',
      });
    }
  }

  return (
    <div
      className="home"
      style={{ backgroundImage: `url(${fundo})` }}
    >
      <Menu />

      <main className="home-content">
        {/* Banner principal */}
        <section className="hero">
          <h1 className="Logo">
            <img src={logoImg} alt="NEXA" />
          </h1>

          <p>
            Conectando clientes aos melhores profissionais da sua região.
          </p>

          <form
            className="search-box"
            onSubmit={(e) => {
              e.preventDefault();
              const campo = e.currentTarget.elements.busca;
              const termo = campo.value.trim();

              navigate(
                termo
                  ? `/buscar?termo=${encodeURIComponent(termo)}`
                  : '/buscar'
              );
            }}
          >
            <input
              type="search"
              name="busca"
              placeholder="Buscar serviço..."
              aria-label="Buscar serviço"
            />

            <button type="submit">Buscar</button>
          </form>
        </section>

        {/* Categorias */}
        <section className="categorias">
          <div className="secao-titulo">
            <div>
              <h2>Categorias</h2>
              <p>Encontre o serviço ideal para você.</p>
            </div>

            <button
              className="ver-todos"
              onClick={() => navigate('/buscar')}
              type="button"
            >
              Ver todas <span aria-hidden="true">→</span>
            </button>
          </div>

          <div className="carousel-container">
            <button
              className="carousel-btn left"
              onClick={() => scrollCarousel(-1)}
              aria-label="Categorias anteriores"
              type="button"
            >
              ‹
            </button>

            <div className="carousel" id="carousel">
              {categorias.map((categoria) => (
                <button
                  key={categoria.filtro}
                  className="card"
                  onClick={() => irParaCategoria(categoria.filtro)}
                  type="button"
                >
                  {categoria.imagem ? (
                    <img
                      src={categoria.imagem}
                      alt=""
                      className="categoria-img"
                    />
                  ) : (
                    <div className="categoria-sem-imagem">
                      <span aria-hidden="true">✦</span>
                    </div>
                  )}

                  <span className="categoria-nome">{categoria.nome}</span>

                  <span className="categoria-seta" aria-hidden="true">
                    →
                  </span>
                </button>
              ))}
            </div>

            <button
              className="carousel-btn right"
              onClick={() => scrollCarousel(1)}
              aria-label="Próximas categorias"
              type="button"
            >
              ›
            </button>
          </div>
        </section>

        {/* Profissionais mais avaliados */}
        <section className="Cards">
          <div className="secao-titulo">
            <div>
              <h2>Mais avaliados</h2>
              <p>Os profissionais mais bem avaliados da nossa plataforma.</p>
            </div>

            <button
              className="ver-todos"
              onClick={() => navigate('/buscar')}
              type="button"
            >
              Ver todos os destaques <span aria-hidden="true">→</span>
            </button>
          </div>

          <div className="Card-grid">
            {profissionais.map((profissional) => (
              <article
                className="professional-card"
                key={profissional.nome}
                onClick={() => navigate(profissional.rota)}
                tabIndex={0}
                role="link"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    navigate(profissional.rota);
                  }
                }}
              >
                {/* Imagem com Badge */}
                <div className="card-img-container">
                  <img
                    src={profissional.imagem}
                    alt={profissional.nome}
                    className="card-img"
                  />
                  <span className="card-badge-nota">
                    <span aria-hidden="true" className="star-icon">★</span>
                    {profissional.avaliacao}
                  </span>
                </div>

                {/* Informações detalhadas */}
                <div className="professional-info">
                  <span className="card-categoria">{profissional.categoria}</span>
                  <h3>{profissional.nome}</h3>

                  {profissional.localizacao && (
                    <p className="card-localizacao">
                      📍 {profissional.localizacao}
                    </p>
                  )}

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(profissional.rota);
                    }}
                  >
                    Ver perfil
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;