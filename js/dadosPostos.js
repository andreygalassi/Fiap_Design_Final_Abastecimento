
$(document).ready(function(){
    var aPostos;
    var aAbastecimento;
    if (window.localStorage['postos'] != ""){
        aPostos = JSON.parse(window.localStorage['postos'] || '[]') ;
    }else{
        aPostos = [];        
    }
    if (window.localStorage['abastecimentos'] != ""){
        aAbastecimento = JSON.parse(window.localStorage['abastecimentos'] || '[]') ;
    }else{
        aAbastecimento = [];        
    }
    atualizaTabela(aAbastecimento);
});

function atualizaTabela(aAbastecimento){

    var aDados;
    var linha = "";
    var mDados = new Map();
    for(i=0; i<aAbastecimento.length; i++) {
    console.log(aAbastecimento[i].posto);
    console.log(mDados.has(aAbastecimento[i].posto));
        if (mDados.has(aAbastecimento[i].posto)){
            mDados.get(aAbastecimento[i].posto).totalGasto+=parseInt(aAbastecimento[i].valorAbastecimento);
            mDados.get(aAbastecimento[i].posto).totalAbastecido+=parseInt(aAbastecimento[i].litro);
        }else{
            var oDados = {
                posto: aAbastecimento[i].posto,
                totalGasto: parseInt(aAbastecimento[i].valorAbastecimento),
                totalAbastecido: parseInt(aAbastecimento[i].litro)
            };
            mDados.set(aAbastecimento[i].posto, oDados);
        }

    }
    for(i=0; i<mDados.size; i++) {
        var oDado = mDados.values().next().value;
        linha += '<tr>';
        linha += '<td>'+oDado.posto+'</td>';
        linha += '<td>'+oDado.totalGasto+'</td>';
        linha += '<td>'+oDado.totalAbastecido+'</td>';
        linha += '</tr>';
        $('#tabela_corpo').append(linha);
    }

    
}