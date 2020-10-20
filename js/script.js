

let postcode = document.querySelector("#post");
let form = document.querySelector('form');
let p = document.querySelector('#alert');

let form1 = document.querySelector("#form1");
let email =document.querySelector("#email");
let alert1 = document.querySelector("#alert1");

let form2 = document.querySelector("#form2");
let phone =document.querySelector("#phone");
let alert2 = document.querySelector("#alert2");


//regular expression

let d= /^[0-9]{4}$/;
let k=/^([a-zA-Z0-9])+@([a-zA-Z0-9])+[\.?]com$/;
let n=/^(\+88)?([0-9]){11}$/;


let result=0;

class validator{
    constructor(postcode,email,phone){
        this.postcode=postcode;
        this.email = email;
        this.phone = phone;
       
    }
}

form.addEventListener('submit',e=>{
    p.innerHTML = '';
    
let v = new validator(postcode.value);
    
    if(postcode.value !=''){
     result=   d.test(postcode.value);
    
if(result == true){
    
 p.innerHTML = `<p class="alert alert-success">${postcode.value} is valid !</p>`;
}
else{
    p.innerHTML = `<p class="alert alert-danger"> ${postcode.value} is invalid postcode <b> ex-2314 </b> ! </p>`;
}}
  e.preventDefault();
});

//eamil validator
   
form1.addEventListener('submit',e=>{
    alert1.innerHTML = '';
  
    if(email.value != ''){
        result = k.test(email.value);
        if(result == true){
              
             alert1.innerHTML = `<p class="alert alert-success">
            ${email.value} is valid ! </p>`;
            }
            else{
             alert1.innerHTML = `<p class="alert alert-danger">
            ${email.value} is invalid email
                <b>ex- someone111@gamil.com </b>
                !</p> `;
    }}
     e.preventDefault();
});


//phone number validator 
form2.addEventListener('submit',e=>{
     alert2.innerHTML = '';
    if(phone.value != ''){
        result = n.test(phone.value);
        if(result == true){
            
            alert2.innerHTML = `<p class="alert alert-success">
            ${phone.value} is valid ! </p>`;
            }
            else{
                
             alert2.innerHTML = `<p class="alert alert-danger">
            ${phone.value} is invalid phone number
                <b>ex- 8801728412345 </b>! </p>`;
    }}
     e.preventDefault();
});
