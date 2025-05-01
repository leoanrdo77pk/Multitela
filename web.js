// websocket.js

const socket = new WebSocket('ws://lexus.hubns.top:80'); // Usando ws:// para WebSocket

// Quando a conexão for aberta
socket.onopen = () => {
  console.log('Conectado ao servidor WebSocket');
  socket.send('Solicitar dados das séries');
};

// Quando receber uma mensagem do servidor
socket.onmessage = (event) => {
  const seriesData = JSON.parse(event.data);  // Aqui estamos assumindo que o servidor envia os dados no formato JSON
  console.log('Dados das séries recebidos:', seriesData);
  
  // Aqui você pode processar os dados das séries e exibir no seu site
  const el = document.getElementById('realtime');
  if (el) {
    el.textContent = seriesData.someData || 'Dados das séries não encontrados';  // Modifique conforme a estrutura dos dados
  }
};

// Em caso de erro
socket.onerror = (error) => {
  console.error('Erro no WebSocket:', error);
};

// Quando a conexão for fechada
socket.onclose = (event) => {
  if (event.wasClean) {
    console.log(`Conexão fechada com código ${event.code} e razão: ${event.reason}`);
  } else {
    console.error('A conexão foi encerrada de forma inesperada');
  }
};
