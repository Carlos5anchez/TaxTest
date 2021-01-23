localStorage = window.localStorage;


document.getElementById("registro-input").addEventListener("click",redirect)
document.getElementById("signupButton").addEventListener("click",signup)

function redirect(){
    window.location.location("index.php")
}

function signup(){
    // Get inputs from html
    let name=document.getElementById("name-registro").value;
    let mail=document.getElementById("email-registro").value;
    let rfc=document.getElementById("rfc-registro").value;
    let pass=document.getElementById("password-registro").value;
    let pass2=document.getElementById("passswordConfirm-registro").value;

    // we need to check if all inputs are full
    if(name && mail && rfc && pass && pass2){
        if(rfc.length<10){
            alert("El rfc esta incorrecto")
        }else{
        // Passwords comparation
        if(pass!=pass2){
            document.getElementById("password-registro").style.border="1px solid red"
            let passsConf=document.getElementById("passswordConfirm-registro")
            passsConf.style.border="1px solid red"
            //Create message to client to say about their pass misstake
            let span= document.createElement("span")
            span.innerText="**Los campos no coinciden"
            
            insertAfter(span,passsConf)
            // Delete de message after 3 seg.
            setTimeout(
                function() {
                
                span.remove()
                }, 1000);
    
        }
        else{
            
            if(localStorage.getItem(rfc) === null){
                localStorage.setItem(rfc, `${name},${mail},${pass}`);
                alert("Registro Completo")
                 window.location.location("index.php")

            }
            else{
                alert("Este RFC ya esta registrado")
            }

           
           
        }
        }
      
    }
    else{
        alert("Campos por rellenar")
    }
    
  

    function insertAfter(newNode, referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }
    
}