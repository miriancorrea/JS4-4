const carros = ["Uno","Fusca","Escort","Gol"];

const conteudo = document.getElementById("conteudo");

function criaSecao(titulo, dadosF)
{
    const secao = document.createElement("div");
    secao.innerHTML = "<h2>" + titulo + "</h2>" + dadosF;
    conteudo.appendChild(secao);
}

// loop while
dados = "";
i = 0;
while(i< 4)
{
   dados += "<p>" + carros[i] + "</p>"; // aqui colocamos o += pois , como vai imprimir varios nomes,se nao coloco esse simbolo , em vez de imprimir nomes diferentes a cada repetiço do codigo , ele ira somente substituir um nome pelo outro a cada repetição.
    i++; //coloquei aqui i++ pois, o I inicial tem valor de 0 , entao vai imprimir a primeira palavra de carros, apos inpresso o I++ vai acrescentar 1 ao valor de minha variavel e vai comecar a ler de novo , entao vai imprimir o nome do segundo carro , quando terminar i++ vai acrescentar mais um ao meu valor , imprimindo o proximo carro , ate que os valores acabe
}
criaSecao("Loop While", dados);


// loop while melhorado, onde usamos length para retornar o numero de elementos, então nap preciosamos contar quantos temos. 
dados = "";
i = 0;
while(i < carros.length) // colocando desta forma eu nao preciso passar quantos arrays temos , ele ira contabilizar sozinho
{
   dados += "<p>" + carros[i] + "</p>"; // aqui colocamos o += pois , como vai imprimir varios nomes,se nao coloco esse simbolo , em vez de imprimir nomes diferentes a cada repetiço do codigo , ele ira somente substituir um nome pelo outro a cada repetição.
    i++; //coloquei aqui i++ pois, o I inicial tem valor de 0 , entao vai imprimir a primeira palavra de carros, apos inpresso o I++ vai acrescentar 1 ao valor de minha variavel e vai comecar a ler de novo , entao vai imprimir o nome do segundo carro , quando terminar i++ vai acrescentar mais um ao meu valor , imprimindo o proximo carro , ate que os valores acabe
}
criaSecao("Loop While melhorado", dados);



// while invertido

dados = "";
i = 0;
do{
    dados += "<p>" + carros[i] + "</p>";
    i++;
} while(i < carros.length)
    criaSecao("Loop While invertido", dados);



// laço de repetição FOR
dados = "";
for(i = 0; i < carros.length; i++)
{
    dados += "<p>" + carros[i] + "</p>"
}
criaSecao("Loop For", dados);


// loop  FOR OF
dados = "";
for(let carro of carros) //aqui ele consegue entender que vai repetir a quantidade de itens que tiver dentro de carros, eu nao preciso definir a quantidade de vezes do loopin manualmente.
{
    dados += "<p>" + carro + "</p>"
}
criaSecao("Loop For of", dados);


// loop FOR IN
let carro1 = {marca:"Ford", modelo:"Ka", ano:"2015"};
let carro2 = {marca:"Fiat", modelo:"Uno", ano:"2000"};

let carros2 = [];
carros2.push(carro1);
carros2.push(carro2);

dados = "";
for(let carro of carros2)
{
    let propriedades = "";

    for(let prop in carro)
    {
        propriedades += carro[prop] + " | ";
    }

    dados +="<p >" + propriedades + "</p>"
}
criaSecao("Loop For in", dados);


// loop FOREACH
dados = "";

carros.forEach((carro) => {
    dados += "<p >" + carro + "</p>"
})
criaSecao("Loop ForEach", dados);
