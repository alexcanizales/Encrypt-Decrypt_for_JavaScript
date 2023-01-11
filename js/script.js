/**
 * e -----> "enter"
 * i -----> "imes"
 * a -----> "ai"
 * o -----> "ober"
 * u -----> "ufat"
 */
document
  .getElementById("encriptar")
  .addEventListener("click", function encriptar() {
    var palabra = document.getElementById("caja-texto").value.toLowerCase();

    if (palabra == 0) {
      Swal.fire({
        icon: "warning",
        title: "Opps...",
        text: "Ingrese una palabra a encriptar",
        confirmButtonColor: "#ff0000",
      });
    } else if(/[\u00C0-\u017F]/.test(palabra)){
      Swal.fire({
        icon: "warning",
        title: "Opps...",
        text: "No puedes ingresar palabras con acentos!",
        confirmButtonColor: "#ff0000",
      });
    }else{
      var palabra_encriptada = palabra.replace(/e/gim, "enter");
      var palabra_encriptada = palabra_encriptada.replace(/i/gim, "imes");
      var palabra_encriptada = palabra_encriptada.replace(/a/gim, "ai");
      var palabra_encriptada = palabra_encriptada.replace(/o/gim, "ober");
      var palabra_encriptada = palabra_encriptada.replace(/u/gim, "ufat");

      document.getElementById("muñeco").style.display = "none";
      document.getElementById("palabra_uno").innerHTML = palabra_encriptada;
      document.getElementById("palabra_dos").style.display = "none";
      document.getElementById("copiar").style.display = "show";
      document.getElementById("copiar").style.display = "inherit";
    }
  });

document
  .getElementById("desencriptar")
  .addEventListener("click", function desencriptar() {
    var palabra = document.getElementById("caja-texto").value.toLowerCase();

    if (palabra == 0) {
      Swal.fire({
        icon: "warning",
        title: "Opps...",
        text: "Ingrese una palabra a desencriptar!",
        confirmButtonColor: "#ff0000",
      });
    } else {
      var palabra_encriptada = palabra.replace(/enter/gim, "e");
      var palabra_encriptada = palabra_encriptada.replace(/imes/gim, "i");
      var palabra_encriptada = palabra_encriptada.replace(/ai/gim, "a");
      var palabra_encriptada = palabra_encriptada.replace(/ober/gim, "o");
      var palabra_encriptada = palabra_encriptada.replace(/ufat/gim, "u");

      document.getElementById("muñeco").style.display = "none";
      document.getElementById("palabra_uno").innerHTML = palabra_encriptada;
      document.getElementById("palabra_dos").style.display = "none";
      document.getElementById("copiar").style.display = "show";
      document.getElementById("copiar").style.display = "inherit";
    }
  });

document.getElementById("copiar").addEventListener("click", function copiar() {
  var palabra_copiada = document.getElementById("palabra_uno").textContent;
  navigator.clipboard.writeText(palabra_copiada).then(() => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
    Toast.fire({
      icon: "success",
      title: "Texto Copiado!",
    });
  });
});

function  limpiar(){
  document.getElementById("caja-texto").reset();
}

outputResponse.innerHTML ='<div class="mensaje"><label id="palabra_dos" class="mensaje-dos">${mensaje}</label></div>';
