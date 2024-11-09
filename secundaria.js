const params = new URLSearchParams(window.location.search);
const id = params.get("id")


const pega_json = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}
const montacard = (atleta) =>{
    const cartao = document.createElement("article");
    const nome = document.createElement("h1");
    const imagem = document.createElement("img");
    const descri = document.createElement("p");

    nome.innerHTML = atleta.nome;
    cartao.appendChild(nome);
    
    imagem.src = atleta.imagem;
    cartao.appendChild(imagem);
    
    descri.innerHTML = atleta.detalhes;
    cartao.appendChild(descri);

    cartao.onclick = manipulaClick;

    cartao.dataset.id = atleta.id;
    cartao.dataset.nJogos = atleta.n_jogos;
    cartao.dataset.altura = atleta.altura;

    return cartao;

};



const achaCookie = (chave) =>{
    const lista = document.cookie.split("; ");
    const par = lista.find(
        ( e ) => e.startsWith(`${chave}=`)
    )

    return par.split("=")[1]

}

const dadosSessionStorage = sessionStorage.getItem('dados');
const obj = JSON.parse(dadosSessionStorage)

