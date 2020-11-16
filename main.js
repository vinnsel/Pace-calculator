const myForm = document.querySelector('#my-form');
const kmtInput = document.querySelector('#kmt');
const paceInput = document.querySelector('#pace');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
e.preventDefault();

if(!kmtInput.value === '' && paceInput.value === '' ) {
 //   msg.classList.add('error');       
    
    msg.innerHTML = 'Fyll inn en verdi i et av feltene';
    setTimeout(() => msg.remove(), 5000)
//   alert('Fyll inn en verdi i et av feltene');
}

if(!paceInput.value) { 
        // regn om
       const li = document.createElement('li');
       li.appendChild(document.createTextNode(`${kmtInput.value} km/t = `));

    userList.appendChild(li);

//console.log('kmtInput empty');
//console.log('paceInput.value');

   
       } 

if(!kmtInput.value) { 
        // regn om
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${paceInput.value} pace = `));

        userList.appendChild(li);

//console.log('paceInput empty');
//console.log('kmtInput.value');


    } 

    if(kmtInput.value !== '' && paceInput.value !== '') {


        msg.innerHTML = 'Fyll inn bare et felt om gangen';
        setTimeout(() => msg.remove(), 5000)


    } 


kmtInput.value = '';
paceInput.value = '';


}