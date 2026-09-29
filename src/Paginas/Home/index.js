import { useNavigate } from 'react-router-dom';
import Menu from "../../Componentes/Menu";
import fundo from "../../Componentes/Imagens/nexa_fundo.jpg";
import Botao from '../../Componentes/Botao';

import "./Home.css";
import studioBellaImg from '../../Componentes/Imagens/Studiobella.jpg';
import espacoGlamourImg from '../../Componentes/Imagens/EspacoGlamour.jpg';
import beautyCenterImg from '../../Componentes/Imagens/BeautyCenter.jpg';



function Home() {
  const navigate = useNavigate();

  function irParaCategoria(categoria) {
    navigate('/buscar?categoria=' + categoria);
  }

  function scrollCarousel(direction) {
  const carousel = document.getElementById("carousel");
  const scrollAmount = 250; // pixels por clique

  if (direction === 1) {
    // Indo para a direita
    if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
      // Se chegou no fim, volta para o início
      carousel.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  } else {
    // Indo para a esquerda
    if (carousel.scrollLeft === 0) {
      // Se está no início, vai para o fim
      carousel.scrollTo({ left: carousel.scrollWidth, behavior: "smooth" });
    } else {
      carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  }
}
  <><section className="home__hero">
    <h1 className="home__hero-titulo">
      Divulgue sua agenda.<br />
      <span>Receba mais clientes.</span>
    </h1>
    <p className="home__hero-texto">
      Publique seus dias e horários disponíveis e deixe seus clientes agendarem direto pelo seu link.
    </p>
    <Botao destino="/assinatura" />
  </section><footer className="home__footer">
      <div className="home__logo">NEX<span>A</span></div>
      <p>© 2026 Nexa. Todos os direitos reservados.</p>
    </footer></>
  


  return (
    <div className="home" style={{ backgroundImage: `url(${fundo})` }}>
      <Menu />
      <main className="home-content">

        <section className="hero">
          <h1>NEXA</h1>
          <p>Conectando clientes aos melhores profissionais da sua região.</p>
          <div className="search-box">
            <input type="text" placeholder="Buscar serviço..." />
            <button>Buscar</button>
          </div>
        </section>

          <section className="categorias">
          <h2>Categorias</h2>
          <div className="carousel-container">
            <button className="carousel-btn left" onClick={() => scrollCarousel(-1)}>◀</button>
            <div className="carousel" id="carousel">
              <div className="card" onClick={() => irParaCategoria('saloes')}>Salões de beleza</div>
              <div className="card" onClick={() => irParaCategoria('manicure')}> Manicure e Pedicure</div>
              <div className="card" onClick={() => irParaCategoria('estetica')}> Nutricionaista</div>
              <div className="card" onClick={() => irParaCategoria('personal')}> Personal trainer</div>
              <div className="card" onClick={() => irParaCategoria('fisioterapeuta')}> Fisioterapeuta</div>
              <div className="card" onClick={() => irParaCategoria('psicologo')}> Psicólogo</div>
              <div className="card" onClick={() => irParaCategoria('massagista')}> Massagista</div>
              <div className="card" onClick={() => irParaCategoria('adicionar')}> adicionar</div>
              <div className="card" onClick={() => irParaCategoria('adicionar')}> adicionar</div>
              <div className="card" onClick={() => irParaCategoria('adicionar')}> adicionar</div>
              <div className="card" onClick={() => irParaCategoria('adicionar')}> adicionar</div>

            </div>
            <button className="carousel-btn right" onClick={() => scrollCarousel(1)}>▶</button>
          </div>
        </section>

        <section className="Cards">
          <h2>Mais avaliados</h2>
          <div className="Card-grid">

          <div className="professional-card" onClick={() => navigate('/perfil-salao/1')}>
  <img src={studioBellaImg} alt="Studio Bella" className="card-img" />
  <h3>Studio Bella</h3>
  <p>⭐ 4.9</p>
  <button onClick={(e) => { e.stopPropagation(); navigate('/perfil-salao/1'); }}>Ver Perfil</button>
</div>

<div className="professional-card" onClick={() => navigate('/perfil-salao/2')}>
  <img src={espacoGlamourImg} alt="Espaço Glamour" className="card-img" />
  <h3>Espaço Glamour</h3>
  <p>⭐ 4.8</p>
  <button onClick={(e) => { e.stopPropagation(); navigate('/perfil-salao/2'); }}>Ver Perfil</button>
</div>

<div className="professional-card" onClick={() => navigate('/perfil-salao/3')}>
  <img src={beautyCenterImg} alt="Beauty Center" className="card-img" />
  <h3>Beauty Center</h3>
  
  <p>⭐ 5.0</p>
  <button onClick={(e) => { e.stopPropagation(); navigate('/perfil-salao/3'); }}>Ver Perfil</button>
</div>
  </div>
        </section>

      </main>
    </div>
  );
}

export default Home;