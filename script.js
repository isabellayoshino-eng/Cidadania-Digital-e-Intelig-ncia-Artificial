// Garante que o script só rode após todo o HTML ser carregado no navegador
document.addEventListener("DOMContentLoaded", () => {

    // --- SISTEMA DO ASSISTENTE FELINO (BALÃO) ---
    const curiosidades = [
        "Os gatos passam cerca de 30% a 50% do dia se limpando!",
        "O miado do gato é uma ferramenta usada quase exclusivamente para se comunicar com humanos.",
        "O cérebro de um gato é biologically mais similar ao de um humano do que ao de um cachorro.",
        "Gatos podem pular até seis vezes a sua própria altura!",
        "A audição de um felino é uma das mais apuradas do reino animal, detectando ultrassons.",
        "O ronrono nem sempre significa felicidade; pode indicar que estão tentando se acalmar ou se curar."
    ];

    const gatoAvatar = document.getElementById('gatoAssistente');
    const textoBalao = document.getElementById('textoBalao');

    if (gatoAvatar && textoBalao) {
        gatoAvatar.addEventListener('click', () => {
            const indiceAleatorio = Math.floor(Math.random() * curiosidades.length);
            textoBalao.innerText = curiosidades[indiceAleatorio];
            
            gatoAvatar.style.transform = "scale(1.3) rotate(-10deg)";
            setTimeout(() => {
                gatoAvatar.style.transform = "none";
            }, 300);
        });
    }

    // --- CLIQUES NAS RAÇAS ---
    const cardPersa = document.getElementById('card-persa');
    const cardSiames = document.getElementById('card-siames');
    const cardMaine = document.getElementById('card-maine');
    const cardSrd = document.getElementById('card-srd');

    if (cardPersa) cardPersa.addEventListener('click', () => alert('Persa: Focinho achatado e temperamento calmo.'));
    if (cardSiames) cardSiames.addEventListener('click', () => alert('Siamês: Muito comunicativo e tagarela.'));
    if (cardMaine) cardMaine.addEventListener('click', () => alert('Maine Coon: Gigantes gentis de até 1 metro.'));
    if (cardSrd) cardSrd.addEventListener('click', () => alert('Vira-lata (SRD): Únicos, resistentes e carinhosos.'));

    // --- SISTEMA DE ABAS (TRATAMENTO/CUIDADOS) ---
    const botoesAba = document.querySelectorAll('.btn-aba');
    const conteudosAba = document.querySelectorAll('.conteudo-aba');

    botoesAba.forEach(botao => {
        botao.addEventListener('click', (e) => {
            const idAbaAlvo = e.target.getAttribute('data-aba');
            if (!idAbaAlvo) return; // Ignora se o botão clicado não for das abas de cuidados

            conteudosAba.forEach(conteudo => conteudo.classList.remove('ativo'));
            botoesAba.forEach(btn => {
                if(btn.getAttribute('data-aba')) btn.classList.remove('ativo');
            });

            document.getElementById(idAbaAlvo).classList.add('ativo');
            e.target.classList.add('ativo');
        });
    });

    // --- VALIDAÇÃO DO QUIZ ---
    const botoesQuiz = document.querySelectorAll('.btn-opcao');
    const resultadoQuiz = document.getElementById('resultadoQuiz');

    botoesQuiz.forEach(botao => {
        botao.addEventListener('click', (e) => {
            botoesQuiz.forEach(btn => btn.disabled = true);
            const elementoClicado = e.target;
            const eCorreto = elementoClicado.classList.contains('opcao-correta');

            resultadoQuiz.style.display = "block";

            if (eCorreto) {
                resultadoQuiz.style.backgroundColor = "#DCFCE7";
                resultadoQuiz.style.color = "#15803D";
                resultadoQuiz.innerText = "🎉 Acertou em cheio! Eles suam pelas patinhas.";
                elementoClicado.style.borderColor = "#22C55E";
                elementoClicado.style.backgroundColor = "#DCFCE7";
            } else {
                resultadoQuiz.style.backgroundColor = "#FEE2E2";
                resultadoQuiz.style.color = "#B91C1C";
                resultadoQuiz.innerText = "❌ Quase lá! A resposta correta era: Pelas almofadas das patas (coxins).";
                elementoClicado.style.borderColor = "#EF4444";
                elementoClicado.style.backgroundColor = "#FEE2E2";
            }
        });
    });

    // --- SISTEMA DE FEEDBACK (GOSTOU OU NÃO) ---
    const btnGostei = document.getElementById('btn-gostei');
    const btnNaoGostei = document.getElementById('btn-nao-gostei');
    const respostaFeedback = document.getElementById('resposta-feedback');

    if (btnGostei && btnNaoGostei && respostaFeedback) {
        btnGostei.addEventListener('click', () => {
            respostaFeedback.style.display = "block";
            respostaFeedback.style.color = "#06D6A0";
            respostaFeedback.innerText = "❤️ Que ótimo! O Mingau ficou roncando de felicidade aqui!";
            btnGostei.disabled = true;
            btnNaoGostei.disabled = true;
        });

        btnNaoGostei.addEventListener('click', () => {
            respostaFeedback.style.display = "block";
            respostaFeedback.style.color = "#EF4444";
            respostaFeedback.innerText = "😿 Ah que pena... Vamos afiar nossas garras e melhorar na próxima!";
            btnGostei.disabled = true;
            btnNaoGostei.disabled = true;
        });
    }
});
