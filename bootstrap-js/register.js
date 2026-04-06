function validate() {
  let uname = document.getElementById("uname").value;
  let pass = document.getElementById("pass").value;
  let email = document.getElementById("email").value;
  let city = document.getElementById("city").value;
  let mobile = document.getElementById("mobile").value;
  let dob = document.getElementById("dob").value;

  let valid = true;
  document.getElementById("nameErr").innerText = "";
  document.getElementById("passErr").innerText = "";

  if (uname === "") {
    document.getElementById("nameErr").innerText = "Name is Required";
    valid = false;
  }
  if (pass === "") {
    document.getElementById("passErr").innerText = "Password is Required";
    valid = false;
  } else if (pass.length < 6) {
    document.getElementById("passErr").innerText =
      "Password must be 6 char Long";
    valid = false;
  }
  // object anything which have {} -> object
  const userData = {
    uname,
    pass,
    email,
    city,
    mobile,
    dob
  };


  //step-1 read the data from localstorage and convert back to object
  let data=JSON.parse(localStorage.getItem("udata")) || []
// step-2 Add the user
  data.push(userData)
  // every data which goes in localstorage ,needs to convert into string
  localStorage.setItem("udata", JSON.stringify(data));
  alert("user registered");
  return valid;
}
