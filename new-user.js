document.getElementById('form').addEventListener('submit',async function(event){
event.preventDefault();
let firstName= document.getElementById('first-name').value;
let lasttName= document.getElementById('last-name').value;
let age= document.getElementById('age').value;
let data ={
    firstName:firstName,
    lasttName:lasttName,
    age:age
};
console.log({data})

let result = await fetch('https://dummyjson.com/users/add',{
    method: 'POST',
    headers:{
        'Content-Type':'application/json'
    },
body:JSON.stringify(data)
})
.then(response =>response.json())
.then(response=> response)
.catch(error=>error.message)
console.log({result})

let success = document.getElementById('success');
result.id? success.innerHTML='User successfully added': success.innerHTML= 'User not added.'

});
