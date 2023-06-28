const namee = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone_number');


const button = document.querySelector('.btn');
console.log(button)

button.addEventListener('click',submit);

window.addEventListener("DOMContentLoaded",()=>{
    axios.get("http://localhost:300/get-user/")
.then((respone)=> {
    console.log(respone.data.users);
    for(var i=0; i<respone.data.users.length; i++){
        showUserOnScreen(respone.data.users[i]);
    //    const ui =  document.getElementById('users')
    //    ui.createTextNode(respone.data.user[i])
    //    console.log(ui);
    }
}).catch(err => console.log(err));

})

function showUserOnScreen(obj){
    const section = document.querySelector('.container');
    const ul = document.createElement('ul');
   
    const btn = document.createElement('button');
    btn.className = 'float-right';
    btn.innerText = 'Delete';

    const edit = document.createElement('button');
    edit.className = 'float-right';
    edit.innerText = 'Edit';

    section.appendChild(ul);

    ul.appendChild(document.createTextNode(obj.name));
    ul.appendChild(document.createTextNode(" - "));
    ul.appendChild(document.createTextNode(obj.email));
    ul.appendChild(document.createTextNode(" - "));
    ul.appendChild(document.createTextNode(obj.phonenumber));


    ul.appendChild(btn);
    ul.appendChild(edit);

    
    btn.addEventListener('click',clear);
    edit.addEventListener('click',editclick);

    function clear(e){
        // ul.remove();
        // localStorage.removeItem(obj.email);
        axios.delete(`http://localhost:300/delete-user/${obj.id}`)
        .then((res)=> {

            ul.remove();
        })
        .catch(err => console.log(err));
    }

    function editclick(e){

        axios.put(`http://localhost:300/edit-data/`,obj)
        .then((respone)=>{
            ul.remove();
            document.getElementById('name').value = obj.namee
            document.getElementById('email').value = obj.email
        }).catch(err=> console.log(err));

       
        // localStorage.removeItem(obj.email);
        
    }

}

function submit(e){
    // e.preventDefault();
    const obj = {
        namee :namee.value,
        phone: phone.value,
        email: email.value
    };

    let obj_serialized = JSON.stringify(obj);
    let id = null;
    axios.post("http://localhost:300/add-data",obj)
    .then(respone => {
        id = respone.data._id
    }).catch((err) => {
        document.body.innerHTML= document.body.innerHTML + "<h4>ERROR</h4>"
        console.log(err);
    });

    
    // localStorage.setItem(email.value,obj_serialized);

    // const section = document.querySelector('.container');
    // const ul = document.createElement('ul');
   
    // const btn = document.createElement('button');
    // btn.className = 'float-right';
    // btn.innerText = 'Delete';

    // const edit = document.createElement('button');
    // edit.className = 'float-right';
    // edit.innerText = 'Edit';

    // section.appendChild(ul);

    // ul.appendChild(document.createTextNode(obj.namee));
    // ul.appendChild(document.createTextNode(" - "));
    // ul.appendChild(document.createTextNode(obj.email));
    // ul.appendChild(document.createTextNode(" - "));
    // ul.appendChild(document.createTextNode(obj.phone));


    // ul.appendChild(btn);
    // ul.appendChild(edit);

    // btn.addEventListener('click',clear);
    // edit.addEventListener('click',editclick);

    // function clear(e){
    //     // ul.remove();
    //     // localStorage.removeItem(obj.email);
    //     axios.delete(`http://localhost:300/add-data/${id}`)
    //     .then(()=> {
    //         ul.remove();
    //     })
    //     .catch(err => console.log(err));
    // }

    // function editclick(e){

    //     axios.put(`http://localhost:300/add-data${id}`,obj)
    //     .then((respone)=>{
    //         ul.remove();
    //         document.getElementById('name').value = obj.namee
    //         document.getElementById('email').value = obj.email
    //     }).catch(err=> console.log(err));

       
    //     // localStorage.removeItem(obj.email);
        
    // }

    
   

}

