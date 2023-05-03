/* CARLOS */
document.getElementById("btn__registrarse").addEventListener("click", register);
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
// document.getElementById("register").addEventListener("click", iniciarSesion);

/* EJECUTAR UNA FUNCION CON RESIZE */
window.addEventListener("resize",anchoPagina);




//VARIABLES
var caja_trasera_login = document.querySelector(".caja__trasera-login")
var caja_trasera_register = document.querySelector(".caja__trasera-register")

var contenedor_login_register = document.querySelector(".contenedor__login-register")

var formulario_login = document.querySelector(".formulario__login")
var formulario_register = document.querySelector(".formulario__register")

function iniciarSesion() {
    /* Hacerlo responsive con un if*/
    if (window.innerWidth > 850) {
        /*cuando des click al form register el form register se va a bloquear*/
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "10px";
        formulario_login.style.display = "block";
        /*hacer desaparecer la caja suavemente*/
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    } else {
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
    }


}

function register() {
    if (window.innerWidth > 850) {
        /*cuando des click al form register el form register se va a bloquear*/
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        /*hacer desaparecer la caja suavemente*/
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    } else {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";
    }
}

function anchoPagina(){
    if(window.innerWidth > 850){
        caja_trasera_login.style.display= "block";
        caja_trasera_register.style.display ="block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity ="1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_register.style.display ="none";
        contenedor_login_register.style.left = "0px"
    }
}

/*EVITAR UN ERROR AL CARGAR AL PRINCIPIO*/
anchoPagina();



/* VALIDACION DEL FORMULARIO */ 

var formulario__login = document.getElementById("formulario__login");
var email__login = document.getElementById("email__login");
var password__login =document.getElementById("password__login");

/* variables de register*/
var name__register = document.getElementById("name__register");
var email__register =document.getElementById("email__register");
var password__register = document.getElementById("password__register");
var password2__register =document.getElementById("password2__register");

formulario__login.addEventListener("submit", e =>{
    e.preventDefault();

    checkInputs();
})

formulario__register.addEventListener("submit", e =>{
    e.preventDefault();

    checkInputs();
})
function checkInputs(){
    /* Se usa Trim para eliminar los espacios en blanco*/
    const emailValue = email__login.value.trim();
    const passwordValue = password__login.value.trim();

    /* variables de register*/
    const nameValueRegister = name__register.value.trim();
    const emailValueRegister = email__register.value.trim();
    const passwordRegister = password__register.value.trim();
    const password2Register = password2__register.value.trim();



    /* Validacion para el login*/
    if(emailValue === ""){
        setErrorFor(email__login, 'Ingresar e-mail');
    }else if(!isEmail(emailValue)){
        setErrorFor(email__login, 'Email invalido');
    }else{
        setSuccessFor(email__login);
    }

    if(passwordValue === '' ) {
		setErrorFor(password__login, 'Ingresar una contraseña');
	} else {
		setSuccessFor(password__login);
	}

    /* Register*/
    if(nameValueRegister === '' ) {
		setErrorFor(name__register, 'Ingrese su nombre');
	} else {
		setSuccessFor(name__register);
	}

    if(emailValueRegister === ""){
        setErrorFor(email__register, 'Ingresar e-mail');
        
    }else if(!isEmail(emailValue)){
        setErrorFor(email__register, 'Email invalido');
    }else{
        setSuccessFor(eemail__register);
    }

    if(passwordRegister === '' ) {
		setErrorFor(password__register, 'Ingresar una contraseña');
	} else {
		setSuccessFor(password__register);
	}

    if(password2Register === '') {
		setErrorFor(password2__register, 'Ingresar una contraseña');
	} else if(passwordRegister !== password2Register) {
		setErrorFor(password2__register, 'Las Contraseñas no coinciden');
        alert("Las contraseñas no coinciden");
	} else{
		setSuccessFor(password2__register);
	}



}






function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


// API DE GOOGLE

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }
  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }