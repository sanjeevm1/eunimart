
let inputBoxes=document.getElementsByTagName("input");
let uploadButton=document.getElementsByTagName("button")[0];

function isEmpty(){

    for(let i=0;i<3;i++){

        if(inputBoxes[i].value.length==0)
        return true
    }

    return false
}

function changeButtonState(){
   
     if(!isEmpty())
     uploadButton.disabled=false

     else
     uploadButton.disabled=true
}

function save(){

    localStorage.setItem("Name",inputBoxes[0].value)
    localStorage.setItem("pno",inputBoxes[1].value)
    localStorage.setItem("Email",inputBoxes[2].value)
}