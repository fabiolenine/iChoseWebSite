jQuery( document ).ready(function( $ ) {

	var cmpCdUser = jQuery("#user\\.cdUser");
	var btSubmit = jQuery("#btSubmit");

	cmpCdUser.bind("change", function(event){
		
		var cdUser = cmpCdUser.val();

		if (isEmail(cdUser)) {
			event.preventDefault();
			$('#sucessAlert').slideUp();

		} else {
			event.preventDefault();
			$('#sucessAlert').slideDown();
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