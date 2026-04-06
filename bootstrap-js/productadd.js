function validate() {
  let pname = document.getElementById("pname").value;
  let price = document.getElementById("price").value;
  let image = document.getElementById("image").value;
   let cat = document.getElementById("cat").value;

  let valid = true;
  document.getElementById("nameErr").innerText = "";
  document.getElementById("passErr").innerText = "";

  if (pname === "") {
    document.getElementById("nameErr").innerText = "Product name is Required";
    valid = false;
  }
  if (price === "") {
    document.getElementById("passErr").innerText = "Price is Required";
    valid = false;
  }  
  // object anything which have {} -> object
  const userData = {
    pname,
    price,
    image,
    cat
    
  };


  //step-1 read the data from localstorage and convert back to object
  let data=JSON.parse(localStorage.getItem("pdata")) || []
// step-2 Add the user
  data.push(userData)
  // every data which goes in localstorage ,needs to convert into string
  localStorage.setItem("pdata", JSON.stringify(data));
  alert("Product registered");
  return valid;
}
