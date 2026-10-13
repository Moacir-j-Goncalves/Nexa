
import { useState } from 'react';
import fundo from '../Imagens/nexa_fundo.jpg';
import './Perfil.css';
import Menu from '../Menu/index';

function Perfil() {
  const [dados, setDados] = useState({
    nome: '',
    telefone: '',
    email: '',
  });

  function handleChange(e) {
    setDados({
      ...dados,
      [e.target.name]: e.target.value,
    });
  }

  function handleSalvar() {
    if (
      !dados.nome.trim() ||
      !dados.telefone.trim() ||
      !dados.email.trim()
    ) {
      alert('Preencha todos os campos obrigatórios!');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(dados.email)) {
      alert('Digite um e-mail válido!');
      return;
    }

    const telefoneRegex = /^\(\d{2}\)\s?\d{5}-\d{4}$/;

    if (!telefoneRegex.test(dados.telefone)) {
      alert('Digite um telefone válido no formato (00) 00000-0000!');
      return;
    }

    alert('Dados salvos com sucesso!');
  }

  return (
    <div
      className="perfil-pagina"
      style={{
        backgroundImage: `url(${fundo})`,
      }}
    >
      {/* Navbar no topo */}
      <header className="perfil-navbar">
        <Menu />
      </header>

      {/* Conteúdo abaixo do navbar */}
      <main className="perfil-container">
        <div className="perfil-card">
          <div className="perfil-header">
            <div className="perfil-avatar">
              <span>
                {dados.nome
                  ? dados.nome.charAt(0).toUpperCase()
                  : 'C'}
              </span>
            </div>

            <div className="perfil-header-info">
              <p className="perfil-label">PERFIL CLIENTE</p>
              <h1 className="perfil-nome">
                {dados.nome || 'Cliente'}
              </h1>
              <p className="perfil-sub">
                Gerencie suas informações pessoais.
              </p>
            </div>
          </div>

          <div className="perfil-divider">◆</div>

          <div className="perfil-form">
            <div className="perfil-campo">
              <label htmlFor="nome">Nome</label>
              <input
                id="nome"
                name="nome"
                value={dados.nome}
                onChange={handleChange}
                placeholder="Seu nome"
              />
            </div>

            <div className="perfil-campo">
              <label htmlFor="telefone">Telefone</label>
              <input
                id="telefone"
                type="tel"
                name="telefone"
                value={dados.telefone}
                onChange={handleChange}
                placeholder="(00) 00000-0000"
              />
            </div>

            <div className="perfil-campo">
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                name="email"
                value={dados.email}
                onChange={handleChange}
                placeholder="seu@email.com"
              />
            </div>

            <div className="perfil-divider">◆</div>

            <div className="perfil-campo">
              <label htmlFor="cpf">
                CPF <span className="nao-editavel">(não editável)</span>
              </label>
              <input
                id="cpf"
                value="000.000.000-00"
                disabled
              />
            </div>

            <div className="perfil-campo">
              <label htmlFor="nascimento">
                Data de nascimento{' '}
                <span className="nao-editavel">
                  (não editável)
                </span>
              </label>
              <input
                id="nascimento"
                value="01/01/1990"
                disabled
              />
            </div>
          </div>

          <button
            type="button"
            className="perfil-btn"
            onClick={handleSalvar}
          >
            Salvar alterações
          </button>
        </div>
      </main>
    </div>
  );
}

export default Perfil;
