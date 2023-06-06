function encriptar() {
    let texto = document.getElementById("Itexto").value;
    let mensajemayor = document.getElementById("mensajemayor");
    let mensajemenor = document.getElementById("mensajemenor");
    let muñeco = document.getElementById("muñeco");
    let respuesta = document.getElementById("paraR");
  
    let textoEncriptado = texto
      .replace(/e/gi, "@4%")
      .replace(/i/gi, "##")
      .replace(/a/gi, "&&")
      .replace(/o/gi, "!¡&")
      .replace(/u/gi, "¡&");

  
    if (texto.length != 0) {
      
      document.getElementById("Itexto").value = textoEncriptado;
      mensajemayor.textContent = "Texto encriptado con éxito";
      mensajemenor.textContent = "gracias por confiar en nosotros";
      muñeco.src = "proyectoimg/Muñecoborde.png";
      paraR.textContent = textoEncriptado
    } else {
      
      muñeco.src = "proyectoimg/Muñeco.png";
      mensajemayor.textContent = "Ningún mensaje fue encontrado";
      mensajemenor.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
  
    }
  }

  function desencriptar() {
    let texto = document.getElementById("Itexto").value;
    let mensajemayor = document.getElementById("mensajemayor");
    let mensajemenor = document.getElementById("mensajemenor");
    let muñeco = document.getElementById("muñeco");
    let respuesta = document.getElementById("paraR");
  
    let textoEncriptado = texto
      .replace(/@4%/gi, "e")
      .replace(/##/gi, "i")
      .replace(/&&/gi, "a")
      .replace(/!¡&/gi, "o")
      .replace(/¡&/gi, "u")
      
 

    
      if (texto.length != 0) {
        document.getElementById("Itexto").value = textoEncriptado;
        mensajemayor.textContent = "Texto desencriptado con éxito";
        mensajemenor.textContent = "";
        muñeco.src = "proyectoimg/Muñecoborde.png";
        paraR.textContent = textoEncriptado
      } else {
        muñeco.src = "proyectoimg/Muñeco.png";
        mensajemenor.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        
      }
  }

  function copiar() {
    let texto = document.getElementById("paraR");
    let boton = document.getElementById("copia");

    navigator.clipboard.writeText(texto.textContent);

  
  }