/*
Exemplo Tabuada
*/

//Declaração de uma função
function calculatabuada(){

    //Obtendo do DOM o tbody da tabela
    let tabuada = document.querySelector("#tabuada tbody");
    //Obtendo o Valor A do campo input number e convertendo em número inteiro
    let valorA = parseInt(document.querySelector("#valorA").value);
    //Limpando o conteúdo do tbody
    tabuada.innerHTML = '';
    //Criando um laço de reétição de 0 a 10
    for (let valorB = 0; valorB <=10; valorB++) {

        //Calculando o resultado da linha atual
        let resultado = valorA * valorB;

        //Criando o template das colunas da linha atual
        let template = `
            
                <td>${valorA}</td>
                <td>x</td>
                <td>${valorB}</td>
                <td>=</td>
                <td>${resultado}</td>
            `;
        //Criando o elemento tr
        let tr = document.createElement('tr');
        //Inserindo as colunas na linha
        tr.innerHTML = template;
        //Inserindo a linha na tabela
        tabuada.append(tr);;

    }//Fechando o For

}//Fechando a função

//Chamando a nossa função pela primeira vez
calculatabuada();

//Adicionando o evento de alteração ao campo número
document.querySelector("#valorA").addEventListener('change', calculatabuada);