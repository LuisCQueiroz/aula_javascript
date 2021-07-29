
function clicou(){
    document.getElementById("agradecimento").innerHTML ="<b>Obrigado por clicar</b>";
}

function redirecionar(){
    window.open("https://globo.com/");
    window.location.href="https://globo.com/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML ="<b>Obrigado por passar o mouse</b>";
    elemento.innerHTML = "<b>Obrigado por passar o mouse</b>";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML ="<b>Passe o mouse aqui</b>";
    elemento.innerHTML = "<b>Passe o mouse aqui</b>";
}

function load() {
    alert("Página Carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}



/* Funções
function soma(n1,n2){
    return n1+n2;
}
var num1 = parseInt(prompt("Informe o primeiro número:")) //Como número recebido é string o parseint converte para inteiro
var num2 = parseInt(prompt("Informe o segundo número:"))

alert("A soma dos dois números é: " + soma(num1,num2));

function validaIdade(idade){
    var validar;
    if (idade>=18){
        validar = true
    }else{
        validar = false
    }
    
    return validar;

}
var idade = prompt("Qual a sua idade?")
console.log(validaIdade(idade));
*/


/*Condicionais, laços de repetição e date
var d = new Date();
alert(d);
alert(d.getMonth()+1); //apresenta o mês (+1 para apresentar o mês correto)
alert(d.getMinutes()); //apresenta os minutos da data atual
alert(d.getHours()); // apresenta a hora atual
*/

/* for
var count;
for(count=0; count <=5; count++){
    alert(count)
}
*/

/* while //Enquanto
var count = 0;
while(count <= 5) {
    console.log(count);
    count = count+1;
}
*/
/* if //se
var idade = prompt("Qual a sua idade?");
if (idade >=18){
    alert("Maior de idade");
}else{
    alert("Menor de Idade");
}
*/
/*Trabalhando com Dicionário
var frutas = [{nome:"maça", cor:"vermelha"},{nome:"laranja", cor:"laranja"}]
console.log(frutas);
alert(frutas[1].nome);
*/
/*trabalhando com lista
var lista = ["maçã","pera","laranja"]
lista.push("uva"); // Adiciona um elemento no fim da lista
//lista.pop(); // remove o íltmo elemento
console.log(lista);
console.log(lista[1]); // apresenta o elemento número um da lista
console.log(lista.length); // apresenta a quantidade de elementos da lista
console.log(lista.reverse()); // apresenta a lista de forma inversa
console.log(lista.toString()) // apresenta a lista em forma de string
console.log(lista.join("-")); // substitui a , por -
*/

//var nome = "Luis Carlos de Queiroz";  //atribui à variavel nome o texto entre aspas
//var idade = 52;
//var idade2 = 10;
//alert(nome + " tem " + idade + " anos."); //apresenta a mensagem substituindo as variáveis
//alert (idade+idade2);
//console.log(nome);
//console.log(idade + idade2);
//var n1 = 5;
//var n2 = 10;
//var frase = "Japão é o melhor time";
//console.log(n1*n2);
//console.log(frase.toLowerCase());  // converte o texto em minúscula 
//alert(frase.replace("Japão", "Brasil")); //substitui Japão por Brasil na variável frase