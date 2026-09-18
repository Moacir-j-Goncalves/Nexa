import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Botao from "../../Componentes/Botao";
import "./Pagamentos.css";

const planosInfo = {
  basico: {
    nome: "Básico",
    preco: "47,00",
    precoNum: 47,
    comissao: "R$ 14,10",
    percentual: "30%",
  },

  profissional: {
    nome: "Profissional",
    preco: "97,00",
    precoNum: 97,
    comissao: "R$ 38,80",
    percentual: "40%",
  },

  premium: {
    nome: "Premium",
    preco: "197,00",
    precoNum: 197,
    comissao: "R$ 98,50",
    percentual: "50%",
  },
};

const USUARIO = {
  nome: "João Silva",
  email: "joao@email.com",
};

function IconeCartao() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="1" y="4" width="22" height="16" rx="2" />
      <line x1="1" y1="10" x2="23" y2="10" />
    </svg>
  );
}

function IconePix() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

function IconeBoleto() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="16" y2="17" />
    </svg>
  );
}

function IconeCadeado() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

export default function Pagamentos() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const planoId = searchParams.get("plano") || "profissional";

  const plano = planosInfo[planoId] || planosInfo.profissional;

  const [metodo, setMetodo] = useState("cartao");
  const [sucesso, setSucesso] = useState(false);
  const [processando, setProcessando] = useState(false);

  const [numero, setNumero] = useState("");
  const [nomeCartao, setNomeCartao] = useState("");
  const [validade, setValidade] = useState("");
  const [cvv, setCvv] = useState("");
  const [cpf, setCpf] = useState("");
  const [parcelas, setParcelas] = useState("1");

  function formatarCartao(valor) {
    return valor
      .replace(/\D/g, "")
      .replace(/(\d{4})/g, "$1 ")
      .trim()
      .slice(0, 19);
  }

  function formatarValidade(valor) {
    return valor
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .slice(0, 5);
  }

  function formatarCpf(valor) {
    return valor
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
      .slice(0, 14);
  }

  function handlePagar(e) {
    e.preventDefault();

    setProcessando(true);

    setTimeout(() => {
      setProcessando(false);
      setSucesso(true);
    }, 2000);
  }

  if (sucesso) {
    return (
      <div className="pag-shell">
        <div className="pag-sucesso">
          <div className="pag-sucesso-circulo">✓</div>

          <h1>Pagamento confirmado!</h1>

          <p>
            Seu plano <strong>{plano.nome}</strong> foi ativado com sucesso.
          </p>

          <Botao destino="/" variante="primario">
            Ir para o painel
          </Botao>
        </div>
      </div>
    );
  }

  return (
    <div className="pag-shell">
      <div className="pag-subbar">
        <button
          className="pag-voltar"
          onClick={() => navigate("/assinatura")}
        >
          ← Voltar aos planos
        </button>

        <div className="pag-seguro">
          <IconeCadeado />
          Ambiente seguro
        </div>
      </div>

      <div className="pag-etapas">
        <div className="etapa">
          <span>1</span>
          Plano
        </div>

        <div className="linha" />

        <div className="etapa ativo">
          <span>2</span>
          Pagamento
        </div>

        <div className="linha" />

        <div className="etapa">
          <span>3</span>
          Confirmação
        </div>
      </div>

      <div className="pag-grid">
        <div>
          <div className="pag-card usuario-card">
            <h3>SEUS DADOS</h3>

            <div className="usuario-box">
              <div className="avatar">
                {USUARIO.nome.charAt(0)}
              </div>

              <div>
                <strong>{USUARIO.nome}</strong>
                <p>{USUARIO.email}</p>
              </div>

              <span className="tag-logado">
                LOGADO
              </span>
            </div>
          </div>

          <form className="pag-form" onSubmit={handlePagar}>
            <h2>FORMA DE PAGAMENTO</h2>

            <div className="pag-tabs">
              <button
                type="button"
                className={metodo === "cartao" ? "ativo" : ""}
                onClick={() => setMetodo("cartao")}
              >
                <IconeCartao />
                Cartão de crédito
              </button>

              <button
                type="button"
                className={metodo === "pix" ? "ativo" : ""}
                onClick={() => setMetodo("pix")}
              >
                <IconePix />
                Pix
              </button>

              <button
                type="button"
                className={metodo === "boleto" ? "ativo" : ""}
                onClick={() => setMetodo("boleto")}
              >
                <IconeBoleto />
                Boleto
              </button>
            </div>

            {metodo === "cartao" && (
              <>
                <div className="pag-campo">
                  <label>NÚMERO DO CARTÃO</label>

                  <input
                    type="text"
                    placeholder="0000 0000 0000 0000"
                    value={numero}
                    onChange={(e) =>
                      setNumero(formatarCartao(e.target.value))
                    }
                    required
                  />
                </div>

                <div className="pag-campo">
                  <label>NOME IMPRESSO NO CARTÃO</label>

                  <input
                    type="text"
                    placeholder="Como aparece no cartão"
                    value={nomeCartao}
                    onChange={(e) =>
                      setNomeCartao(e.target.value.toUpperCase())
                    }
                    required
                  />
                </div>

                <div className="pag-row">
                  <div className="pag-campo">
                    <label>VALIDADE</label>

                    <input
                      type="text"
                      placeholder="MM/AA"
                      value={validade}
                      onChange={(e) =>
                        setValidade(formatarValidade(e.target.value))
                      }
                      required
                    />
                  </div>

                  <div className="pag-campo">
                    <label>CVV</label>

                    <input
                      type="text"
                      placeholder="123"
                      value={cvv}
                      onChange={(e) =>
                        setCvv(
                          e.target.value.replace(/\D/g, "").slice(0, 4)
                        )
                      }
                      required
                    />
                  </div>
                </div>

                <div className="pag-campo">
                  <label>CPF DO TITULAR</label>

                  <input
                    type="text"
                    placeholder="000.000.000-00"
                    value={cpf}
                    onChange={(e) =>
                      setCpf(formatarCpf(e.target.value))
                    }
                    required
                  />
                </div>

                <div className="pag-campo">
                  <label>PARCELAS</label>

                  <select
                    value={parcelas}
                    onChange={(e) =>
                      setParcelas(e.target.value)
                    }
                  >
                    <option value="1">
                      1x de R$ {plano.preco} sem juros
                    </option>

                    <option value="2">
                      2x de R$
                      {(plano.precoNum / 2)
                        .toFixed(2)
                        .replace(".", ",")}
                    </option>

                    <option value="3">
                      3x de R$
                      {(plano.precoNum / 3)
                        .toFixed(2)
                        .replace(".", ",")}
                    </option>
                  </select>
                </div>
              </>
            )}

            {metodo === "pix" && (
              <div className="pag-pix">
                <div className="qr-placeholder">
                  QR CODE
                </div>

                <p>
                  Escaneie com o app do banco.
                </p>
              </div>
            )}

            {metodo === "boleto" && (
              <div className="pag-boleto">
                <h3>Boleto bancário</h3>

                <p>
                  O boleto será enviado para:
                </p>

                <strong>{USUARIO.email}</strong>
              </div>
            )}

            <div className="pag-acoes">
              <Botao
                type="submit"
                variante="primario"
                cheio
                disabled={processando}
              >
                {processando
                  ? "Processando..."
                  : `Pagar R$ ${plano.preco}`}
              </Botao>
            </div>
          </form>
        </div>

        <aside className="pag-resumo">
          <h2>RESUMO DO PEDIDO</h2>

          <div className="produto-box">
            <div className="produto-icone">
              📅
            </div>

            <div>
              <strong>
                Nexa {plano.nome}
              </strong>

              <p>
                Agenda profissional · mensal
              </p>
            </div>
          </div>

          <div className="resumo-linhas">
            <div className="pag-item">
              <span>Subtotal</span>
              <strong>R$ {plano.preco}</strong>
            </div>

            <div className="pag-item">
              <span>Desconto afiliado</span>
              <strong>— R$ 0,00</strong>
            </div>

            <div className="pag-item total">
              <span>Total / mês</span>
              <strong>R$ {plano.preco}</strong>
            </div>
          </div>

          <div className="comissao-box">
            <span>
              💰 SUA COMISSÃO ({plano.percentual})
            </span>

            <h1>
              {plano.comissao}
              <small>/mês</small>
            </h1>

            <p>
              Creditada todo mês enquanto
              o cliente estiver ativo
            </p>
          </div>

          <div className="beneficios">
            <div>🔒 Compra segura</div>
            <div>↩ Cancele quando quiser</div>
            <div>🏆 Garantia de 7 dias</div>
          </div>

          <div className="suporte">
            Dúvidas? <a href="/">Fale com o suporte</a>
          </div>
        </aside>
      </div>
    </div>
  );
}