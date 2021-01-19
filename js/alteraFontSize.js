var documentHtml = document.querySelector("html");

function criaLocalStorage(){
    if(localStorage.length == 0){
        localStorage.setItem("font","Normal")
    }
    else{
        return
    }
}

function carregaFont(){
    let tamanhoDaFont = localStorage.getItem("font");
    if(tamanhoDaFont=="Normal"){
        documentHtml.style.fontSize = "62.5%"
    }
    else if(tamanhoDaFont =="Media"){
        documentHtml.style.fontSize = "70%"
    }
    else if(tamanhoDaFont  == "Grande"){
        documentHtml.style.fontSize = "80%"
    }
    else if(tamanhoDaFont  == "XGrande"){
        documentHtml.style.fontSize = "85%" 
    }
}

function aplicaConfiguracoes(){
    let tamanhoDaFont = document.querySelector("#font")
    localStorage.setItem("font",tamanhoDaFont.value)
}