const p_name = document.getElementById('product_name')
const s_price = document.getElementById('selling_price')
const category = document.getElementById('cateogory')


const Electronicsection = document.querySelector('.Electronic_item');
const SkincareSection = document.querySelector('.Skincare_items')
const FoodItemsSection = document.querySelector('.Food_items')


const btn_addProduct = document.getElementById('product')

btn_addProduct.addEventListener('click',addProduct)


window.addEventListener("DOMContentLoaded",async ()=>{
    await axios.get("http://localhost:3000/get-user/")
.then((respone)=> {
    for(var i=0; i<respone.data.product.length; i++){
        showUserOnScreen(respone.data.product[i]);
 
    }
}).catch(err => console.log(err));

})

function showUserOnScreen(obj){
    const ul = document.createElement('ul');
    const btn = document.createElement('button');
    btn.className = 'float-right';
    btn.innerText = 'Delete';

    if(obj.category === 'Electronic'){
        Electronicsection.appendChild(ul)
        ul.appendChild(document.createTextNode(obj.sellingPrice));
        ul.appendChild(document.createTextNode(" - "));
        ul.appendChild(document.createTextNode(obj.category));
        ul.appendChild(document.createTextNode(" - "));
        ul.appendChild(document.createTextNode(obj.Product_name));
        ul.appendChild(btn)
    }
    else if(obj.category === 'Skincare'){
        SkincareSection.appendChild(ul)
        ul.appendChild(document.createTextNode(obj.sellingPrice));
        ul.appendChild(document.createTextNode(" - "));
        ul.appendChild(document.createTextNode(obj.category));
        ul.appendChild(document.createTextNode(" - "));
        ul.appendChild(document.createTextNode(obj.Product_name));
        ul.appendChild(btn)
    }
    else{
        FoodItemsSection.appendChild(ul)
        ul.appendChild(document.createTextNode(obj.sellingPrice));
        ul.appendChild(document.createTextNode(" - "));
        ul.appendChild(document.createTextNode(obj.category));
        ul.appendChild(document.createTextNode(" - "));
        ul.appendChild(document.createTextNode(obj.Product_name));
        ul.appendChild(btn)

    }

    btn.addEventListener('click',clear);
    function clear(e){
        axios.delete(`http://localhost:3000/delete-product/${obj.id}`)
        .then((res)=> {

            ul.remove();
        })
        .catch(err => console.log(err));
    }
}



async function addProduct(e){
    window.location.reload();
    const obj = {
        p_name :p_name.value,
        s_price: s_price.value,
        category: category.value
    };

    await axios.post("http://localhost:3000/add-data",obj)
    .then(respone => {
       
    }).catch((err) => {
        document.body.innerHTML= document.body.innerHTML + "<h4>ERROR</h4>"
        console.log(err);
    });

    

}