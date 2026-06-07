const formulario = document.querySelector(".busca");

const botoes = document.querySelectorAll(".btn-saiba");
const setas = document.querySelectorAll(".setas");

const avaliacoes = [
    {
        nome: "Patricia",
        profissao: "Jornalista",
        foto: "assets/foto.jpg",
        texto: "Excelente experiência de viagem!"
    },
    {
        nome: "Carlos",
        profissao: "Professor",
        foto: "assets/foto2.jpg",
        texto: "Organização impecável e ótimo atendimento"
    },
    {
        nome: "Ana",
        profissao: "Designer",
        foto: "assets/foto3.jpg",
        texto: "Foi a melhor viagem que já fiz."
    }
];

let indice = 0;

const foto = document.getElementById("foto-cliente");
const nome = document.getElementById("nome-cliente");
const texto = document.getElementById("texto-cliente");

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    const destino = document.querySelector("#destino").value;

    if(destino === ""){
        alert("Digite um destino!");
        return;
    }

    alert(`Buscando viagens para ${destino}`);
});

botoes.forEach(botao => {
    botao.addEventListener("click", () =>{
        alert("Mais informações em breve!")
    })
})

function atualizarCliente(){
    foto.src = avaliacoes[indice].foto;

    nome.innerHTML = `${avaliacoes[indice].nome}, <span>${avaliacoes[indice].profissao}</span>`
    texto.textContent = avaliacoes[indice].texto;
}

setas[0].addEventListener("click", () => {
    indice--;

    if(indice < 0){
        indice = avaliacoes.length - 1;
    }

    atualizarCliente();
});

setas[1].addEventListener("click", () => {
    indice++;

    if(indice >= avaliacoes.length){
        indice = 0;
    }

    atualizarCliente();
});
