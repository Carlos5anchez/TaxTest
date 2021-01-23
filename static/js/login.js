localStorage = window.localStorage;


document.getElementById("registro-input").addEventListener("click",redirect)
document.getElementById("login-input").addEventListener("click",login)
document.getElementById("showPass").addEventListener("click",showPass)

function redirect(){
    window.location.replace("signup.html")
}

function login(){
    let flag=false;
   let mail= document.getElementById("loginMail").value;
   let pass= document.getElementById("loginPass").value;

    if(mail && pass){
        const usuarios=Object.entries(localStorage);
      if(usuarios.length>0){
          // Iteracion para la simmuladcion de BD
          for (const usuario of usuarios) {
            let userData= usuario[1].split(",")
            let userlog=[...userData]
   
            if(mail===userData[1]){
                if(userData[2]==pass){
                    
                    userlog.push(usuario[0])
                    flag=false;
                    localStorage.setItem("user",userlog)
                    console.log(userlog)
                    window.location.replace("dashboard.html")
                    break;
                    
                }
                else{
                    flag=true;
                }
               
            }
            else{
                flag=true;
            }
            
        }if(flag==true){
            document.getElementById("modalData").click()
        }
        
      }else{
        document.getElementById("modalData").click()
      }
        
    }
    else{
        document.getElementById("modalData").click()
    }
  
   
}

function showPass(){
    var x = document.getElementById("loginPass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
