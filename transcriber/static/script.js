document.getElementById('uploadForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Evita o reload da página ao enviar o formulário
  
    const fileInput = document.getElementById('audioFile');
    const file = fileInput.files[0];
  
    if (!file) {
      alert('Por favor, selecione um arquivo!');
      return;
    }
  
    const formData = new FormData();
    formData.append('audio', file); // O nome 'audio' deve coincidir com o esperado na API
  
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = 'Processando...'; // Mensagem enquanto aguarda a resposta
  
    try {
      const response = await fetch('http://127.0.0.1:8000/api/transcribe/', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        const data = await response.json();
        resultDiv.textContent = `Transcrição: ${data.transcription}`;
      } else {
        const error = await response.json();
        resultDiv.textContent = `Erro: ${error.error || 'Falha ao processar'}`;
      }
    } catch (err) {
      resultDiv.textContent = `Erro ao conectar: ${err.message}`;
    }
  });
  