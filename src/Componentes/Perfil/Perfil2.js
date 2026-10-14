
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../Menu/index';
import fundo from '../Imagens/nexa_fundo.jpg';
import './Perfil2.css';

function Perfil2() {
  const navigate = useNavigate();

  const [dados, setDados] = useState({
    nome: '',
    telefone: '',
    email: '',
    especialidade: '',
    cep: '',
    rua: '',
    bairro: '',
    numero: '',
    complemento: '',
  });

  // Atualiza os campos do formulário
  function handleChange(e) {
    const { name, value } = e.target;

    setDados((dadosAnteriores) => ({
      ...dadosAnteriores,
      [name]: value,
    }));
  }

  // Salva os dados preenchidos
  function handleSalvar(e) {
    e.preventDefault();

    console.log('Dados do profissional:', dados);
    alert('Dados salvos com sucesso!');
  }

  return (
    <div
      className="perfil2-page"
      style={{
        backgroundImage: `url(${fundo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}
    >
      <Menu />

      <div className="perfil-container">
        <div className="perfil-card">

          {/* Cabeçalho do perfil */}
          <div className="perfil-header">
            <div className="perfil-avatar">
              <span>P</span>
            </div>

            <div className="perfil-header-info">
              <p className="perfil-label">
                PERFIL DO PROFISSIONAL
              </p>

              <h1 className="perfil-nome">
                {dados.nome || 'Profissional'}
              </h1>

              <p className="perfil-sub">
                Gerencie as informações do seu estabelecimento.
              </p>
            </div>
          </div>

          <div className="perfil-divider">◆</div>

          <form className="perfil-form" onSubmit={handleSalvar}>

            {/* Nome */}
            <div className="perfil-campo">
              <label htmlFor="nome">Nome do estabelecimento</label>

              <input
                id="nome"
                type="text"
                name="nome"
                value={dados.nome}
                onChange={handleChange}
                placeholder="Nome do estabelecimento"
                required
              />
            </div>

            {/* Especialidade */}
            <div className="perfil-campo">
              <label htmlFor="especialidade">
                Especialidade
              </label>

              <select
                id="especialidade"
                name="especialidade"
                value={dados.especialidade}
                onChange={handleChange}
                required
              >
                <option value="">
                  Selecione sua especialidade
                </option>

                <option value="Manicure">Manicure</option>
                <option value="Barbearia"> Barbearia</option>
                <option value="Massoterapia">Massoterapia</option>
                <option value="Psicologia">Psicologia</option>
                <option value="Fisioterapia">Fisioterapia</option>
                <option value="Personal Trainer">Personal Trainer</option>
                <option value="Nutrição">Nutrição</option>
                <option value="Outra">Outra</option>
              </select>
            </div>

            {/* Telefone */}
            <div className="perfil-campo">
              <label htmlFor="telefone">Telefone</label>

              <input
                id="telefone"
                type="tel"
                name="telefone"
                value={dados.telefone}
                onChange={handleChange}
                placeholder="(00) 00000-0000"
                required
              />
            </div>

            {/* E-mail */}
            <div className="perfil-campo">
              <label htmlFor="email">E-mail</label>

              <input
                id="email"
                type="email"
                name="email"
                value={dados.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                required
              />
            </div>

            {/* Endereço */}
            <div className="perfil-campo perfil-endereco">
              <label>Endereço</label>

              <input
                type="text"
                name="cep"
                value={dados.cep}
                onChange={handleChange}
                placeholder="CEP"
              />

              <input
                type="text"
                name="rua"
                value={dados.rua}
                onChange={handleChange}
                placeholder="Rua"
              />

              <div className="perfil-endereco-linha">
                <input
                  type="text"
                  name="numero"
                  value={dados.numero}
                  onChange={handleChange}
                  placeholder="Número"
                />

                <input
                  type="text"
                  name="bairro"
                  value={dados.bairro}
                  onChange={handleChange}
                  placeholder="Bairro"
                />
              </div>

              <input
                type="text"
                name="complemento"
                value={dados.complemento}
                onChange={handleChange}
                placeholder="Complemento"
              />
            </div>

            <div className="perfil-divider">◆</div>

            {/* CNPJ */}
            <div className="perfil-campo">
              <label htmlFor="cnpj">
                CNPJ <span className="nao-editavel">(não editável)</span>
              </label>

              <input
                id="cnpj"
                type="text"
                value="00.000.000/0000-00"
                disabled
              />
            </div>

            {/* Salvar */}
            <button type="submit" className="perfil-btn">
              Salvar alterações
            </button>
          </form>

          {/* Voltar para a escolha de perfil */}
          <button
            type="button"
            className="perfil2-btn-voltar"
            onClick={() => navigate('/')}
          >
            ← Voltar
          </button>

        </div>
      </div>
    </div>
  );
}

export default Perfil2;
