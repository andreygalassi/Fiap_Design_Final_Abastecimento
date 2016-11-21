
var oPostoSelecionado;
$(document).ready(function(){
    $('#divId').hide();

   var aPostos;
    if (window.localStorage['postos'] != ""){
        aPostos = JSON.parse(window.localStorage['postos'] || '[]') ;
    }else{
        aPostos = [];        
    }
    atualizaTabela(aPostos);
    $('#btnAdd').click(function(){
        if (oPostoSelecionado!=null){
            oPostoSelecionado.descricao=$('#descricao').val();
        }else{
            var oPosto = {
                id: new Date().getTime(),
                descricao: $('#descricao').val()
            };

            aPostos.push(oPosto);
        }

        window.localStorage['postos'] = JSON.stringify(aPostos);

        window.location.href="postosCRUD.html"; 
    });
    
    selecionaLinha(aPostos);
                    $('#divId').hide();
});

function atualizaTabela(aPostos){

    var linha = "";
    for(i=0; i<aPostos.length; i++)
    {
        linha += '<tr id='+aPostos[i].id+'>';
        linha += '<td>'+aPostos[i].id+'</td>';
        linha += '<td>'+aPostos[i].descricao+'</td>';
        linha += '</tr>';
    }
    
    $('#tabela_corpo').append(linha);
}

function selecionaLinha(aPostos){
    var idSelecionado;
    $('table tbody tr').click(function(){
        idSelecionado=$(this).attr('id');

        if (idSelecionado!=null){
            for(i=0; i<aPostos.length; i++) {
                if (aPostos[i].id==idSelecionado){
                    $('#divId').show();
                    oPostoSelecionado=aPostos[i];
                    $('#idLabel').text(aPostos[i].id);
                    $('#descricao').val(aPostos[i].descricao);
                    console.log(aPostos[i].id);
                }
            }
        }
    });

}