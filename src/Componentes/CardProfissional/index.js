import { useNavigate } from 'react-router-dom';
import './CardProfissional.css';

export default function CardProfissional({ profissional }) {
  const { id, nome, cargo, cidade, distancia, iniciais, cor } = profissional;
  const navigate = useNavigate();

  return (
    <div className="card-profissional">
      <div className="card-profissional-avatar" style={{ backgroundColor: cor }}>
        {iniciais}
      </div>

      <div className="card-profissional-info">
        <span className="card-profissional-nome">{nome}</span>
        <span className="card-profissional-cargo">{cargo}</span>
        <span className="card-profissional-local">
          {cidade} <strong>• {distancia}</strong>
        </span>
      </div>

      <button className="card-profissional-btn" onClick={() => navigate('/perfil-salao/' + id)}>
        Ver perfil
      </button>
    </div>
  );
}