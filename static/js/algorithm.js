document.getElementById("buscarPalindromos").addEventListener("click",getWords)
let contenedor=document.getElementById("contenedorPalabras")


function getWords(){
    let listaPalindromos=[];
    let words=document.getElementById("textArea").value
    words=words.toLowerCase().replace(/\s/g,"")
    let arrayWords=words.split(",")

    for (const word of arrayWords) {
        if(word!=""){
            if(frasePalindromo(word)==true){
                listaPalindromos.push(word)
            }  
        }
       
    }
    // Create P for each word
    for (const palindromo of listaPalindromos) {
        createDOM(palindromo)
    }
}


function createDOM(word){
    let p=document.createElement("p")
    p.innerText=word
    contenedor.appendChild(p)
}

function frasePalindromo(frase){
    frase=frase.toLowerCase().replace(/\s/g,"")
    fraseReverse=frase.split("").reverse().toString();
  
    for (const key in fraseReverse) {
        fraseReverse=fraseReverse.replace(",","");
    }
 
    let resultado;
    if(frase==fraseReverse){
        // Si el resultado es positivo
        resultado=true;
       
      }
      else{
        // Si el resultado es negativo
        resultado=false;
      }
      return resultado;
}