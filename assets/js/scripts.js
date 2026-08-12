// ============================================
// MENU RESPONSIVO
// ============================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ============================================
// FADE-IN AO ROLAR A PÁGINA
// ============================================
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => observer.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('is-visible'));
}

// ============================================
// BUSCAR DADOS DO PERFIL DO GITHUB
// ============================================
const seguidoresEl = document.getElementById('seguidores');
const repositoriosEl = document.getElementById('repositorios');

async function getPerfilGithub() {
  try {
    const resposta = await fetch('https://api.github.com/users/luizavpg-bit');
    const perfil = await resposta.json();

    if (seguidoresEl) seguidoresEl.textContent = perfil.followers ?? '--';
    if (repositoriosEl) repositoriosEl.textContent = perfil.public_repos ?? '--';
  } catch (error) {
    console.error('Erro ao buscar perfil do GitHub:', error);
  }
}

getPerfilGithub();

// ============================================
// BUSCAR REPOSITÓRIOS DO GITHUB (CARROSSEL)
// ============================================
const swiperWrapper = document.querySelector('.swiper-wrapper');

// Ícones de linguagem disponíveis em assets/icons/languages/
const linguagens = {
  'JavaScript': 'javascript',
  'TypeScript': 'typescript',
  'Python': 'python',
  'Java': 'java',
  'HTML': 'html',
  'CSS': 'css',
  'PHP': 'php',
  'C#': 'csharp',
  'Go': 'go',
  'Kotlin': 'kotlin',
  'Swift': 'swift',
};

async function getProjetosGithub() {
  try {
    const resposta = await fetch('https://api.github.com/users/luizavpg-bit/repos?sort=updated&per_page=6');
    const repositorios = await resposta.json();

    if (!swiperWrapper || !Array.isArray(repositorios) || repositorios.length === 0) {
      iniciarSwiper();
      return;
    }

    swiperWrapper.innerHTML = '';

    repositorios.forEach(repositorio => {
      const linguagem = repositorio.language || 'GitHub';
      const logo = linguagens[linguagem] ?? 'github';
      const urlLogo = `./assets/icons/languages/${logo}.svg`;

      const nomeFormatado = repositorio.name
        .replace(/[-_]/g, ' ')
        .replace(/[^a-zA-Z0-9\s]/g, '');

      const truncar = (texto, limite) =>
        texto.length > limite ? texto.substring(0, limite) + '...' : texto;

      const descricao = repositorio.description
        ? truncar(repositorio.description, 110)
        : 'Projeto desenvolvido no GitHub.';

      const botaoDeploy = repositorio.homepage
        ? `<a href="${repositorio.homepage}" target="_blank" class="botao-outline botao-sm">Deploy</a>`
        : '';

      swiperWrapper.innerHTML += `
        <div class="swiper-slide">
          <article class="project-card">
            <div class="project-image">
              <img src="${urlLogo}" alt="Ícone ${linguagem}"
                onerror="this.onerror=null; this.src='./assets/icons/languages/github.svg';">
            </div>
            <div class="project-content">
              <h3>${nomeFormatado}</h3>
              <p>${descricao}</p>
              <div class="project-tags"><span class="tag">${linguagem}</span></div>
              <div class="project-buttons">
                <a href="${repositorio.html_url}" target="_blank" class="botao botao-sm">GitHub</a>
                ${botaoDeploy}
              </div>
            </div>
          </article>
        </div>
      `;
    });

    iniciarSwiper();
  } catch (error) {
    console.error('Erro ao buscar repositórios do GitHub:', error);
    iniciarSwiper();
  }
}

getProjetosGithub();

// ============================================
// CARROSSEL - SWIPER
// ============================================
function iniciarSwiper() {
  new Swiper('.projects-swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 24,
    loop: false,
    watchOverflow: true,
    breakpoints: {
      0:    { slidesPerView: 1, spaceBetween: 20 },
      769:  { slidesPerView: 2, spaceBetween: 24 },
      1025: { slidesPerView: 3, spaceBetween: 28 },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    grabCursor: true,
  });
}

// ============================================
// VALIDAÇÃO DE FORMULÁRIO
// ============================================
const formulario = document.getElementById('formulario');
const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

if (formulario) {
  formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    document.querySelectorAll('form span').forEach(span => span.innerHTML = '');
    let valido = true;

    const nome = document.getElementById('nome');
    const erroNome = document.getElementById('erro-nome');
    if (nome.value.trim().length < 3) {
      erroNome.textContent = 'O nome deve ter no mínimo 3 caracteres.';
      if (valido) nome.focus();
      valido = false;
    }

    const email = document.getElementById('email');
    const erroEmail = document.getElementById('erro-email');
    if (!email.value.trim().match(emailRegex)) {
      erroEmail.textContent = 'Digite um e-mail válido.';
      if (valido) email.focus();
      valido = false;
    }

    const assunto = document.getElementById('assunto');
    const erroAssunto = document.getElementById('erro-assunto');
    if (assunto.value.trim().length < 5) {
      erroAssunto.textContent = 'O assunto deve ter no mínimo 5 caracteres.';
      if (valido) assunto.focus();
      valido = false;
    }

    const mensagem = document.getElementById('mensagem');
    const erroMensagem = document.getElementById('erro-mensagem');
    if (mensagem.value.trim().length === 0) {
      erroMensagem.textContent = 'A mensagem não pode estar vazia.';
      if (valido) mensagem.focus();
      valido = false;
    }

    if (valido) {
      const botaoEnviar = formulario.querySelector('button[type="submit"]');
      botaoEnviar.disabled = true;
      botaoEnviar.textContent = 'Enviando...';
      formulario.submit();
    }
  });
}

// ============================================
// ANO ATUAL NO RODAPÉ (se existir #footerNote)
// ============================================
const footerNote = document.getElementById('footerNote');
if (footerNote) {
  footerNote.textContent += ` · ${new Date().getFullYear()}`;
}