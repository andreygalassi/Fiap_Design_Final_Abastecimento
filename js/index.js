$(document).ready(function(){
    var aDespesas;
    if (window.localStorage['despesas'] != "")
    {
        aDespesas = JSON.parse(window.localStorage['despesas'] || '[]') ;
    }
    else
    {
        aDespesas = [];        
    }
    
    var linha = "";
    for(i=0; i<aDespesas.length; i++)
    {
        linha += '<tr>';
        linha += '<td><div class="glyphicon '+aDespesas[i].icone+'"></div>'+aDespesas[i].tipo+'</td>';
        linha += '<td>'+aDespesas[i].data+'</td>';
        linha += '<td>'+aDespesas[i].nome+'</td>';
        linha += '<td>'+('R$ '+aDespesas[i].valor).replace(".",",")+'</td>';
        linha += '<td><div class="glyphicon glyphicon-trash clicavel" id="'+aDespesas[i].id+'"></div></td>';
        linha += '</tr>';
    }
    
    $('#tabela_corpo').append(linha);
    
    //Programação do apagar...
    $('.glyphicon-trash').click(function(){
        for(i=0; i< aDespesas.length; i++)
        {
            if(aDespesas[i].id == $(this).attr('id'))
            {
                aDespesas.splice(i, 1);
            }
        }
        window.localStorage['despesas'] = JSON.stringify(aDespesas);
        
        $(this).parent().parent().hide();
    });
});

/*window.onload = function() {
   //comandos Javascript.
    var oLixinho = document.getElementById("lixinho");
    console.log(oLixinho); 
    
    oLixinho.onclick = function() {
        window.alert("apagar!");
    }
}*/