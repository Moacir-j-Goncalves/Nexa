import { useState } from "react";
import Botao from "../../Componentes/Botao";   // ✅ caminho corrigido
import Menu from "../../Componentes/Menu";     // ✅ caminho corrigido
import fundo from "../../Componentes/Imagens/nexa_fundo.jpg";
import "./Assinatura.css";
import { useNavigate } from "react-router-dom";

const planos = [
  {
    id: "basico",
    nome: "Básico",
    preco: "47",
    periodo: "/mês",
    beneficios: [
      "Agenda online visível ao público",
      "Até 20 dias disponíveis por mês",
      "Link de agendamento exclusivo",
      "Suporte por e-mail",
    ],
  },
  {
    id: "profissional",
    nome: "Profissional",
    preco: "97",
    periodo: "/mês",
    badge: "Mais escolhido",
    beneficios: [
      "Agenda online visível ao público",
      "Dias disponíveis ilimitados",
      "Link de agendamento exclusivo",
      "Lembretes automáticos aos clientes",
      "Integração com WhatsApp",
    ],
  },
];

export default function Assinatura() {
  const [planoSelecionado, setPlanoSelecionado] = useState("profissional");
  const navigate = useNavigate();

  return (
    <div className="assinatura">
      <Menu /> {/* ✅ Menu renderizado corretamente */}

      <div className="assinatura__conteudo">
        <p className="assinatura__subtag">Planos de divulgação</p>
        <h2 className="assinatura__titulo">
          Mostre sua disponibilidade e receba mais clientes
        </h2>
        <p className="assinatura__descricao">
          Publique os dias e horários em que você atende. Seus clientes veem e agendam diretamente.
        </p>

        <div className="assinatura__planos">
          {planos.map((plano) => (
            <div
              key={plano.id}
              className={[
                "plano",
                planoSelecionado === plano.id ? "plano--selecionado" : "",
              ].filter(Boolean).join(" ")}
              onClick={() => setPlanoSelecionado(plano.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setPlanoSelecionado(plano.id)}
            >
              {plano.badge && <span className="plano__badge">{plano.badge}</span>}

              <div className="plano__cabecalho">
                <span className="plano__nome">{plano.nome}</span>
                <div className="plano__preco">
                  <span className="plano__cifrao">R$</span>
                  <span className="plano__valor">{plano.preco}</span>
                  <span className="plano__periodo">{plano.periodo}</span>
                </div>
              </div>

              <ul className="plano__beneficios">
                {plano.beneficios.map((b) => (
                  <li key={b}>
                    <span className="plano__check">✓</span>
                    {b}
                  </li>
                ))}
              </ul>

              <div
                className={`plano__radio ${
                  planoSelecionado === plano.id ? "plano__radio--ativo" : ""
                }`}
              >
                {planoSelecionado === plano.id
                  ? "✓ Selecionado"
                  : "Selecionar este plano"}
              </div>
            </div>
          ))}
        </div>
        

              <div className="assinatura__rodape">
          <Botao
            destino={`/pagamento?plano=${planoSelecionado}`}
            variante="primario"
            tamanho="grande"
            className="botao--confirmar"
          >
            Confirmar plano
          </Botao>

          <p className="assinatura__nota">
            Cancele quando quiser · Sem fidelidade
          </p>
        </div>
        </div>
      </div>
    );
}
