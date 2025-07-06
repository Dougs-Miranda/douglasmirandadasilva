        // Função para mostrar a página selecionada
        function showPage(pageId) {
            // Remove a classe active de todas as seções
            const sections = document.querySelectorAll('.page-section');
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Remove a classe active de todos os links de navegação
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            
            // Adiciona a classe active à seção selecionada
            document.getElementById(pageId).classList.add('active');
            
            // Adiciona a classe active ao link de navegação clicado
            event.target.classList.add('active');
        }

        // Função para enviar o formulário (apenas visual)
        function enviarFormulario(event) {
            event.preventDefault(); // Previne o envio real do formulário
            
            // Coleta os dados do formulário
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('mensagem').value;
            
            // Validação básica
            if (nome && email && mensagem) {
                alert('Mensagem enviada com sucesso! Obrigado pelo contato, ' + nome + '.');
                
                // Limpa o formulário
                document.getElementById('nome').value = '';
                document.getElementById('email').value = '';
                document.getElementById('mensagem').value = '';
            } else {
                alert('Por favor, preencha todos os campos.');
            }
        }

        // Animação das barras de progresso dos idiomas
        function animarBarrasProgresso() {
            const barras = document.querySelectorAll('.nivel-progresso');
            barras.forEach(barra => {
                const largura = barra.style.width;
                barra.style.width = '0%';
                setTimeout(() => {
                    barra.style.width = largura;
                }, 500);
            });
        }

        // Executa a animação quando a página de formação é carregada
        document.addEventListener('DOMContentLoaded', function() {
            // Adiciona evento de clique para animar as barras quando a seção formação for visualizada
            const formacaoLink = document.querySelector('a[onclick*="formacao"]');
            if (formacaoLink) {
                formacaoLink.addEventListener('click', function() {
                    setTimeout(animarBarrasProgresso, 100);
                });
            }
        });

        // Efeito de hover nos cartões de projeto
        document.addEventListener('DOMContentLoaded', function() {
            const projetoCards = document.querySelectorAll('.projeto-card');
            projetoCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px) scale(1.02)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            });
        });

        // Scroll suave para o topo ao trocar de página
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // Adiciona scroll suave ao trocar de página
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', scrollToTop);
        });