// Importa hooks do React Router
import { useNavigate, useParams } from 'react-router-dom';

// Importa o menu principal
import Menu from '../../Componentes/Menu/index.js';

// Imagem de fundo
import fundo from '../../Componentes/Imagens/nexa_fundo.jpg';

// CSS
import './PerfilSalao.css';

// Imagens
import studioBellaImg from '../../Componentes/Imagens/Studiobella.jpg';
import guilhermeMendesImg from '../../Componentes/Imagens/GuilhermeMendes.jpg';
import camilaoliveiraImg from '../../Componentes/Imagens/CamilaOliveira.jpg';
import lumusBeautySpaImg from '../../Componentes/Imagens/LumusBeautySpa.jpg'; // ✅ nova imagem
import beautyCenterImg from '../../Componentes/Imagens/BeautyCenter.jpg';

// Dados dos perfis na ordem correta
const saloes = {
  1: {
    id: 1,
    nome: 'Studio Bella',
    foto: studioBellaImg,
    descricao: 'Salão especializado em cortes modernos, coloração e tratamentos capilares...',
    categoria: 'salão de beleza',
    cidade: 'Recife - PE',
    distancia: '1.2 km',
    avaliacao: 4.9,
    totalAvaliacoes: 128,
    servicos: ['Corte feminino', 'Coloração', 'Hidratação', 'Escova progressiva', 'Manicure', 'Pedicure'],
    avaliacoes: [
      { nome: 'Ana Paula', nota: 5, comentario: 'Atendimento incrível!' },
      { nome: 'Juliana M.', nota: 5, comentario: 'Melhor salão de Recife.' },
      { nome: 'Carla S.', nota: 4, comentario: 'Ambiente muito agradável.' },
    ],
  },
  2: {
    id: 2,
    nome: 'Guilherme Mendes',
    foto: guilhermeMendesImg,
    descricao: 'Personal trainer certificado, especialista em emagrecimento e hipertrofia...',
    categoria: 'academia',
    cidade: 'Recife - PE',
    distancia: '2.5 km',
    avaliacao: 4.8,
    totalAvaliacoes: 95,
    servicos: ['Musculação', 'Treino funcional', 'Emagrecimento', 'Treino online', 'Avaliação física'],
    avaliacoes: [
      { nome: 'Fernanda L.', nota: 5, comentario: 'Resultados incríveis em 3 meses.' },
      { nome: 'Bianca T.', nota: 4, comentario: 'Pontual e dedicado.' },
    ],
  },
  3: {
    id: 3,
    nome: 'Camila Oliveira',
    foto: camilaoliveiraImg,
    descricao: 'Profissional renomada em estética e beleza, referência em cuidados personalizados e atendimento exclusivo...',
    categoria: 'profissional de beleza',
    cidade: 'Recife - PE',
    distancia: '3.8 km',
    avaliacao: 4.9,
    totalAvaliacoes: 87,
    servicos: [
      'Design de sobrancelhas',
      'Maquiagem profissional',
      'Tratamento facial',
      'Consultoria de imagem',
      'Harmonização estética'
    ],
    avaliacoes: [
      { nome: 'Larissa M.', nota: 5, comentario: 'Camila é super atenciosa e talentosa!' },
      { nome: 'Patrícia R.', nota: 4, comentario: 'Adorei o atendimento, recomendo.' },
      { nome: 'João P.', nota: 5, comentario: 'Profissional excelente, muito dedicada.' },
    ],
  },
  4: {
    id: 4,
    nome: 'LUMOS BEAUTY SPA',
    foto: lumusBeautySpaImg, // ✅ imagem atualizada
    descricao: 'O Lumos Beauty Spa é mais do que um ambiente, é uma experiência relaxante e moderna, com terapias corporais e faciais para o seu bem-estar.',
    categoria: 'estética',
    cidade: 'Recife - PE',
    distancia: '3.8 km',
    avaliacao: 5.0,
    totalAvaliacoes: 214,
    servicos: ['Spa', 'Beleza', 'Tratamento Facial', 'Tratamento capilar', 'Spa dos pés', 'Relaxar'],
    avaliacoes: [
      { nome: 'Rodrigo A.', nota: 5, comentario: 'Perfeito em tudo!' },
      { nome: 'Talita S.', nota: 5, comentario: 'Sempre saio satisfeita.' },
      { nome: 'Jefferson', nota: 5, comentario: 'O melhor da cidade.' },
    ],
  },
  5: {
    id: 5,
    nome: 'Beauty Center',
    foto: beautyCenterImg,
    descricao: 'Centro de beleza completo com os melhores profissionais da região...',
    categoria: 'centro de beleza',
    cidade: 'Recife - PE',
    distancia: '3.8 km',
    avaliacao: 5.0,
    totalAvaliacoes: 214,
    servicos: ['Corte masculino', 'Barba', 'Coloração', 'Tratamento capilar', 'Spa dos pés', 'Nail art'],
    avaliacoes: [
      { nome: 'Roberto A.', nota: 5, comentario: 'Perfeito em tudo!' },
      { nome: 'Tatiane B.', nota: 5, comentario: 'Atendimento impecável.' },
      { nome: 'Marcos V.', nota: 5, comentario: 'O melhor da cidade.' },
    ],
  },
};

// Função estrelas
function estrelas(nota) {
  return Array.from({ length: 5 }, (_, i) => (
    <span key={i} style={{ color: i < Math.round(nota) ? '#c0392b' : '#ddd', fontSize: '16px' }}>★</span>
  ));
}

export default function PerfilSalao() {
  const navigate = useNavigate();
  const { id } = useParams();
  const salao = saloes[id];

  if (!salao) return <p>Salão não encontrado.</p>;

  const cardClass = salao.categoria.toLowerCase() === 'profissional de beleza'
    ? 'perfil-profissional-card'
    : 'perfil-salao-card';

  return (
    <div style={{ backgroundImage: `url(${fundo})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <Menu />
      <div className="perfil-salao-container">
        <div className={cardClass}>
          <img src={salao.foto} alt={salao.nome} className="perfil-salao-foto" />
          <h1 className="perfil-salao-nome">{salao.nome}</h1>
          <p className="perfil-salao-categoria">{salao.categoria} • {salao.cidade} • {salao.distancia}</p>
          <div className="perfil-salao-avaliacao-geral">
            {estrelas(salao.avaliacao)}
            <span className="perfil-salao-nota">{salao.avaliacao}</span>
            <span className="perfil-salao-total">({salao.totalAvaliacoes} avaliações)</span>
          </div>
          <p className="perfil-salao-descricao">{salao.descricao}</p>
          <h2>Serviços</h2>
          <div className="perfil-salao-servicos">
            {salao.servicos.map((s) => (
              <span key={s} className="perfil-salao-servico-tag">{s}</span>
            ))}
          </div>
          <h2>Avaliações</h2>
          <div className="perfil-salao-avaliacoes">
            {salao.avaliacoes.map((a, i) => (
              <div key={i} className="perfil-salao-avaliacao-card">
                <div className="perfil-salao-avaliacao-header">
                  <span className="perfil-salao-avaliacao-nome">{a.nome}</span>
                  <span>{estrelas(a.nota)}</span>
                </div>
                <p className="perfil-salao-avaliacao-comentario">{a.comentario}</p>
              </div>
            ))}
          </div>
          <button className="perfil-salao-btn" onClick={() => navigate('/agendamento')}>
            AGENDAR AGORA
          </button>
        </div>
      </div>
    </div>
  );
}
