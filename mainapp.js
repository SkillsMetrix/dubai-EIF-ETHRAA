// import express module
const express = require("express");
// create the object
const app = express();

// array of users
let users = [
  { id: 101, name: "Amar", city: "mumbai",country:"India",Mobile:34343 },
  { id: 102, name: "salama", city: "dubai",country:"UAE",Mobile:12345 },
  { id: 103, name: "Ghaith", city: "NY",country:"USA",Mobile:98767 },
];
//simple GET Request
// load all the Users
app.get("/loadusers", (req, res) => {
  res.send(users);
});
//load only specific user
app.get("/loaduser/:id", (req, res) => {
  const uid = parseInt(req.params.id);

  const userFound= users.find(data => data.id ===uid)
  if(!userFound){
    return res.send("User Not Found")
  }
  res.send(userFound)
  
});
// convert incoming data into key - value pair
app.use(express.json())
app.post("/adduser", (req, res) => {
   const newUser= req.body
   users.push(newUser)
   res.send("user added")
});
// delete the user
app.delete("/deleteuser/:id", (req, res) => {
  const uid = parseInt(req.params.id);

  const userFound= users.find(data => data.id ===uid)
  if(!userFound){
    return res.send("User Not Found")
  }
  users= users.filter(u => u.id !== uid)
  res.send("user found and deleted")
  
});

// update the user
app.put("/updateuser/:id", (req, res) => {
  const uid = parseInt(req.params.id);

  const userFound= users.find(data => data.id ===uid)
  if(!userFound){
    return res.send("User Not Found")
  }
  userFound.name= req.body.name
  userFound.city= req.body.city
  userFound.country= req.body.country
  userFound.mobile= req.body.mobile
  res.send("user found and updated")
  
});

// start the server
app.listen(3000, () => {
  console.log("Server is ready...!");
});
