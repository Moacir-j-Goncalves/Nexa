import Menu from '../../Componentes/Menu/index.js';
import Perfil from '../../Componentes/Perfil/index.js';
import fundo from '../../Componentes/Imagens/nexa_fundo.jpg'; 



function AreaDoCliente() {
  return (
    <div style={{ backgroundImage: "url(" + fundo + ")", backgroundSize: 'cover', minHeight: '100vh' }}>
      <Menu/>
      <Perfil/>
    </div>
  );
}

export default AreaDoCliente;