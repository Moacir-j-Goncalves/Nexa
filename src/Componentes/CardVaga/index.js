import './CardVaga.css'

export default function CardVaga({ vaga }) {
  const { titulo, empresa, distancia } = vaga

  return (
    <div className="card-vaga">
      <div className="card-vaga-icone">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      </div>

      <div className="card-vaga-info">
        <span className="card-vaga-titulo">{titulo}</span>
        <span className="card-vaga-empresa">{empresa}</span>
        <span className="card-vaga-dist">
          <strong>• {distancia}</strong>
        </span>
      </div>

      <button className="card-vaga-btn">Ver vaga</button>
    </div>
  )
}