<table>

<tr>

<td width="35%" align="center">

<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" width="180"/>

</td>

<td width="65%">

# 🩷 Portfólio Pessoal: Luiza Paolinelli

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/Swiper.js-6332F6?style=for-the-badge&logo=swiper&logoColor=white">
<img src="https://img.shields.io/badge/GitHub_API-181717?style=for-the-badge&logo=github&logoColor=white">

Repositório do meu portfólio pessoal como desenvolvedora Full Stack: apresentação da minha formação, trajetória profissional, projetos, competências, certificações e canal de contato — construído do zero em HTML, CSS e JavaScript puros.

</td>

</tr>
</table>

---

## 🌸 Sobre o projeto

O site reúne, em uma única página (`index.html`) navegável por âncoras, minha formação acadêmica, trajetória do marketing para a programação, projetos práticos, competências técnicas, certificações e um formulário de contato funcional — além de uma página dedicada de confirmação de envio (`success.html`).

```
Header (fixo) ── Formação / Trajetória / Projetos / Competências / Certificações / Contato ── Footer
```

---

## 🩷 Habilidades trabalhadas

- Estruturação semântica de página única em **HTML5**
- Estilização com **CSS3** puro: variáveis customizadas, Grid, Flexbox e animações
- Modo claro/escuro (☀️/🌙) com **CSS custom properties** e persistência via `localStorage`
- Consumo da **API pública do GitHub** para exibir seguidores, repositórios e projetos em tempo real
- Carrossel de projetos com **Swiper.js**, com fallback caso a API não responda
- Interatividade nativa em **JavaScript**: menu responsivo, fade-in com `IntersectionObserver`, filtro de projetos por competência, validação de formulário
- Formulário de contato funcional via **FormSubmit**
- Design responsivo mobile-first

---

## 🌸 Estrutura do projeto

```text
resume
 ├── assets
 │    ├── css
 │    │    └── styles.css
 │    ├── js
 │    │    └── scripts.js
 │    ├── icons
 │    └── img
 ├── index.html
 └── success.html
```

---

## 🩷 Seções da página

| Âncora | Seção | Descrição |
|--------|-------|-----------|
| `#topo` | Boas-vindas | Apresentação inicial com foto e call to action para contato. |
| `#formacao` | Formação | Linha do tempo acadêmica e nível de idiomas. |
| `#trajetoria` | Trajetória | Texto sobre a transição de carreira do marketing para o desenvolvimento. |
| `#projetos` | Projetos | Carrossel dinâmico puxado da API do GitHub, com fallback estático. |
| `#competencias` | Competências | Grade de habilidades por área, com filtro clicável ligado aos projetos. |
| `#certificacoes` | Certificações | Cursos e especializações concluídas. |
| `#contato` | Contato | Formulário validado e redes sociais. |

### 🌸 Página adicional

| Página | Descrição |
|--------|-----------|
| `success.html` | Página de confirmação exibida após o envio bem-sucedido do formulário de contato. |

---

## 🩷 Modo claro / escuro

| Modo | Emoji | Ativação |
|------|-------|----------|
| Claro | ☀️ | Padrão ao abrir o site pela primeira vez. |
| Escuro | 🌙 | Botão de alternância no cabeçalho; a escolha fica salva no navegador. |

Cada ilustração decorativa (formação, contato, página de sucesso) possui uma versão própria para cada modo, trocadas automaticamente via CSS conforme o tema ativo.

---

## 🌸 Estilização e responsividade

- **Paleta de cores:** verde, laranja, vermelho escuro e vermelho sobre base creme no modo claro; tons de roxo escuro, incluindo o acento `#500185`, no modo escuro
- **Tipografia:** Lexend Exa para títulos, Quicksand para corpo de texto e JetBrains Mono para dados numéricos
- **Header fixo** com transição suave ao rolar a página
- **Responsividade:** menu hambúrguer no mobile, reorganização de grids e imagens decorativas reposicionadas em telas menores
- **Animações:** fade-in progressivo das seções, flutuação suave da foto de perfil

---

## 🩷 Como executar

1. **Clonar o repositório:**

```bash
git clone https://github.com/luizavpg-bit/resume.git
```

2. **Aceder à pasta do projeto:**

```bash
cd resume
```

3. **Abrir o `index.html`** diretamente no navegador, ou servir a pasta com uma extensão como Live Server.

---

## 🌸 Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Swiper.js
- API pública do GitHub
- FormSubmit

---

## 👤 Desenvolvido por:

**Luiza Valentina Paolinelli Guimarães** 🩷