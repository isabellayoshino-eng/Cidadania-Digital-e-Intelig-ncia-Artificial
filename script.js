// --- SISTEMA DO ASSISTENTE FELINO (BALÃO) ---
const curiosidades = [
    "Os gatos passam cerca de 30% a 50% do dia se limpando!",
    "O miado do gato é uma ferramenta usada quase exclusivamente para se comunicar com humanos.",
    "O cérebro de um gato é biologicamente mais similar ao de um humano do que ao de um cachorro.",
    "Gatos podem pular até seis vezes a sua própria altura!",
    "A audição de um felino é uma das mais apuradas do reino animal, detectando ultrassons.",
    "O ronrono nem sempre significa felicidade; pode indicar que estão tentando se acalmar ou se curar."
];

const gatoAvatar = document.getElementById('gatoAssistente');
const textoBalao = document.getElementById('textoBalao');

gatoAvatar.addEventListener('click', () => {
    const indiceAleatorio = Math.floor(Math.random() * curiosidades.length);
    textoBalao.innerText = curiosidades[indiceAleatorio];
    
    // Animação de pulo rápido ao clicar
    gatoAvatar.style.transform = "scale(1.3) rotate(-10deg)";
    setTimeout(() => {
        gatoAvatar.style.transform = "none";
    }, 300);
});

// --- CLIQUES NAS RAÇAS ---
document.getElementById('card-persa').addEventListener('click', () => {
    alert('Persa: Conhecido pelo focinho achatado e temperamento extremamente calmo e dócil.');
});
document.getElementById('card-siames').addEventListener('click', () => {
    alert('Siamês: Muito comunicativo, costuma miar alto para conversar com os tutores.');
});
document.getElementById('card-maine').addEventListener('click', () => {
    alert('Maine Coon: Podem chegar a 1 metro de comprimento. São conhecidos como gigantes gentis.');
});
document.getElementById('card-srd').addEventListener('click', () => {
    alert('Vira-lata (SRD): Misturas únicas que geram os gatos mais resistentes, carinhosos e inteligentes.');
});

// --- SISTEMA DE ABAS (TRATAMENTO/CUIDADOS) ---
const botoesAba = document.querySelectorAll('.btn-aba');
const conteudosAba = document.querySelectorAll('.conteudo-aba');

botoesAba.forEach(botao => {
    botao.addEventListener('click', (e) => {
        const idAbaAlvo = e.target.getAttribute('data-aba');

        // Remove a classe ativo de todos os botões e conteúdos
        conteudosAba.forEach(conteudo => conteudo.classList.remove('ativo'));
        botoesAba.forEach(btn => btn.classList.remove('ativo'));

        // Adiciona a classe ativa apenas no elemento clicado e no seu respectivo bloco
        document.getElementById(idAbaAlvo).classList.add('ativo');
        e.target.classList.add('ativo');
    });
});

// --- VALIDAÇÃO DO QUIZ ---
const botoesQuiz = document.querySelectorAll('.btn-opcao');
const resultadoQuiz = document.getElementById('resultadoQuiz');

botoesQuiz.forEach(botao => {
    botao.addEventListener('click', (e) => {
        // Bloqueia cliques adicionais
        botoesQuiz.forEach(btn => btn.disabled = true);

        const elementoClicado = e.target;
        const eCorreto = elementoClicado.classList.contains('opcao-correta');

        resultadoQuiz.style.display = "block";

        if (eCorreto) {
            resultadoQuiz.style.backgroundColor = "#DCFCE7";
            resultadoQuiz.style.color = "#15803D";
            resultadoQuiz.innerText = "🎉 Acertou em cheio! Eles suam pelas patinhas e também regulam a temperatura lambendo os pelos.";
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
