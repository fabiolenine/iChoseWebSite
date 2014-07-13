jQuery( document ).ready(function( $ ) {

	var cmpCdUser = jQuery("#user\\.cdUser");
	var btSubmit = jQuery("#btSubmit");

    cmpCdUser.bind("keyup", function(event){
		
        var cdUser = cmpCdUser.val();

		if  (isEmail(cdUser)) {
			// alert("Maior que 3 "+deSenha.length);
			btSubmit.removeAttr("disabled");
		} else {
			// alert("Menor que 3 "+deSenha.length);
			btSubmit.attr("disabled", "disabled");

		}
	});
    
});

function isEmail(email){
    var exclude=/[^@\-\.\w]|^[_@\.\-]|[\._\-]{2}|[@\.]{2}|(@)[^@]*\1/;
    var check=/@[\w\-]+\./;
    var checkend=/\.[a-zA-Z]{2,3}$/;
    if(((email.search(exclude) != -1)||(email.search(check)) == -1)||(email.search(checkend) == -1)){return false;}
    else {return true;}
}