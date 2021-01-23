window.onload=init


function init(){
  document.getElementById("profileOption").addEventListener("click",profile);
  document.getElementById("algorithmOption").addEventListener("click",algorithm);
}

function profile(){
    window.location.replace("profile.html")
}  
function algorithm(){
    window.location.replace("algorithm.html")
}  