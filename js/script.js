// Validação de formulário melhorada
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if(!email || !message) {
      alert('Por favor, preencha todos os campos!');
      return;
    }
    
    // Simular envio
    alert(`Obrigado pela mensagem! Responderei para ${email} em breve.`);
    this.reset();
  });
  
  // Adicionar animação suave para links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });