
$(document).ready(function(){

    var aAbastecimentos;
    var aMedias=[];
    if (window.localStorage['abastecimentos'] != ""){
        aAbastecimentos = JSON.parse(window.localStorage['abastecimentos'] || '[]') ;
    }else{
        aAbastecimentos = [];        
    }

    for(i=1; i<aAbastecimentos.length; i++){
        var oMedia = {
            data: aAbastecimentos[i].data,
            kmRodado: aAbastecimentos[i].km-aAbastecimentos[i-1].km,
            litros: aAbastecimentos[i].litro,
            custo: aAbastecimentos[i].valorAbastecimento,
            kmPorLitro: (aAbastecimentos[i].km-aAbastecimentos[i-1].km)/aAbastecimentos[i].litro,
            eficiencia: ((aAbastecimentos[i].km-aAbastecimentos[i-1].km)/aAbastecimentos[i].litro)*aAbastecimentos[i].valorAbastecimento
        }
        aMedias.push(oMedia);
    }
    atualizaTabela(aMedias);
});

function atualizaTabela(aMedias){

    var linha = "";
    for(i=0; i<aMedias.length; i++)
    {
        linha += '<tr>';
        linha += '<td>'+aMedias[i].data+'</td>';
        linha += '<td>'+aMedias[i].kmRodado+'</td>';
        linha += '<td>'+aMedias[i].litros+'</td>';
        linha += '<td>'+aMedias[i].custo+'</td>';
        linha += '<td>'+aMedias[i].kmPorLitro+'</td>';
        linha += '<td>'+aMedias[i].eficiencia+'</td>';
        linha += '</tr>';
    }
    
    $('#tabela_corpo').append(linha);
}