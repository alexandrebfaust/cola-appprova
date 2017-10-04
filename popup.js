/* Verifica atualização */
var version = "4";
var url = document.URL;
document.getElementById('atualizacao').innerHTML = "<a target='_blank' href='https://github.com/alexandrebfaust/cola-appprova'><img src='http://appprova.projeto.cf/atualizacao.php?v="+version+"&url="+url+"'></a>";