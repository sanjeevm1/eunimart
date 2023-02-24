

async function getUsers(){
    
    try{
      let resp=await fetch("https://reqres.in/api/users")
      return await resp.json()
    }

    catch(err){
        alert("Server Error")
    }

}


async function getUser(id){

    try{
        let resp=await fetch("https://reqres.in/api/users/"+id)
        return await resp.json()
      }
  
      catch(err){
          alert("Server Error")
      }
}