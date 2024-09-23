function trocarTexto(indice, novoIndice, div, direcao) {
    const slideOutClass = direcao === 'direita' ? 'slide-out-right' : 'slide-out-left';
    const slideInClass = direcao === 'direita' ? 'slide-in-right' : 'slide-in-left';

    titulo_servico.classList.add(slideOutClass);

    const servicoAtual = document.querySelector(".div_servicos2#servico_" + indice);
    servicoAtual.classList.add(slideOutClass);

    setTimeout(() => {
        titulo_servico.textContent = servicos[novoIndice];

        titulo_servico.classList.remove(slideOutClass);
        titulo_servico.classList.add(slideInClass);

        setTimeout(() => {
            titulo_servico.classList.remove(slideInClass);
        }, 300);

        servicoAtual.style.display = "none";
        div.style.display = "flex";

        servicoAtual.classList.remove(slideOutClass);
        div.classList.add(slideInClass);

        setTimeout(() => {
            div.classList.remove(slideInClass);
        }, 300);

    }, 300);
}


let servicos = ["Imigração", "Vistos", "Documentos", "Jurídicos", "Suporte e Consultoria"];

const setaDireita = document.querySelector(".div_setas__img--seta_direita");
const setaEsquerda = document.querySelector(".div_setas__img--seta_esquerda");
const divServico = document.querySelectorAll(".div_servicos2");
const titulo_servico = document.querySelector("#titulo_servico");

setaDireita.addEventListener("click", function () {
    for (let i = 0; i < servicos.length; i++) {
        if (titulo_servico.textContent == servicos[i]) {
            if (i != servicos.length - 1) {
                trocarTexto(i, i + 1, divServico[i + 1], 'direita');

                break;
            }
            else if (i == servicos.length - 1) {
                trocarTexto(i, 0, divServico[0], 'direita');

                break;
            }
        }
    }
});

setaEsquerda.addEventListener("click", function () {
    for (let i = 0; i < servicos.length; i++) {
        if (titulo_servico.textContent == servicos[i]) {
            if (i != 0) {
                trocarTexto(i, i - 1, divServico[i - 1], 'esquerda');

                break;
            }
            else if (i == 0) {
                trocarTexto(i, servicos.length - 1, divServico[servicos.length - 1], 'esquerda');

                break;
            }
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const idiomaSelect = new Choices('#idioma-select', {
        searchEnabled: false,  
        itemSelectText: '',    
    });
});