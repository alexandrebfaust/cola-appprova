if(window.location.href.indexOf("appprova") > -1) {

var version = "5";
var url = document.URL;

   document.getElementsByClassName("trail-info__item")[0].innerHTML+= "<div style='color:#000;display:scroll;position:fixed;bottom:0px;right:1px;'><button id='on' style='background-color:#0f0;'>On</button><button id='off' style='background-color:#f00;'>Off</button></div>"; 
   document.getElementsByClassName("trail-info__item")[0].innerHTML+= "<a target='_blank' href='https://github.com/alexandrebfaust/cola-appprova'><img src='http://appprova.projeto.cf/verifica.php?v="+version+"&url="+url+"'></a>";

   $(document).ready(function(){
	   $('#on').click( function() {
	   	document.getElementsByClassName("question").contentEditable='true'; 
	    document.designMode='on';
	   });
	});

	$(document).ready(function(){
	   $('#off').click( function() {
	   	document.getElementsByClassName("question").contentEditable='false'; 
	    document.designMode='off';
	   });
	});

}
