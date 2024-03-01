const API = "https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/services"

async function getService(){
    try{
        const res = await fetch(API)
    const data = await res.json()
    console.log(data)
    showService(data)
  

    }
    catch(error){
        console.log(error)

    }

}
getService()

let subCategory = document.querySelector(".subCategory")




function showService(data){
    let showData = data.map((item)=>{
        return `
        

        <div class="block">
            <div class="image-content">
                <h5>Best Seller</h5>
                <img src="${item.image}" alt="">
                <button onclick="korzinaService('${item.id}')" class="addCart">ADD TO CART</button>
            </div>
            <p>People</p>
            <h1>Red Bench </h1>
            <p>$3.89</p>


        </div>
        `
    })
  
    subCategory.innerHTML = showData.join("")








}

let count = document.querySelector(".count")
let ArrayCart = []
function updateCart(){
    count.innerHTML = ArrayCart.length
}

function displayCart (){
    let showMomal = ArrayCart.map((item) => {
        return `
        
        
        <div class="modal-main">
        <div class="item-text">
          <h1>${item.name}</h1>
          <p>${item.category}</p>
        </div>
        <img src="${item.image}" alt="">
        
      </div>
        
        
        `;
    });
    
    modalProduct.innerHTML = showMomal.join("")


};





let corzina = document.querySelector(".corzina")
let modal = document.querySelector(".modal")    
let cloesbtn = document.querySelector("#close")
let modalProduct = document.querySelector(".modal-product")




corzina.onclick = function (){
    modal.style.display = "block"
}
cloesbtn.onclick = function (){
    modal.style.display = "none"
}


async function korzinaService(id){
    try{
        const res = await fetch(`${API}/${id}`)
        const data = await res.json()
   
     
        // let findProduct = data.find((x) => x.id == id)
        console.log(data);
    if(data){
        ArrayCart.push(data)
        displayCart()
        updateCart()
    }

 
    }
    catch(error){
        console.log(error)
    }
   

}


let modalClear = document.querySelector(".modal-btn")

modalClear.onclick = function (){
    ArrayCart = []
    displayCart()
    updateCart()
}

document.addEventListener("click", function (event){
    const ismodal = modal.contains(event.target)
    const iscorzina = corzina.contains(event.target)
    if(!ismodal && !iscorzina){
        modal.style.display = "none"
    }
})

