
function redirect(path){
    window.location.href="/"+path
}

function checkIfLogin(){

    if(sessionStorage.getItem("Name")==undefined){
        alert("Please login first")
        redirect("login.html")
        return false;
    }

    return true;

}