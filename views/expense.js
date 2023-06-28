const chooseExper = document.getElementById('experiment');
const chooseDesc = document.getElementById('description');
const chooseCatog = document.getElementById('cateogory');

const addExp = document.getElementById('expence');
const section = document.createElement('SECTION');
section.className = 'container';
document.body.appendChild(section);

addExp.addEventListener('click',press);



window.addEventListener("DOMContentLoaded",()=>{
    axios.get("http://localhost:3000/get-data/")
.then((respone)=> {
    for(var i=0; i<respone.data.length; i++){
        showUserOnScreen(respone.data[i]);
   
    }
}).catch(err => console.log(err));

})

function showUserOnScreen(obj){
    const ul = document.createElement('ul');
   
    const btn = document.createElement('button');
    btn.className = 'float-right';
    btn.innerText = 'Delete Expense';

    const edit = document.createElement('button');
    edit.className = 'float-right';
    edit.innerText = 'Edit Expense';

    section.appendChild(ul);

    ul.appendChild(document.createTextNode(obj.experiment));
    ul.appendChild(document.createTextNode(" - "));
    ul.appendChild(document.createTextNode(obj.description));
    ul.appendChild(document.createTextNode(" - "));
    ul.appendChild(document.createTextNode(obj.category));
    
    

    ul.appendChild(btn);
    ul.appendChild(edit);

    btn.addEventListener('click',removebtn);
    edit.addEventListener('click',editable);
    function removebtn(e){
        axios.delete(`http://localhost:3000/delete-expense/${obj.id}`)
        .then((res)=> {

            ul.remove();
        })
        .catch(err => console.log(err));
        
    }
    function editable(e){

        axios.put(`http://localhost:3000/edit-data/`,obj)
        .then((respone)=>{
            ul.remove();
            document.getElementById('experiment').value = obj.experiment;
            document.getElementById('description').value = obj.description;
            document.getElementById('cateogory').value = obj.category;
        }).catch(err=> console.log(err));
       

       
    }
}

function press(e){
  
    const obj = {
        exp :chooseExper.value,
        des: chooseDesc.value,
        cat : chooseCatog.value
    };

    
    axios.post("http://localhost:3000/add-expense",obj)
    .then(respone => {
        showUserOnScreen(respone.data.alluser)
    }).catch((err) => {
        document.body.innerHTML= document.body.innerHTML + "<h4>ERROR</h4>"
        console.log(err);
    });


  

}



