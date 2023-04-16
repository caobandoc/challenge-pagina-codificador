const btnEncrypt = document.getElementById("btn-encrypt");
const btnDecrypt = document.getElementById("btn-decrypt");

btnEncrypt.addEventListener("click", encrypt);
btnDecrypt.addEventListener("click", decrypt);

function encrypt() {
  const text = document.getElementById("text").value;
  responseShow(encriptar(text));
}

function decrypt() {
  const text = document.getElementById("text").value;
  responseShow(desencriptar(text));
}

function responseShow(response) {
  const containerNotFound = document.getElementById("not-found");
  containerNotFound.style.display = "none";

  const responseContainer = document.getElementById("response");
  responseContainer.style.display = "block";
  responseContainer.innerHTML = `<p>${response}</p>`;
}

const reglaA = ["a", "e", "i", "o", "u"];
const reglaB = ["ai", "enter", "imes", "ober", "ufat"];

function encriptar(text) {
  let textEncriptado = "";
  for (let caracter of text) {
    const index = reglaA.indexOf(caracter);
    textEncriptado += index !== -1 ? reglaB[index] : caracter;
  }
  return textEncriptado;
}

function desencriptar(text) {
  let textDesencriptado = "";
  for (let i = 0; i < text.length; i++) {
    const index = reglaA.indexOf(text[i]);
    const palabra = index !== -1 ? reglaB[index] : "";
    const palabraLen = palabra.length;
    const indexB = palabra ? reglaB.indexOf(text.substr(i, palabraLen)) : -1;
    textDesencriptado += indexB !== -1 ? reglaA[indexB] : text[i];
    i += indexB !== -1 ? palabraLen - 1 : 0;
  }
  return textDesencriptado;
}

function desencriptar2(text) {
  let textDesencriptado = "";
  for (let i = 0; i < text.length; i++) {
    const index = reglaA.indexOf(text[i]);
    if (index !== -1) {
      const longestElement = reglaB[index].length;
      const palabra = text.substr(i, longestElement);
      const indexB = reglaB.indexOf(palabra);
      if (indexB !== -1) {
        textDesencriptado += reglaA[indexB];
        i += reglaB[indexB].length - 1;
      } else {
        textDesencriptado += text[i];
      }
    }else{
      textDesencriptado += text[i];
    }
  }
  return textDesencriptado;
}