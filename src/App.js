import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AreaDoCliente from './Paginas/AreaDoCliente';
import EditarPerfil from './Paginas/EditarPerfil';
import MeusAgendamentos from './Paginas/MeusAgendamentos';
import Home from './Paginas/Home';
import Agendamento from './Paginas/Agendamento';
import EsqueceuSenha from './Paginas/EsqueceuSenha';
import PrimeiroAcesso from './Paginas/PrimeiroAcesso';
import Login from './Paginas/Login';
import Buscar from './Paginas/Buscar';
import Perfil2 from './Componentes/Perfil/Perfil2';
import Profissional from './Paginas/Profissional/Profissional';
import MeusAtendimentos from './Paginas/MeusAtendimentos/atendimentos';
import HorarioDoProfissional from './Paginas/HorarioDoProfissional/HorarioDoProfissional';
import Sobre from './Paginas/Sobre';
import PerfilSalao from './Paginas/PerfilSalao';
import Centraldeajuda from './Paginas/CentralDeAjuda';
import Assinatura from './Paginas/Assinatura';
import Pagamento from './Paginas/Pagamentos';
import SobreNexa from "./Paginas/SobreNexa";

import { useParams } from 'react-router-dom';

function PerfilSalaoWrapper() {
  const { id } = useParams();
  return <PerfilSalao id={Number(id)} />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/area-do-cliente" element={<AreaDoCliente />} />
        <Route path="/editar-perfil" element={<EditarPerfil />} />
        <Route path="/meus-agendamentos" element={<MeusAgendamentos />} />
        <Route path="/" element={<Home />} />
        <Route path="/agendamento" element={<Agendamento />} />
        <Route path="/login" element={<Login />} />
        <Route path="/esqueceu-senha" element={<EsqueceuSenha />} />
        <Route path="/primeiro-acesso" element={<PrimeiroAcesso />} />
        <Route path="/buscar" element={<Buscar />} />
        <Route path="/perfil2" element={<Perfil2 />} />
        <Route path="/profissional" element={<Profissional />} />
        <Route path="/meus-atendimentos" element={<MeusAtendimentos />} />
        <Route path="/horario-do-profissional" element={<HorarioDoProfissional />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/perfil-salao/:id" element={<PerfilSalaoWrapper />} />
        <Route path="/central-de-ajuda" element={<Centraldeajuda />} />
        <Route path="/assinatura" element={<Assinatura />} />
        <Route path="/pagamento" element={<Pagamento />} />
        <Route path="/sobre-nexa" element={<SobreNexa />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
