
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
  // Barbearias aparece antes de Salões de beleza
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
    {
      nome: 'Massagista',
      filtro: 'massagista',
      imagem: null,
    },
     {
      nome: 'Adicionar',
      filtro: '',
      imagem: null,
    },
  ];

  // Profissionais mais avaliados
  const profissionais = [
    {
      nome: 'Studio Bella',
      avaliacao: '4.9',
      imagem: studioBellaImg,
      rota: '/perfil-salao/1',
    },
    {
      nome: 'Espaço Glamour',
      avaliacao: '4.8',
      imagem: espacoGlamourImg,
      rota: '/perfil-salao/2',
    },
    {
      nome: 'Beauty Center',
      avaliacao: '5.0',
      imagem: beautyCenterImg,
      rota: '/perfil-salao/3',
    },
  ];

  // Direciona para a busca da categoria selecionada
  function irParaCategoria(categoria) {
    navigate(
      `/buscar?categoria=${encodeURIComponent(categoria)}`
    );
  }

  // Navegação do carrossel
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
        left: chegouAoFim
          ? 0
          : carousel.scrollLeft + distancia,
        behavior: 'smooth',
      });
    } else {
      const chegouAoInicio = carousel.scrollLeft <= 5;

      carousel.scrollTo({
        left: chegouAoInicio
          ? carousel.scrollWidth
          : carousel.scrollLeft - distancia,
        behavior: 'smooth',
      });
    }
  }

  return (
    <div
      className="home"
      style={{ backgroundImage: `url(${fundo})` }}
    >
      {/* Menu principal */}
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

          {/* Campo de busca */}
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

            <button type="submit">
              Buscar
            </button>
          </form>
        </section>

        {/* Categorias com imagens */}
        <section className="categorias">
          <div className="secao-titulo">
            <div>
              <h2>Categorias</h2>
              <p>
                Encontre o serviço ideal para você.
              </p>
            </div>

            <button
              className="ver-todos"
              onClick={() => navigate('/buscar')}
              type="button"
            >
              Ver todas <span aria-hidden="true">→</span>
            </button>
          </div>

          {/* Carrossel de categorias */}
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
                  onClick={() =>
                    irParaCategoria(categoria.filtro)
                  }
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

                  <span className="categoria-nome">
                    {categoria.nome}
                  </span>

                  <span
                    className="categoria-seta"
                    aria-hidden="true"
                  >
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
              <p>
                Conheça alguns dos profissionais em destaque.
              </p>
            </div>
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
                  if (
                    e.key === 'Enter' ||
                    e.key === ' '
                  ) {
                    e.preventDefault();
                    navigate(profissional.rota);
                  }
                }}
              >
                <img
                  src={profissional.imagem}
                  alt={profissional.nome}
                  className="card-img"
                />

                <div className="professional-info">
                  <h3>{profissional.nome}</h3>

                  <p className="avaliacao">
                    <span aria-hidden="true">★</span>{' '}
                    {profissional.avaliacao}
                  </p>

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
