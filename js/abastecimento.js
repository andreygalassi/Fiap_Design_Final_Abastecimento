var oAbastecimentoSelecionado;

$(document).ready(function(){
    
    var aAbastecimentos;
    if (window.localStorage['abastecimentos'] != ""){
        aAbastecimentos = JSON.parse(window.localStorage['abastecimentos'] || '[]') ;
    }else{
        aAbastecimentos = [];        
    }
    atualizaTabela(aAbastecimentos);

    var aPostos;
    if (window.localStorage['postos'] != ""){
        aPostos = JSON.parse(window.localStorage['postos'] || '[]') ;
    }else{
        aPostos = [];        
    }

    $('#btnAdd').click(function(){
       var aAbastecimentos;
        if (window.localStorage['abastecimentos'] != ""){
            aAbastecimentos = JSON.parse(window.localStorage['abastecimentos'] || '[]') ;
        }else{
            aAbastecimentos = [];        
        }
    
        var oPosto;
        $.each(aPostos, function(i, v) {
            if (v.id == $('#posto').val()) {
                oPosto = aPostos[i];
                return ;
            }
        });
        
        var oAbastecimento = {
            id: new Date().getTime(),
            posto: oPosto.descricao,
            data: $('#data').val(),
            km: $('#km').val(),
            litro: $('#litro').val(),
            valorLitro: $('#valorLitro').val(),
            valorAbastecimento: $('#valorAbastecimento').val()
        };

        aAbastecimentos.push(oAbastecimento);

        window.localStorage['abastecimentos'] = JSON.stringify(aAbastecimentos);

        window.location.href="abastecimento.html"; 
    });
    
    var linha = "";
    for(i=0; i<aPostos.length; i++){
        linha += '<option value="'+aPostos[i].id+'">'+aPostos[i].descricao+'</option>';
    }
    $('#posto').append(linha);

    $("#valorAbastecimento").focusin(function() {
        console.log('chegou aqui');
        var litro = $('#litro').val();
        var valor = $('#valorLitro').val();
        var total = litro * valor;
        $( this ).val(total);
    });

function atualizaTabela(aAbastecimentos){

    var linha = "";
    for(i=0; i<aAbastecimentos.length; i++)
    {
        linha += '<tr id='+aAbastecimentos[i].id+'>';
        linha += '<td>'+aAbastecimentos[i].id+'</td>';
        linha += '<td>'+aAbastecimentos[i].posto+'</td>';
        linha += '<td>'+aAbastecimentos[i].data+'</td>';
        linha += '<td>'+aAbastecimentos[i].km+'</td>';
        linha += '<td>'+aAbastecimentos[i].litro+'</td>';
        linha += '<td>'+aAbastecimentos[i].valorLitro+'</td>';
        linha += '<td>'+aAbastecimentos[i].valorAbastecimento+'</td>';
        linha += '</tr>';
    }
    
    $('#tabela_corpo').append(linha);
}

function selecionaLinha(aAbastecimentos){
    var idSelecionado;
    $('table tbody tr').click(function(){
        idSelecionado=$(this).attr('id');

        if (idSelecionado!=null){
            for(i=0; i<aAbastecimentos.length; i++) {
                if (aAbastecimentos[i].id==idSelecionado){
                    //$('#divId').show();
                    oAbastecimentoSelecionado=aAbastecimentos[i];
                    //$('#idLabel').text(aAbastecimentos[i].id);
                    $('#posto').val(aAbastecimentos[i].posto);
                    $('#data').val(aAbastecimentos[i].data);
                    $('#km').val(aAbastecimentos[i].km);
                    $('#litro').val(aAbastecimentos[i].litro);
                    $('#valorLitro').val(aAbastecimentos[i].valorLitro);
                    $('#valorAbastecimento').val(aAbastecimentos[i].valorAbastecimento);
                    console.log(aAbastecimentos[i].id);
                }
            }
        }
    });
}

});

