// Validação de formulário de contato
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;
    
    if(!nome || !email || !assunto || !mensagem) {
      showAlert('Por favor, preencha todos os campos!', 'error');
      return;
    }
    
    if(!validateEmail(email)) {
      showAlert('Por favor, insira um e-mail válido!', 'error');
      return;
    }
    
    // Simular envio
    showAlert(`Obrigado pela mensagem, ${nome}! Responderei para ${email} em breve.`, 'success');
    this.reset();
  });
  
  // Função para validar e-mail
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  
  // Função para mostrar alerta estilizado
  function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type === 'error' ? 'danger' : 'success'} position-fixed top-0 start-50 translate-middle-x mt-3`;
    alertDiv.textContent = message;
    
    document.body.appendChild(alertDiv);
    
    setTimeout(() => {
      alertDiv.remove();
    }, 5000);
  }
  
  // Adicionar classe dark ao body se preferência do usuário for modo escuro
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
  }
  
  // Alternar modo escuro/claro (opcional)
  const darkModeToggle = document.createElement('button');
  darkModeToggle.className = 'btn btn-sm btn-outline-primary position-fixed bottom-0 end-0 m-3';
  darkModeToggle.innerHTML = '<i class="bi bi-moon-stars"></i>';
  darkModeToggle.onclick = function() {
    document.body.classList.toggle('dark-mode');
    this.innerHTML = document.body.classList.contains('dark-mode') ? 
      '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon-stars"></i>';
  };
  
  document.body.appendChild(darkModeToggle);