// Função para o mini-quiz de tomada de decisão
function verificarResposta(compartilhou) {
    const elementoResultado = document.getElementById("resultado-quiz");
    
    if (compartilhou) {
        elementoResultado.style.color = "#e74c3c"; // Vermelho
        elementoResultado.textContent = "❌ Alerta! Compartilhar sem checar ajuda a espalhar desinformação. Sempre verifique os fatos primeiro.";
    } else {
        elementoResultado.style.color = "#2ecc71"; // Verde
        elementoResultado.textContent = "✅ Excelente escolha! O ceticismo saudável é a maior defesa do cidadão digital.";
    }
}

// Função para processar o formulário de denúncia
function enviarDenuncia(event) {
    event.preventDefault(); // Impede a página de recarregar

    // Coleta dos dados do formulário
    const nome = document.getElementById("nome").value || "Anônimo";
    const link = document.getElementById("link").value;
    const descricao = document.getElementById("descricao").value;

    // Simulação de salvamento/exibição no console do navegador para testes do aluno
    console.log("--- Nova Denúncia Recebida ---");
    console.log(`Autor: ${nome}`);
    console.log(`Link: ${link}`);
    console.log(`Motivo do Alerta: ${descricao}`);

    // Exibe a mensagem de sucesso na tela
    const msgSucesso = document.getElementById("mensagem-sucesso");
    msgSucesso.classList.remove("hidden");

    // Limpa os campos do formulário
    document.getElementById("form-denuncia").reset();

    // Remove a mensagem de sucesso após 5 segundos
    setTimeout(() => {
        msgSucesso.classList.add("hidden");
    }, 5000);
}
