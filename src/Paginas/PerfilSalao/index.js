
import { useNavigate, useParams } from 'react-router-dom';
import Menu from '../../Componentes/Menu/index.js';
import fundo from '../../Componentes/Imagens/nexa_fundo.jpg';
import './PerfilSalao.css';

// Imagens dos perfis que você já possui
import studioBellaImg from '../../Componentes/Imagens/Studiobella.jpg';
import guilhermeMendesImg from '../../Componentes/Imagens/GuilhermeMendes.jpg';
import camilaoliveiraImg from '../../Componentes/Imagens/CamilaOliveira.jpg';
import lumusBeautySpaImg from '../../Componentes/Imagens/LumusBeautySpa.jpg';
import beautyCenterImg from '../../Componentes/Imagens/BeautyCenter.jpg';

// Avatar provisório NEXA: não precisa de arquivo de imagem.
const avatarPadrao =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f4e7e8'/%3E%3Ccircle cx='200' cy='145' r='68' fill='%238b5260'/%3E%3Cpath d='M75 370 Q75 235 200 235 Q325 235 325 370' fill='%238b5260'/%3E%3Ctext x='200' y='390' text-anchor='middle' font-family='Arial' font-size='22' font-weight='bold' fill='%233f1116'%3ENEXA%3C/text%3E%3C/svg%3E";

// Dados dos perfis
const saloes = {
  1: {
    id: 1,
    nome: 'Studio Bella',
    foto: studioBellaImg,
    descricao: 'Salão especializado em cortes modernos, coloração e tratamentos capilares.',
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
    descricao: 'Personal trainer com foco em treinamento físico, condicionamento e acompanhamento individual.',
    categoria: 'personal trainer',
    cidade: 'Recife - PE',
    distancia: '2.5 km',
    avaliacao: 4.8,
    totalAvaliacoes: 95,
    servicos: ['Musculação', 'Treino funcional', 'Emagrecimento', 'Treino online', 'Avaliação física'],
    avaliacoes: [
      { nome: 'Fernanda L.', nota: 5, comentario: 'Resultados incríveis!' },
      { nome: 'Bianca T.', nota: 4, comentario: 'Pontual e dedicado.' },
    ],
  },

  3: {
    id: 3,
    nome: 'Camila Oliveira',
    foto: camilaoliveiraImg,
    descricao: 'Profissional de beleza com serviços estéticos e cuidados personalizados.',
    categoria: 'profissional de beleza',
    cidade: 'Recife - PE',
    distancia: '3.8 km',
    avaliacao: 4.9,
    totalAvaliacoes: 87,
    servicos: ['Design de sobrancelhas', 'Maquiagem profissional', 'Tratamento facial', 'Consultoria de imagem'],
    avaliacoes: [
      { nome: 'Larissa M.', nota: 5, comentario: 'Muito atenciosa e talentosa!' },
      { nome: 'Patrícia R.', nota: 4, comentario: 'Adorei o atendimento.' },
      { nome: 'João P.', nota: 5, comentario: 'Profissional excelente.' },
    ],
  },

  4: {
    id: 4,
    nome: 'LUMOS BEAUTY SPA',
    foto: lumusBeautySpaImg,
    descricao: 'Espaço de beleza e bem-estar com terapias corporais e faciais.',
    categoria: 'estética',
    cidade: 'Recife - PE',
    distancia: '3.8 km',
    avaliacao: 5.0,
    totalAvaliacoes: 214,
    servicos: ['Spa', 'Tratamento facial', 'Tratamento capilar', 'Spa dos pés', 'Massagem relaxante'],
    avaliacoes: [
      { nome: 'Rodrigo A.', nota: 5, comentario: 'Perfeito em tudo!' },
      { nome: 'Talita S.', nota: 5, comentario: 'Sempre saio satisfeita.' },
      { nome: 'Jefferson', nota: 5, comentario: 'Excelente experiência.' },
    ],
  },

  5: {
    id: 5,
    nome: 'Beauty Center',
    foto: beautyCenterImg,
    descricao: 'Centro de beleza com serviços de cabelo, barba, unhas e cuidados pessoais.',
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

  6: {
    id: 6,
    nome: 'Barbearia Premium',
    foto: avatarPadrao,
    descricao: 'Barbearia especializada em cortes modernos, degradê e cuidados masculinos.',
    categoria: 'barbearia',
    cidade: 'Recife - PE',
    distancia: '2.4 km',
    avaliacao: 4.9,
    totalAvaliacoes: 186,
    servicos: ['Corte masculino', 'Corte degradê', 'Barba', 'Corte e barba', 'Sobrancelha masculina'],
    avaliacoes: [
      { nome: 'Roberto A.', nota: 5, comentario: 'Corte perfeito!' },
      { nome: 'Lucas M.', nota: 5, comentario: 'Ótimo atendimento.' },
      { nome: 'André S.', nota: 4.7, comentario: 'Gostei muito do resultado.' },
    ],
  },

  7: {
    id: 7,
    nome: 'Barber Club',
    foto: avatarPadrao,
    descricao: 'Espaço masculino dedicado a cortes modernos, barba e acabamento detalhado.',
    categoria: 'barbearia',
    cidade: 'Recife - PE',
    distancia: '4.1 km',
    avaliacao: 4.8,
    totalAvaliacoes: 143,
    servicos: ['Corte tradicional', 'Corte degradê', 'Barba completa', 'Desenho capilar', 'Corte e barba'],
    avaliacoes: [
      { nome: 'Felipe R.', nota: 5, comentario: 'Excelente acabamento.' },
      { nome: 'Bruno C.', nota: 4.8, comentario: 'Atendimento profissional.' },
      { nome: 'Daniel P.', nota: 4.7, comentario: 'Voltarei com certeza.' },
    ],
  },

  8: {
    id: 8,
    nome: 'Studio das Unhas',
    foto: avatarPadrao,
    descricao: 'Estúdio dedicado à beleza das mãos e dos pés, esmaltação e decoração de unhas.',
    categoria: 'manicure e pedicure',
    cidade: 'Recife - PE',
    distancia: '1.9 km',
    avaliacao: 4.9,
    totalAvaliacoes: 172,
    servicos: ['Manicure', 'Pedicure', 'Esmaltação em gel', 'Nail art', 'Alongamento de unhas'],
    avaliacoes: [
      { nome: 'Camila F.', nota: 5, comentario: 'Minhas unhas ficaram lindas!' },
      { nome: 'Juliana M.', nota: 5, comentario: 'Muito capricho e cuidado.' },
      { nome: 'Beatriz L.', nota: 4.8, comentario: 'Ótimo acabamento.' },
    ],
  },

  9: {
    id: 9,
    nome: 'Unhas Perfeitas',
    foto: avatarPadrao,
    descricao: 'Espaço de beleza especializado em manicure, pedicure e tendências de nail art.',
    categoria: 'manicure e pedicure',
    cidade: 'Recife - PE',
    distancia: '3.2 km',
    avaliacao: 4.8,
    totalAvaliacoes: 128,
    servicos: ['Manicure tradicional', 'Pedicure', 'Francesinha', 'Decoração de unhas', 'Blindagem'],
    avaliacoes: [
      { nome: 'Larissa P.', nota: 5, comentario: 'Adorei o resultado!' },
      { nome: 'Amanda R.', nota: 4.8, comentario: 'Muito atenciosa.' },
      { nome: 'Patrícia S.', nota: 4.7, comentario: 'Serviço bem feito.' },
    ],
  },

  10: {
    id: 10,
    nome: 'Nutri Saúde',
    foto: avatarPadrao,
    descricao: 'Atendimento nutricional voltado à educação alimentar e à construção de hábitos saudáveis.',
    categoria: 'nutricionista',
    cidade: 'Recife - PE',
    distancia: '2.7 km',
    avaliacao: 5.0,
    totalAvaliacoes: 96,
    servicos: ['Consulta nutricional', 'Avaliação nutricional', 'Planejamento alimentar', 'Acompanhamento nutricional'],
    avaliacoes: [
      { nome: 'Mariana L.', nota: 5, comentario: 'Explicações claras e atendimento acolhedor.' },
      { nome: 'Eduardo B.', nota: 5, comentario: 'Orientações práticas.' },
      { nome: 'Fernanda C.', nota: 5, comentario: 'Excelente experiência.' },
    ],
  },

  11: {
    id: 11,
    nome: 'Equilíbrio Nutricional',
    foto: avatarPadrao,
    descricao: 'Consultório de nutrição com acompanhamento individual e planejamento alimentar personalizado.',
    categoria: 'nutricionista',
    cidade: 'Recife - PE',
    distancia: '5.0 km',
    avaliacao: 4.9,
    totalAvaliacoes: 114,
    servicos: ['Consulta inicial', 'Retorno nutricional', 'Avaliação nutricional', 'Reeducação alimentar'],
    avaliacoes: [
      { nome: 'Sofia M.', nota: 5, comentario: 'Atendimento profissional.' },
      { nome: 'Rafael T.', nota: 4.8, comentario: 'Orientações práticas.' },
      { nome: 'Cláudia R.', nota: 5, comentario: 'Gostei do acompanhamento.' },
    ],
  },

  12: {
    id: 12,
    nome: 'Personal Fitness',
    foto: avatarPadrao,
    descricao: 'Treinamento físico personalizado para diferentes objetivos e níveis de condicionamento.',
    categoria: 'personal trainer',
    cidade: 'Recife - PE',
    distancia: '2.1 km',
    avaliacao: 4.9,
    totalAvaliacoes: 158,
    servicos: ['Treino personalizado', 'Avaliação física', 'Condicionamento físico', 'Treinamento funcional'],
    avaliacoes: [
      { nome: 'Pedro H.', nota: 5, comentario: 'Treinos bem planejados.' },
      { nome: 'Amanda V.', nota: 5, comentario: 'Acompanhamento excelente.' },
      { nome: 'Caio M.', nota: 4.8, comentario: 'Treinos personalizados.' },
    ],
  },

  13: {
    id: 13,
    nome: 'Performance Training',
    foto: avatarPadrao,
    descricao: 'Treinamento focado em condicionamento, fortalecimento e desenvolvimento físico.',
    categoria: 'personal trainer',
    cidade: 'Recife - PE',
    distancia: '4.6 km',
    avaliacao: 4.8,
    totalAvaliacoes: 121,
    servicos: ['Treinamento funcional', 'Treino de força', 'Avaliação física', 'Condicionamento físico'],
    avaliacoes: [
      { nome: 'Gustavo A.', nota: 5, comentario: 'Treinos dinâmicos.' },
      { nome: 'Renata C.', nota: 4.8, comentario: 'Profissional dedicado.' },
      { nome: 'Vinícius L.', nota: 4.7, comentario: 'Boa organização.' },
    ],
  },

  14: {
    id: 14,
    nome: 'Movimento Fisioterapia',
    foto: avatarPadrao,
    descricao: 'Atendimento fisioterapêutico individualizado voltado à mobilidade e à recuperação funcional.',
    categoria: 'fisioterapeuta',
    cidade: 'Recife - PE',
    distancia: '3.0 km',
    avaliacao: 5.0,
    totalAvaliacoes: 87,
    servicos: ['Avaliação fisioterapêutica', 'Fisioterapia ortopédica', 'Reabilitação funcional', 'Exercícios terapêuticos'],
    avaliacoes: [
      { nome: 'Marcelo D.', nota: 5, comentario: 'Atendimento cuidadoso.' },
      { nome: 'Isabela F.', nota: 5, comentario: 'Orientações claras.' },
      { nome: 'Renato P.', nota: 5, comentario: 'Ótima experiência.' },
    ],
  },

  15: {
    id: 15,
    nome: 'Reabilitar Saúde',
    foto: avatarPadrao,
    descricao: 'Atendimento fisioterapêutico com foco em mobilidade e recuperação funcional.',
    categoria: 'fisioterapeuta',
    cidade: 'Recife - PE',
    distancia: '4.3 km',
    avaliacao: 4.9,
    totalAvaliacoes: 103,
    servicos: ['Avaliação inicial', 'Fisioterapia motora', 'Reabilitação funcional', 'Orientação postural'],
    avaliacoes: [
      { nome: 'Débora M.', nota: 5, comentario: 'Muito atenciosos.' },
      { nome: 'Carlos E.', nota: 4.8, comentario: 'Atendimento organizado.' },
      { nome: 'Paula S.', nota: 5, comentario: 'Ótimo acompanhamento.' },
    ],
  },

  16: {
    id: 16,
    nome: 'Espaço Equilíbrio',
    foto: avatarPadrao,
    descricao: 'Espaço de atendimento psicológico com foco em escuta, acolhimento e acompanhamento individual.',
    categoria: 'psicólogo',
    cidade: 'Recife - PE',
    distancia: '2.8 km',
    avaliacao: 4.9,
    totalAvaliacoes: 91,
    servicos: ['Consulta psicológica', 'Psicoterapia individual', 'Acompanhamento psicológico', 'Atendimento on-line'],
    avaliacoes: [
      { nome: 'Mariana C.', nota: 5, comentario: 'Atendimento acolhedor.' },
      { nome: 'Felipe R.', nota: 5, comentario: 'Espaço de escuta importante.' },
      { nome: 'Ana P.', nota: 4.8, comentario: 'Experiência positiva.' },
    ],
  },

  17: {
    id: 17,
    nome: 'Cuidar da Mente',
    foto: avatarPadrao,
    descricao: 'Atendimento psicológico individual que respeita a história e as necessidades de cada pessoa.',
    categoria: 'psicólogo',
    cidade: 'Recife - PE',
    distancia: '4.0 km',
    avaliacao: 4.8,
    totalAvaliacoes: 76,
    servicos: ['Consulta psicológica', 'Psicoterapia individual', 'Acompanhamento psicológico', 'Atendimento on-line'],
    avaliacoes: [
      { nome: 'Juliana R.', nota: 5, comentario: 'Atendimento humanizado.' },
      { nome: 'Roberto M.', nota: 4.8, comentario: 'Ambiente acolhedor.' },
      { nome: 'Carolina F.', nota: 4.7, comentario: 'Fui tratada com respeito.' },
    ],
  },

  18: {
    id: 18,
    nome: 'Relax Terapias',
    foto: avatarPadrao,
    descricao: 'Espaço dedicado ao relaxamento e ao bem-estar, com diferentes opções de massagem.',
    categoria: 'massagista',
    cidade: 'Recife - PE',
    distancia: '2.5 km',
    avaliacao: 4.9,
    totalAvaliacoes: 134,
    servicos: ['Massagem relaxante', 'Massagem corporal', 'Massagem localizada', 'Sessão de relaxamento'],
    avaliacoes: [
      { nome: 'Patrícia M.', nota: 5, comentario: 'Ambiente tranquilo.' },
      { nome: 'André L.', nota: 5, comentario: 'Experiência relaxante.' },
      { nome: 'Bianca S.', nota: 4.8, comentario: 'Atendimento cuidadoso.' },
    ],
  },

  19: {
    id: 19,
    nome: 'Momento Relaxante',
    foto: avatarPadrao,
    descricao: 'Atendimento voltado ao relaxamento corporal e ao bem-estar em ambiente confortável.',
    categoria: 'massagista',
    cidade: 'Recife - PE',
    distancia: '3.7 km',
    avaliacao: 4.8,
    totalAvaliacoes: 108,
    servicos: ['Massagem relaxante', 'Massagem corporal', 'Massagem nas costas', 'Sessão de relaxamento'],
    avaliacoes: [
      { nome: 'Camila N.', nota: 5, comentario: 'Um momento agradável.' },
      { nome: 'Thiago V.', nota: 4.8, comentario: 'Atendimento tranquilo.' },
      { nome: 'Letícia A.', nota: 4.7, comentario: 'Gostei da experiência.' },
    ],
  },
};

function estrelas(nota) {
  return Array.from({ length: 5 }, (_, i) => (
    <span
      key={i}
      style={{
        color: i < Math.round(nota) ? '#c0392b' : '#ddd',
        fontSize: '16px',
      }}
    >
      ★
    </span>
  ));
}

export default function PerfilSalao() {
  const navigate = useNavigate();
  const { id } = useParams();
  const salao = saloes[id];

  if (!salao) {
    return (
      <div className="perfil-salao-container">
        <h1>Perfil não encontrado</h1>
        <button onClick={() => navigate('/buscar')}>
          Voltar para a busca
        </button>
      </div>
    );
  }

  const cardClass =
    salao.categoria === 'profissional de beleza'
      ? 'perfil-profissional-card'
      : 'perfil-salao-card';

  return (
    <div
      style={{
        backgroundImage: `url(${fundo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <Menu />

      <main className="perfil-salao-container">
        <div className={cardClass}>
          <img
            src={salao.foto || avatarPadrao}
            alt={`Imagem ilustrativa de ${salao.nome}`}
            className="perfil-salao-foto"
          />

          <h1 className="perfil-salao-nome">{salao.nome}</h1>

          <p className="perfil-salao-categoria">
            {salao.categoria} • {salao.cidade} • {salao.distancia}
          </p>

          <div className="perfil-salao-avaliacao-geral">
            {estrelas(salao.avaliacao)}
            <span className="perfil-salao-nota">{salao.avaliacao.toFixed(1)}</span>
            <span className="perfil-salao-total">
              ({salao.totalAvaliacoes} avaliações)
            </span>
          </div>

          <p className="perfil-salao-descricao">{salao.descricao}</p>

          <h2>Serviços</h2>

          <div className="perfil-salao-servicos">
            {salao.servicos.map((servico) => (
              <span key={servico} className="perfil-salao-servico-tag">
                {servico}
              </span>
            ))}
          </div>

          <h2>Avaliações</h2>

          <div className="perfil-salao-avaliacoes">
            {salao.avaliacoes.length > 0 ? (
              salao.avaliacoes.map((avaliacao, index) => (
                <div
                  key={`${salao.id}-${index}`}
                  className="perfil-salao-avaliacao-card"
                >
                  <div className="perfil-salao-avaliacao-header">
                    <span className="perfil-salao-avaliacao-nome">
                      {avaliacao.nome}
                    </span>
                    <span>{estrelas(avaliacao.nota)}</span>
                  </div>

                  <p className="perfil-salao-avaliacao-comentario">
                    {avaliacao.comentario}
                  </p>
                </div>
              ))
            ) : (
              <p>Este perfil ainda não possui avaliações.</p>
            )}
          </div>

          <button
            className="perfil-salao-btn"
            onClick={() => navigate(`/agendamento?profissional=${salao.id}`)}
          >
            AGENDAR AGORA
          </button>

          <p className="perfil-salao-aviso">
            Perfil demonstrativo. Informações e avaliações devem ser
            confirmadas antes da publicação.
          </p>
        </div>
      </main>
    </div>
  );
}
