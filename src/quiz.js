var questionario = [ 
    {
        questao:"O que é e-lixo ?",
        alternativa:[
            "é o lixo doméstico",
            "é o descarte de papel e garrafas plásticas",
            "É o lixo composto de matéria orgânica",
            "São os equipamentos eletrônicos descartados"
        ],
        respostaCorreta:3
    },
    {
        questao:"As placas de circuito impresso (PCI) e os componentes, fazem parte do e-lixo ?",
        alternativa:[
            "Sim",
            "Não",
            "Nem todas",
            "Algumas partes"
        ],
        respostaCorreta:0
    },
    {
        questao:"Qual o local de descarte do e-lixo ?",
        alternativa:[
            "No lixo comum de casa",
            "Nos lixões",
            "Nas lixeiras seletivas",
            "No meio da rua"
        ],
        respostaCorreta:2
    },
    {
        questao:"O descarte incorreto do e-lixo traz danos ao meio ambiente e à saúde humana ?",
        alternativa:[
            "Sim",
            "Não",
            "Depede do local",
            "Nem sempre"
        ],
        respostaCorreta:0
    },
    {
        questao:"O que é gerado da reciclagem de placas de circuitos impresso ?",
        alternativa:[
            "Matéria prima para indústria",
            "Carvão",
            "Contaminação do ar",
            "Dano à saúde humana"
        ],
        respostaCorreta:0
    },
]
var resultado = []
var contNumeroDaQuestao = 0;


function redenrizaQuestionario(){
    let listaAlternativas = document.querySelectorAll(".alternativa")
    let pergunta = document.querySelector(".pergunta")
    let contNumeroDaAlternativa = 0;
    let numeroDaQuestao = document.querySelectorAll(".numeroDaQuestao")
    let contNumeroDaQuestao = 0
    let tapaTudo = document.querySelector(".tapaTudo")

    tapaTudo.style.display = "none"


    resultado.forEach(elemento => {
        numeroDaQuestao[contNumeroDaQuestao].classList.add(elemento)
        contNumeroDaQuestao++
    })

    if(contNumeroDaQuestao >= 5){
        exibeResultado();
        return;
    }
    pergunta.textContent  = questionario[contNumeroDaQuestao].questao

    listaAlternativas.forEach(alternativa => {
        if(questionario[contNumeroDaQuestao].respostaCorreta == contNumeroDaAlternativa){
            alternativa.setAttribute("opcao","certa")
        }
        else{
            alternativa.setAttribute("opcao","errada")
        }
        alternativa.classList.remove("certa")
        alternativa.classList.remove("errada")  
        alternativa.textContent = questionario[contNumeroDaQuestao].alternativa[contNumeroDaAlternativa]
        contNumeroDaAlternativa++;
    })
}

function  responder(element){
    let listaAlternativas = document.querySelectorAll(".alternativa")
    let tapaTudo = document.querySelector(".tapaTudo")

    if(element.getAttribute("opcao") == "certa"){
        element.classList.add("certa")
        resultado.push("certa")
    }
    else{
        element.classList.add("errada")
        resultado.push("errada")
    }

    listaAlternativas.forEach(alternativa => {
        if(alternativa.getAttribute("opcao") == "certa"){
            alternativa.classList.add("certa")
        }
    })
    contNumeroDaQuestao++;
    tapaTudo.style.display = "block"
    setTimeout(redenrizaQuestionario,2000)
}

function exibeResultado(){
    let certa = 0;
    let main = document.querySelector("main");
    resultado.forEach(element => {
        if(element == "certa"){
            certa++;
        }

    })

    let porcentagemCerta = (certa/5)*100;

    main.innerHTML  = `
                <div class="container">
                <div class="content">
                    <h2 class="resultado">Resultado do quiz</h2>
                    <h3 class="pontuacao"><strong>${certa}</strong> repostas corretas de <strong>5</strong></h3>
                    <h3 class="pontuacao">Sua pontuacao foi de <strong>${porcentagemCerta}%</strong></h3>
                    <div class="botoes">
                        <button><a href="../index.html">Voltar</a></button>
                        <button class="refazer">Refazer</button>
                    </div>
                </div>
            </div>
                        `

    let refazer = document.querySelector(".refazer")
    refazer.addEventListener('click', ()=>{
        location.reload();
        return false;   
    })

}