function copyToClipboard() {
    var copyText = document.getElementById("outputText");
    copyText.select();
    copyText.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand("copy");
    alert("¡Texto copiado al portapapeles!");
}

function encrypt() {
    var inputText = document.getElementById("inputText").value;

    // Verificamos que solo se ingresen letras minúsculas sin acentos y sin signos de puntuación
    if (!/^[a-z\sáéíóúüñ]+[^\W\d_]*[!¡?¿.,:;'"()\[\]]?$/.test(inputText)) {
        alert("Error: Solo se permiten letras minúsculas sin acentos y sin signos de puntuación");
        return;
    }

    // Reemplazamos las letras según el método de encriptación
    var outputText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById("outputText").value = outputText;
    document.getElementById("resultTitle").textContent = "Texto encriptado";

    // Limpiamos el texto de entrada
    document.getElementById("inputText").value = "";

    // Cambiar el mensaje de alerta
    alert("Texto encriptado correctamente.");
}

function decrypt() {
    var inputText = document.getElementById("inputText").value;

    // Verificamos que solo se ingresen letras minúsculas sin acentos y sin signos de puntuación
    if (!/^[a-z\sáéíóúüñ]+[^\W\d_]*[!¡?¿.,:;'"()\[\]]?$/.test(inputText)) {
        alert("Error: Solo se permiten letras minúsculas sin acentos y sin signos de puntuación");
        return;
    }

    // Reemplazamos las letras según el método de desencriptación
    
    var outputText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById("outputText").value = outputText;
    document.getElementById("resultTitle").textContent = "Texto desencriptado";

    // Limpiamos el texto de entrada

    document.getElementById("inputText").value = "";
    
    // Cambiar el mensaje de alerta

    alert("Texto desencriptado correctamente.");
}
