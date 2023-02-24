
function login(){
    
    alert("saved");

    sessionStorage.setItem("Name",inputBoxes[0].value)
    sessionStorage.setItem("pno",inputBoxes[1].value)
    sessionStorage.setItem("Email",inputBoxes[2].value)

    redirect("home.html");
}


function logout(){

    sessionStorage.clear();
    redirect("login.html")
}