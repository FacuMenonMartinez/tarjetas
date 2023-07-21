// Hago un arreglo para tener las imagenes para generarlas
const avatares = [

];

// Creo objetos con los datos de las imagenes
class AvatarObjeto{
    constructor (genero, img, color){
        this.genero = genero,
        this.img = img,
        this.color = color
    }
}

const femaleBlack = new AvatarObjeto("female", "./recursos/avatar/femaleBlack.png", "Black");
const femaleGreen = new AvatarObjeto("female", "./recursos/avatar/femaleGreen.png", "Green");
const femalePink = new AvatarObjeto("female", "./recursos/avatar/femalePink.png", "Pink");
const femalePurple = new AvatarObjeto("female", "./recursos/avatar/femalePurple.png", "Blue");
const maleBlack = new AvatarObjeto("male", "./recursos/avatar/maleBlack.png", "Black");
const malePink = new AvatarObjeto("male", "./recursos/avatar/malePink.png", "Pink");
const malePurple = new AvatarObjeto("male", "./recursos/avatar/malePurple.png", "Blue");
const maleGreen = new AvatarObjeto("male", "./recursos/avatar/maleGreen.png", "Green");

avatares.push(femaleBlack, femaleGreen, femalePink, femalePurple, maleBlack, malePink, malePurple, maleGreen);


// Traigo los elementos del HTML
const tarjeta = document.getElementById("tarjeta");
const imagen = document.getElementById("imagen");
const descripcion = document.getElementById("descripcion");
const avatarBoton = document.getElementById("avatar");
const volverInicio = document.getElementById("inicio");

// Traigo los botones del HTML
const pinkButton= document.getElementById("color1");
const blueButton= document.getElementById("color2");
const blackButton=document.getElementById("color3");
const greenButton=document.getElementById("color4");

// Declaro la funcion que cambiar los colores
const cambioDeColor = (theme)  =>{
    // Elimino las clases que pueda tener
    tarjeta.classList.remove("tarjetaPink", "tarjetaBlack", "tarjetaGreen", "tarjetaBlue");
    descripcion.classList.remove("descripcionPink", "descripcionBlack", "descripcionGreen", "descripcionBlue")
    avatarBoton.classList.remove("avatarPink", "avatarBlack", "avatarGreen", "avatarBlue");
    volverInicio.classList.remove("avatarPink", "avatarBlack", "avatarGreen", "avatarBlue");



// Cambio de avatar
    const nuevoAvatar = avatares.filter((avatarCambio)=> avatarCambio.color === theme)
    const cambioAvatar = Math.floor(Math.random() * nuevoAvatar.length);

    //  Agrego la clase con el color asignado
     tarjeta.classList.toggle(`tarjeta${theme}`);
     descripcion.classList.toggle(`descripcion${theme}`);
     avatarBoton.classList.toggle(`avatar${theme}`);
     volverInicio.classList.toggle(`avatar${theme}`);

     imagen.src=nuevoAvatar[cambioAvatar].img;

}


// Cambiar imagen de forma aleatoria

avatarAleatorio=()=>{
    const  nuevoAvatarAleatorio = Math.floor(Math.random() * avatares.length);
    imagen.src= avatares[nuevoAvatarAleatorio].img;
}

// Volver a inicio
tarjetaInicio=()=>{
    tarjeta.classList.remove("tarjetaPink", "tarjetaBlack", "tarjetaGreen", "tarjetaBlue");
    descripcion.classList.remove("descripcionPink", "descripcionBlack", "descripcionGreen", "descripcionBlue")
    avatarBoton.classList.remove("avatarPink", "avatarBlack", "avatarGreen", "avatarBlue");
    volverInicio.classList.remove("avatarPink", "avatarBlack", "avatarGreen", "avatarBlue");

}

// Llamo a la funcion con event listener
pinkButton.addEventListener('click',() =>{cambioDeColor("Pink")});
blueButton.addEventListener('click',() =>{cambioDeColor("Blue")});
blackButton.addEventListener('click',() =>{cambioDeColor("Black")});
greenButton.addEventListener('click',() =>{cambioDeColor("Green")});

avatarBoton.addEventListener('click', avatarAleatorio);

volverInicio.addEventListener('click', tarjetaInicio);

