
  

class alumnos {
    constructor(idUsuario, nombreCompleto, edad, altura, peso, locacion, fechaDeInicio, programa, URL) {
        this.idUsuario = idUsuario;
        this.nombreCompleto = nombreCompleto;
        this.edad = edad;
        this.altura = altura;
        this.peso = peso
        this.locacion = locacion;
        this.fechaDeInicio = fechaDeInicio;   
        this.programa = programa;
        this.avatar = URL;
    }
 
 
 }

 const alumnosDatos = [];


alumnosDatos.push(
  
   new alumnos (1, "Ezequiel Vazquez", 23, 1.80, 81, "Palermo", "23/01/2020", "fitboxing", "imagenes/user2.png"),
   new alumnos (2, "Lucia Ramirez", 30, 1.65, 70, "Puerto Madero", "16/02/2020", "fuerza y resistencia", "imagenes/woman.png"),
   new alumnos (3, "Sol Valiante", 23, 1.70,  77, "Recoleta","09/05/2020", "funcional", "imagenes/woman2.svg"),
   new alumnos (4, "Lucas Rodriguez", 35, 1.73, 84, "Recoleta", "03/06/2020", "funcional", "imagenes/user.png"),
   new alumnos (5, "Matias Solis", 25, 1.76, 88, "Congreso", "15/10/2020","fitboxing", "imagenes/user2.png"), 

)







function buscar(){
    for (let alumno of alumnosDatos){
      if(alumno.idUsuario == (document.getElementById("selector").value)){
        document.getElementById("nombreUsuario").value = alumno.nombreCompleto;
        document.getElementById("edadUsuario").value = alumno.edad;
        document.getElementById("alturaUsuario").value = alumno.altura;
        document.getElementById("pesoUsuario").value = alumno.peso;
        document.getElementById("locacionUsuario").value = alumno.locacion;
        document.getElementById("inicioUsuario").value = alumno.fechaDeInicio;
        document.getElementById("programaUsuario").value = alumno.programa;
        document.getElementById("avatar").src = alumno.avatar;
       

      } 
    }
  }

 
$( document ).ready(function() {
$(".main").hide();
 


  $("#btnBuscar").click(() => { 
    $(".main").slideDown(2000);
    $("#avatar").fadeIn();
  });


  $ ('#btnBuscar').on('click', function(){

  buscar();

})
});




// pasando a JSON el array de Alumnos y guardando en un localStorage
localStorage.setItem("listado", JSON.stringify(alumnosDatos));


//mostrando el array guardado como string en la consola
console.log(localStorage.getItem("listado"))


//parseando el array que fue pasado a stirng
let alumnosParseados = JSON.parse(localStorage.getItem("listado"))
console.log(alumnosParseados);


