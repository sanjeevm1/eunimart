
async function displayUsers(){

    if(!checkIfLogin())return;

    let data=await getUsers()
    console.log(data)
    
    for(let datum of data.data){
        let li=document.createElement("li");
        let link=document.createElement("a");
        link.href="/view.html?id="+datum["id"]
        link.innerText=datum["first_name"]+" "+datum["last_name"]
        li.appendChild(link)
        document.getElementById("list").appendChild(li)
    }
    
}


async function displayUser(){

    if(!checkIfLogin())return;
    let id=location.search.substring(4)

    let data=await getUser(id)
    
    document.write(JSON.stringify(data.data))
    
}