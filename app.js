let nomeAmigo = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');
let arrayAmigos = [];
let li = '';
let ul = '<ul>';
let indice = 0;
indice = parseInt(indice);

function adicionarAmigo() {
    if (nomeAmigo.value) {
        arrayAmigos.push(nomeAmigo.value);
        li = `<li>${arrayAmigos[indice]}</li>`;
        ul += li;
        listaAmigos.innerHTML = ul;
        nomeAmigo.value = '';
        resultado.innerHTML = '';
        indice += 1;
    } else {
        listaAmigos.innerHTML = ul;
        resultado.innerHTML = 'precisa inserir um amigo...';
    }
}

function sortearAmigo() {
    if (arrayAmigos.length) {
        listaAmigos.innerHTML = '';


        let indiceAleatorio = Math.floor(Math.random() * arrayAmigos.length);
        resultado.innerHTML = arrayAmigos[indiceAleatorio];
        
        arrayAmigos = [];
        ul = '';
    } else {
        resultado.innerHTML = 'não existem amigos para o sorteio...';
    }
}