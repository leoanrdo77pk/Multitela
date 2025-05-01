// web.js

// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}

// Aplica tema salvo
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
});

// Botão "voltar ao topo"
const voltarTopo = document.createElement('button');
voltarTopo.textContent = '↑';
voltarTopo.style.position = 'fixed';
voltarTopo.style.bottom = '20px';
voltarTopo.style.right = '20px';
voltarTopo.style.padding = '10px';
voltarTopo.style.background = '#333';
voltarTopo.style.color = '#fff';
voltarTopo.style.border = 'none';
voltarTopo.style.borderRadius = '50%';
voltarTopo.style.cursor = 'pointer';
voltarTopo.style.zIndex = '1000';
voltarTopo.style.display = 'none';

voltarTopo.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
document.body.appendChild(voltarTopo);

window.addEventListener('scroll', () => {
  voltarTopo.style.display = window.scrollY > 300 ? 'block' : 'none';
});
