function mostrarPerfil(candidato) {
  const home = document.getElementById("homeSection");
  const perfil = document.getElementById("perfilSection");
  const nome = document.getElementById("nomeCandidato");
  const descricao = document.getElementById("descricaoCandidato");
  const foto = document.getElementById("fotoCandidato");

  home.classList.add("hidden");
  perfil.classList.remove("hidden");

  switch (candidato) {
    case "murilo":
      nome.textContent = "Dr. Murilo Lima";
      descricao.textContent = "Especialista em políticas públicas, com foco em educação e saúde. Defende propostas inovadoras para inclusão social.";
      foto.src = "https://via.placeholder.com/120?text=Murilo";
      break;
    case "marina":
      nome.textContent = "Marina Silva";
      descricao.textContent = "Ativista ambiental e senadora, Marina traz pautas voltadas à sustentabilidade e participação popular.";
      foto.src = "https://via.placeholder.com/120?text=Marina";
      break;
    case "lula":
      nome.textContent = "Luiz Inácio Lula da Silva";
      descricao.textContent = "Ex-presidente com foco em programas sociais e desenvolvimento econômico.";
      foto.src = "https://via.placeholder.com/120?text=Lula";
      break;
    case "bolsonaro":
      nome.textContent = "Jair Bolsonaro";
      descricao.textContent = "Ex-presidente com propostas voltadas à segurança pública e economia liberal.";
      foto.src = "https://via.placeholder.com/120?text=Bolsonaro";
      break;
  }
}

function voltarHome() {
  document.getElementById("perfilSection").classList.add("hidden");
  document.getElementById("homeSection").classList.remove("hidden");
}

