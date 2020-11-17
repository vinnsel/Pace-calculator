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
    console.log('fyll inn');
    console.log('paceInput.value');
//   alert('Fyll inn en verdi i et av feltene');
}
/*
if(!paceInput.value && kmtInput.value === '') { 
        // regn om
//       const resPace = 60 / kmtInput.value; 

//function secTommss2(sec){
//  return new Date(sec*1000).toUTCString().split(" ")[4]
//}

       const li = document.createElement('li');
       li.appendChild(document.createTextNode(`${kmtInput.value} km/t = ${resPace}`));

    userList.appendChild(li);

//    console.log(totalTimeInSeconds);
//console.log('kmtInput empty');
//console.log('paceInput.value');

   
       } 

if(!kmtInput.value && paceInput.value === '') { 
        // regn om
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${paceInput.value} pace = `));

        userList.appendChild(li);

//console.log('paceInput empty');
//console.log('kmtInput.value');


/*    } 

    if(kmtInput.value !== '' && paceInput.value !== '') {


        msg.innerHTML = 'Fyll inn bare et felt om gangen';
        setTimeout(() => msg.remove(), 5000)


    } 
*/

//kmtInput.value = '';
//paceInput.value = '';


}