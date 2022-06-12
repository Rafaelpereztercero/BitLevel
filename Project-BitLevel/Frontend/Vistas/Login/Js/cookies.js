
function crear(token){
    document.cookie = "sessionStorage="+token+" ; max-age=3600; path=/";

}
function eliminar(){

    document.cookie = "sessionStorage=;max-age=0;path=/";
 
    window.location.reload();

}