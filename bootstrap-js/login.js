function validate(event){
    event.preventDefault()
    uname=document.getElementById("uname").value
    pass=document.getElementById("pass").value
    
    if(uname === "" || pass === ""){
       document.getElementById("msg").classList.remove("d-none")
        return false
    }
     
    // convert incomming data to object
    let data= JSON.parse(localStorage.getItem("udata"))
    // compare the data taken from input with localstorage
    const users= data.find(d => d.uname ===uname && d.pass===pass)
    if(users){
        alert("login SuccessFul")
    }else{
    alert("invalid Login")
 
    }
    
    return true
     
    
}