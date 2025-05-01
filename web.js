document.getElementById("searchInput").addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    const termo = this.value.toLowerCase();
    const resultado = conteudos.find(c => c.titulo.toLowerCase().includes(termo));
    if (resultado) {
      window.location.href = resultado.url;
    } else {
      alert("Conteúdo não encontrado.");
    }
  }
});
