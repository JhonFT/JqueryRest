let $ = require("jquery");


function make_base_auth() {
  var tok = "pruebas" + ':' + "simple";
  var hash = btoa(tok);
  return "Basic " + hash;
}

$.ajax({
	url:"http://localhost:8080/javaRest/recursos/rest/user",
	beforeSend: function (xhr){ 
        xhr.setRequestHeader('Authorization', make_base_auth()); 
    },
	success: function(data, status, xhr){
		var elements = [];
		data.forEach(user =>{
			let text =  `<p> <b>Nombre:</b> ${user.dsName} <br />
			<b>Apellido:</b> ${user.dsLastName}  <br />
			<b>NickName:</b> ${user.dsNickName} </p>` ;
			$('.cuerpo').append(text);
		});

		
	}
});