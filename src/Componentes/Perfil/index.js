import { useState } from 'react';
import './Perfil.css';

function Perfil() {
  const [dados, setDados] = useState({
    nome: '',
    telefone: '',
    email: '',
  });

  function handleChange(e) {
    setDados({ ...dados, [e.target.name]: e.target.value });
  }

  function handleSalvar() {
    if (!dados.nome || !dados.telefone || !dados.email) {
      alert('Preencha todos os campos obrigatórios!');
      return;
    }

    // Validação simples de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(dados.email)) {
      alert('Digite um email válido!');
      return;
    }

    // Validação simples de telefone
    const telefoneRegex = /^\(\d{2}\)\s?\d{5}-\d{4}$/;
    if (!telefoneRegex.test(dados.telefone)) {
      alert('Digite um telefone válido no formato (00) 00000-0000!');
      return;
    }

    alert('Dados salvos com sucesso!');
    // Aqui você pode integrar com uma API ou salvar em localStorage
  }

  return (
    <div className="perfil-container">
      <div className="perfil-card">

        <div className="perfil-header">
          <div className="perfil-avatar">
            <span>{dados.nome ? dados.nome.charAt(0).toUpperCase() : 'C'}</span>
          </div>
          <div className="perfil-header-info">
            <p className="perfil-label">PERFIL CLIENTE</p>
            <h1 className="perfil-nome">{dados.nome || 'Cliente'}</h1>
            <p className="perfil-sub">Gerencie suas informações pessoais.</p>
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
            <label htmlFor="email">Email</label>
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
            <label>CPF <span className="nao-editavel">(não editável)</span></label>
            <input value="000.000.000-00" disabled />
          </div>

          <div className="perfil-campo">
            <label>Data de nascimento <span className="nao-editavel">(não editável)</span></label>
            <input value="01/01/1990" disabled />
          </div>
        </div>

        <button className="perfil-btn" onClick={handleSalvar}>
          Salvar alterações
        </button>

      </div>
    </div>
  );
}

export default Perfil;
