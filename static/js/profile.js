window.onload=init
localStorage = window.localStorage;

let rfc;
let pass;
let name1;
let mail;
let web="";
let cel="";
let direccion="";

function init(){
document.getElementById("buttonCloseModal").addEventListener("click",update)
document.getElementById("openUpdateModal").addEventListener("click",llenar)
 
  let user=localStorage.getItem("user").split(",")
  
   name1=user[0];
  mail=user[1];
  rfc=user[3];
  pass=user[2];
  let nameTitle=document.getElementById("nombreUsuario")
  nameTitle.innerText=nameTitle.innerText+ name1
  let rfcTitle=document.getElementById("rfcUsuario")
  rfcTitle.innerText=rfcTitle.innerText+ rfc
  let mailTitle=document.getElementById("mailUsuario")
  mailTitle.innerText=mailTitle.innerText+ mail

  if(user.length>4){
   web=user[4];
    cel=user[5];
     dirreccion=user[6];

    let webTitle=document.getElementById("webUsuario")
    webTitle.innerText=webTitle.innerText+ web
  let celTitle=document.getElementById("celUsuario")
  celTitle.innerText=celTitle.innerText+ cel
  let dirreccionTitle=document.getElementById("direccionUsuario")
  dirreccionTitle.innerText=dirreccionTitle.innerText+ dirreccion
 }


}

function llenar(){
    document.getElementById("nameUpdate").value=name1
    document.getElementById("mailUpdate").value=mail
    document.getElementById("rfcUpdate").value=rfc
    document.getElementById("passUpdate").value=pass
    document.getElementById("webUpdate").value=web
    document.getElementById("TelefonoUpdate").value=cel
    document.getElementById("direccionUpdate").value=dirreccion
    
  
}
function update(){
    let newUser= document.getElementById("nameUpdate").value
    let newMail= document.getElementById("mailUpdate").value
    let newrfc= document.getElementById("rfcUpdate").value
    let newpass= document.getElementById("passUpdate").value
    let newpass2= document.getElementById("pass2Update").value

    let web= document.getElementById("webUpdate").value
    let telefono= document.getElementById("TelefonoUpdate").value
    let direccion= document.getElementById("direccionUpdate").value

    if(newUser&&newMail&&newpass&&newpass2&&newrfc){
     if(newpass===newpass2){
        localStorage.setItem(newrfc,`${newUser},${newMail},${newpass}`)
        localStorage.setItem("user",`${newUser},${newMail},${newpass},${newrfc},${web},${telefono},${direccion}`)
        document.getElementById("closeImg").click();
        alert("Se actualizo correctamente")
        location.reload();
     }
     else{
         alert("Las contraseñas no coinciden")
     }
        

    }else{
        alert("Faltan campos por llenar")
    }
    
    
}