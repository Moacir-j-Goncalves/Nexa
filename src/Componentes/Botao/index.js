import { useNavigate } from 'react-router-dom';
import './Botao.css';


function Botao({ texto, destino }) {
  const navigate = useNavigate();

  return (
    <button className="botao" onClick={() => navigate(destino)}>
    </button>
  );
}

export default Botao;