const navBarSelection = document.querySelectorAll('.nav-item');
navBarSelection.forEach(item => {
  item.addEventListener('click', function () {
  	switch (item) {
  		case navBarSelection[0]:
  			window.location.replace('index.html');
	    	break;
	    case navBarSelection[1]:
  			window.location.replace('menu.html');
	    	break;
	    case navBarSelection[2]:
  			window.location.replace('contacto.html');
	    	break;
	    case navBarSelection[3]:
  			toggleDarkMode();
	    	break;
  	}
  })
});

function toggleDarkMode(){
	if (!document.body.classList.contains("bg-dark")){
		document.body.classList.add("bg-dark");
		document.body.style.color = "white";
		document.querySelectorAll('.wrapper')?.forEach(item => {
	    	item.style.background = "black";
	    	item.style.color = "white";
    	})
		document.querySelectorAll('.container-fluid.sections')?.forEach(item => {
	    	item.style.background = "black";
	    	item.style.color = "white";
    	})
    document.querySelector(".modo").innerHTML = "<i class='fa fa-toggle-on'></i>";
	}
	else{
		document.body.classList.remove("bg-dark");
		document.body.style.color = "black";
		document.querySelectorAll('.wrapper')?.forEach(item => {
	    	item.style.background = "#fafafa";
	    	item.style.color = "black";
    	})
		document.querySelectorAll('.container-fluid.sections')?.forEach(item => {
	    	item.style.background = "white";
	    	item.style.color = "black";
    	})
    document.querySelector(".modo").innerHTML = "<i class='fa fa-toggle-off'></i>";
	}
 };

document.querySelector('#contact')?.addEventListener('click', event => {
  	window.location.replace('contacto.html');
});



//Validaciones de formulario adicionales
const isRequired = value => value === ''|| value === 'undefined' ? false : true;

const formError = (input, message) => {
	let formField = input.parentElement;
	let field = formField.querySelector('.form-control')
	field.style.border = "1px solid red";
  	let error = formField.querySelector('small');
    error.textContent = message;
}

document.querySelectorAll('.form-control')?.forEach(item => {
  item.addEventListener("input", function () {
  	item.style.border = "1px solid #ced4da";
  	let small = item.parentElement.querySelector('small');
  	small.textContent ='';
  })
});

function validEmail(){
	let email = document.querySelector('#email');
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return(re.test(email.value));
}

function validateFields(){
	let valid = true;
	let fields = document.querySelectorAll('.form-control');
	for (let i = 0; i < fields.length; i++) {
      if (!isRequired(fields[i].value)) {
        formError(fields[i], "Debe completar este campo");
        valid = false;
      }
      if (!validEmail()){
      	formError(fields[1], "Formato de correo inválido");
      	valid = false;
      }
    }
    return valid;
}

document.querySelector('#form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    if (validateFields()){
    	alert("Mensaje enviado con éxito.");
    }
});



    