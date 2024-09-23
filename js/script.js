let servicos = ["Imigração", "Vistos", "Documentos", "Jurídicos", "Suporte e Consultoria"];

const setaDireita = document.querySelector(".div_setas__img--seta_direita");
const setaEsquerda = document.querySelector(".div_setas__img--seta_esquerda");
const divServico = document.querySelectorAll(".div_servicos2");
const titulo_servico = document.querySelector("#titulo_servico");

setaDireita.addEventListener("click", function () {
    for (let i = 0; i < servicos.length; i++) {
        if (titulo_servico.textContent == servicos[i]) {
            if (i != servicos.length - 1) {
                titulo_servico.textContent = servicos[i + 1];

                divServico[i].style.display = "none";
                divServico[i + 1].style.display = "flex";

                break;
            }
            else if (i == servicos.length - 1) {
                titulo_servico.textContent = servicos[0];

                divServico[i].style.display = "none";
                divServico[0].style.display = "flex";

                break;
            }
        }
    }
});

setaEsquerda.addEventListener("click", function () {
    for (let i = 0; i < servicos.length; i++) {
        if (titulo_servico.textContent == servicos[i]) {
            if (i != 0) {
                titulo_servico.textContent = servicos[i - 1];

                divServico[i].style.display = "none";
                divServico[i - 1].style.display = "flex";

                break;
            }
            else if (i == 0) {
                titulo_servico.textContent = servicos[servicos.length - 1];

                divServico[i].style.display = "none";
                divServico[servicos.length - 1].style.display = "flex";

                break;
            }
        }
    }
});