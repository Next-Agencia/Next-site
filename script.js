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

const instagramPosts = [
  {
    url: "https://www.instagram.com/next__digital26/p/DVoKIpvDfnj/",
    titulo: "Post DVoKIpvDfnj",
    descricao: "Conteúdo oficial publicado no perfil @next_digital26.",
  },
  {
    url: "https://www.instagram.com/next__digital26/p/DVmcLDEEdXa/",
    titulo: "Post DVmcLDEEdXa",
    descricao: "Confira as novidades e estratégias da Next Digital.",
  },
  {
    url: "https://www.instagram.com/next__digital26/p/DVmbXX7ltJ3/",
    titulo: "Post DVmbXX7ltJ3",
    descricao: "Mais um conteúdo real com foco em resultado e performance.",
  },
];

const feedbackList = document.getElementById("feedbackList");

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

const instagramFeed = document.getElementById("instagramFeed");

instagramPosts.forEach((post, index) => {
  const col = document.createElement("div");
  col.className = "col-md-6 col-xl-4 reveal";
  col.style.transitionDelay = `${index * 90}ms`;

  col.innerHTML = `
    <article class="instagram-card-real">
      <div class="ig-header">
        <span class="ig-avatar">N</span>
        <div>
          <strong>@next_digital26</strong>
          <p>${post.titulo}</p>
        </div>
      </div>
      <div class="ig-media">
        <span class="ig-chip">Instagram</span>
      </div>
      <div class="ig-body">
        <p>${post.descricao}</p>
        <a class="instagram-open" href="${post.url}" target="_blank" rel="noopener noreferrer">Ver post completo</a>
      </div>
    </article>
  `;

  instagramFeed.appendChild(col);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

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
  const statsObserver = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.querySelectorAll(".counter").forEach(animateCounter);
          currentObserver.disconnect();
        }
      });
    },
    { threshold: 0.5 }
  );

  statsObserver.observe(statsSection);
}

document.getElementById("year").textContent = new Date().getFullYear();
