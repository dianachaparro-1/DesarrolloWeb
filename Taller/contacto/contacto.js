function EnviarDatos()
{
    
    var txtnombre = document.getElementById("inputNombre");
    var txtEmail = document.getElementById("inputEmail");
    var txtCelular = document.getElementById("inputCelular");
    var txtMensaje = document.getElementById("inputMensaje");
    
    alert("Nombre: " + txtnombre.value 
        + "\nCorreo: " + txtEmail.value 
        + "\nCelular: " + txtCelular.value 
        + "\nMensaje: " + txtMensaje.value);
}