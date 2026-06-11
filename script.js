// 🔢 CONTADORES ANIMADOS
const counters = document.querySelectorAll(".contador");

counters.forEach(counter => {
    const update = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = target / 100; // controla a velocidade

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(update, 20);
        } else {
            counter.innerText = target;
        }
    };
    update();
});


// 💧 CALCULADORA DE ÁGUA
function calcular() {
    const litros = document.getElementById("litros").value;
    if (!litros || litros <= 0) {
        document.getElementById("resultado").innerText = "Digite um valor válido!";
        return;
    }
    const resultado = litros * 365; // litros por ano
    document.getElementById("resultado")
        .innerText = `Você economiza ${resultado} litros por ano.`;
}


// 🧠 QUIZ INTERATIVO
function resposta(certa) {
    const msg = document.getElementById("mensagem");

    if (certa) {
        msg.innerText = "✅ Correto!";
        msg.style.color = "green";
    } else {
        msg.innerText = "❌ Tente novamente.";
        msg.style.color = "red";
    }
}


// 🌙 MODO ESCURO (alternar ao clicar)
const btnTema = document.getElementById("tema");
btnTema.addEventListener("click", () => {
    document.body.classList.toggle("escuro");

    if (document.body.classList.contains("escuro")) {
        btnTema.innerText = "☀️";
    } else {
        btnTema.innerText = "🌙";
    }
});
