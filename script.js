const feedbacks = [
  {
    nome: "Camila Rocha • Loja de Moda",
    texto: "A equipe estruturou nosso tráfego pago e aumentamos em 63% as vendas online em três meses.",
  },
  {
    nome: "Rafael Gomes • Clínica Integrada",
    texto: "Hoje temos atendimento no WhatsApp com IA 24h e nossa taxa de resposta ficou muito melhor.",
  },
  {
    nome: "Fernanda Lima • Escola Técnica",
    texto: "Fizeram nosso novo site e organizaram o suporte de TI. Ficou tudo mais profissional e rápido.",
  },
];

const list = document.getElementById("feedbackList");

feedbacks.forEach((item) => {
  const col = document.createElement("div");
  col.className = "col-md-6 col-xl-4";

  col.innerHTML = `
    <article class="feedback-card h-100">
      <p>“${item.texto}”</p>
      <p class="feedback-client">${item.nome}</p>
    </article>
  `;

  list.appendChild(col);
});

document.getElementById("year").textContent = new Date().getFullYear();
