const myForm = document.querySelector('#my-form');
const kmtInput = document.querySelector('#kmt');
const paceInput = document.querySelector('#pace');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
e.preventDefault();

if(kmtInput.value === '' && paceInput.value === '' ) {
 //   msg.classList.add('error');     

 //   const tommeFelter = function(){

    msg.innerHTML = 'Fyll inn en verdi i et av feltene';
    const clearErrorMsg = () => {
      msg.innerHTML = ''
    }
    setTimeout(clearErrorMsg, 5000);
}


if(kmtInput.value) { 
    // regn om  
        const resPace = 60 / kmtInput.value; 
        function minTommss(minutes){
            var sign = minutes < 0 ? "-" : "";
            var min = Math.floor(Math.abs(minutes));
            var sec = Math.floor((Math.abs(minutes) * 60) % 60);
            return sign + (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;
           }
        
           console.log(minTommss(3.5));     // "03:30"
           const convertDecimalToTime = minTommss(resPace);
           console.log(convertDecimalToTime);



       const li = document.createElement('li');
       li.appendChild(document.createTextNode(`${kmtInput.value} km/t = ${convertDecimalToTime}`));

    userList.appendChild(li);

//console.log('kmtInput empty');
//console.log('paceInput.value');

   
       } 

if(paceInput.value) { 
        // regn om
        function timeStringToFloat(time) {
            var hoursMinutes = time.split(/[.:]/);
            var hours = parseInt(hoursMinutes[0], 10);
            var minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
            return hours + minutes / 60;
          }
          console.log(timeStringToFloat(paceInput.value));
          console.log(paceInput);
          const timeToDecimal = timeStringToFloat(paceInput.value);
         
          const DecimalTokmt = 60 / timeToDecimal;
          console.log(DecimalTokmt);
         var OutputKmtDecimal = DecimalTokmt;
            OutputKmtDecimal = OutputKmtDecimal.toFixed(1);
        console.log(OutputKmtDecimal);









        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${paceInput.value} pace = ${OutputKmtDecimal}`));

        userList.appendChild(li);

//console.log('paceInput empty');
//console.log('kmtInput.value');


    } 
/*
    if(kmtInput.value !== '' && paceInput.value !== '') {


        msg.innerHTML = 'Fyll inn bare et felt om gangen';
        setTimeout(() => msg.remove(), 5000)


    } 
*/

kmtInput.value = '';
paceInput.value = '';



}
/*
function timeStringToFloat(time) {
    var hoursMinutes = time.split(/[.:]/);
    var hours = parseInt(hoursMinutes[0], 10);
    var minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
    return hours + minutes / 60;
  }
  console.log(timeStringToFloat('03:56'));
  const timeToDecimal = timeStringToFloat('03:56');
 
  const DecimalTokmt = 60 / timeToDecimal;
  console.log(DecimalTokmt);
 var OutputKmtDecimal = DecimalTokmt;
    OutputKmtDecimal = OutputKmtDecimal.toFixed(2);
console.log(OutputKmtDecimal);


   console.log(hours);     // "03:30"
   console.log(minutes);

var num=10.07;
var str=num.toString();
var numarray=str.split('.');
var a=new Array();
a=numarray;

console.log(a[0]);
console.log(a[1]);



*/