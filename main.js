const form = document.getElementById('form-atividade');
const imgAprovado ='<img src="./images/aprovado.png" alt="Emoji celebrando"/>';
const imgReprovado ='<img src="./images/reprovado.png" alt="Emoji decepcionado"/>';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt('Digite a nota mínima:'));

let linhas = ''; // Para que receba mais de uma nota e diciplina,precisa estar fora da função para que funcione e nao resete 


form.addEventListener('submit', function(e){
    e.preventDefault(); //Tirar o reload da pagina toda vez que clica no botão submit (adicionar+)   
    adicionaLinha(); //Função abaixo que adiciona a linha da disciplina + nota 
    atualizaTabela(); //Função para que limpe os valores colocados assim que der Adicione+ (botao)
    atualizaMediaFinal();
});


function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade'); //Input do nome
    const inputoNotaAtividade = document.getElementById('nota-atividade');//Input da atividade

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida`);
        //Alerta caso coloque o mesmo nome da matéria
    }else{
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputoNotaAtividade.value));

        let linha = '<tr>'; //Feita condição igual do html mas com os valores do JS 
        //+= é concatenação como fosse (linha = linha + 'Outro valor')
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputoNotaAtividade.value}</td>`;
        linha += `<td>${inputoNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado }</td>`; // ? = IF : = Else (condição simples)
        linha += `</tr>`;

        linhas += linha; // concatenação entre linhas e linha (linhas = linha + linhas)

    }

    
    
    inputNomeAtividade.value=''; 
    inputoNotaAtividade.value='';
};

function atualizaTabela(){
    const corpoDaTabela = document.querySelector('tbody'); //selecionando tag do html onde estão os TDs e Tr para implantar a condiçao feita acima 
    corpoDaTabela.innerHTML = linhas; //Inserir o conteúdo dentro da TAG
    //Para limpar o campo(input) depois que clicar no adicionar(submit-button)
}

function atualizaMediaFinal(){ //aparecer o número da média e o aprovação ou rejeição
   const mediaFinal = calculandoMediaFinal();
   document.getElementById('media-final-valor').innerHTML = mediaFinal;
   document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ?spanAprovado:spanReprovado;

}

function calculandoMediaFinal(){ // conta para calcular a média 
    let somaDasNotas =0;
    //Soma das notas
    for (let i = 0; i<notas.length; i++){
        somaDasNotas += notas[i];
    }
    //divisão delas por 2
    return media = somaDasNotas / notas.length;

    
}