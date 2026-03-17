const feedbacks = [
  {
    nome: "Camila Rocha • Loja De Moda",
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


const feedbackList = document.getElementById("feedbackList");

if (feedbackList) {

  feedbacks.forEach((item, index) => {

    const col = document.createElement("div");

    col.className = "col-md-6 col-xl-4 reveal";

    col.style.transitionDelay = `${index * 120}ms`;

    col.innerHTML = `
      <article class="feedback-card h-100 shine">
        <p>“${item.texto}”</p>
        <p class="feedback-client">${item.nome}</p>
      </article>
    `;

    feedbackList.appendChild(col);

  });

}


/* animação ao aparecer */

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }

  });

},{ threshold: 0.12 });


document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});


/* contador animado */

const animateCounter = (counter) => {

  const target = Number(counter.dataset.target || 0);

  const duration = 1400;

  const startTime = performance.now();

  const update = (currentTime) => {

    const progress = Math.min((currentTime - startTime) / duration, 1);

    const value = Math.floor(progress * target);

    counter.textContent = `${value}`;

    if (progress < 1) {

      requestAnimationFrame(update);

    } else {

      counter.textContent = `${target}`;

    }

  };

  requestAnimationFrame(update);

};


const statsSection = document.querySelector(".stats");

if (statsSection) {

  const statsObserver = new IntersectionObserver((entries, currentObserver) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        document.querySelectorAll(".counter").forEach(animateCounter);

        currentObserver.disconnect();

      }

    });

  }, { threshold: 0.5 });

  statsObserver.observe(statsSection);

}


/* ano automático no footer */

const yearElement = document.getElementById("year");

if (yearElement) {

  yearElement.textContent = new Date().getFullYear();

}