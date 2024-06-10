var numCartao = document.getElementById("num")
var validade = document.getElementById("validade")
var cvc = document.getElementById("cvc")

const images = ["./imagens/1989.jpg", "./imagens/evermore.jpg", "./imagens/lover.jpg", "./imagens/midnights.jpg", "./imagens/red.jpg", "./imagens/rep.jpg", "./imagens/speaknow.jpg", "./imagens/ts.jpg", "./imagens/ttp.jpg"]

function sortear(){   

    if(numCartao.value == "" || validade.value == "" || cvc.value == ""){
        alert("Não deixa os campos vazios, bobona")
    }else {
        var num = Math.floor(Math.random()*9);
        var img = Math.round(num);
        
        document.getElementById("fodase").src=images[img];
    }
}