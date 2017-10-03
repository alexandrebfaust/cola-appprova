if(window.location.href.indexOf("appprova") > -1) {

   document.getElementsByClassName("trail-info__item")[0].innerHTML+= "<div style='color:#000;display:scroll;position:fixed;bottom:0px;right:1px;'><button id='on' style='background-color:#0f0;'>On</button><button id='off' style='background-color:#f00;'>Off</button></div>";

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