

function loadProducts(){
    const products= JSON.parse(localStorage.getItem('pdata'))
    const container= document.getElementById('userContainer')

    container.innerHTML=""
    products.forEach((product,index) => {
        container.innerHTML += `
        <div class="col-md-3">
        <div class="card p-2">
          <img src=${product.image} class="card-img-top" />
          <div class="card-body text-center">
            <h4>${product.pname}</h4>
             <p class="text-success">${product.cat}</p>
            <p class="text-success">${product.price}</p>

            <button class="btn btn-success">Add</button>
            <button class="btn btn-warning">Edit</button>
            <button onClick="deleteProduct(${index})" class="btn btn-danger">Delete</button>
          </div>
    </div>
      </div>
      `
    })
}

function deleteProduct(index){
   const products= JSON.parse(localStorage.getItem('pdata'))
   products.splice(index,1)
   localStorage.setItem("pdata",JSON.stringify(products))
   loadProducts()
}