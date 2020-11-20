const myForm = document.querySelector('#my-form');
const kmtInput = document.querySelector('#kmt');
const paceInput = document.querySelector('#pace');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
e.preventDefault();

if(kmtInput.value === '' && paceInput.value === '' ) {

    msg.innerHTML = 'Fyll inn en verdi i et av feltene';
    const clearErrorMsg = () => {
      msg.innerHTML = ''
    }
    setTimeout(clearErrorMsg, 3000);
}


if(kmtInput.value) { 
    // converting speed to pace  
        const resPace = 60 / kmtInput.value; 
        function minTommss(minutes){
            const sign = minutes < 0 ? "-" : "";
                  const min = Math.floor(Math.abs(minutes));
            const sec = Math.floor((Math.abs(minutes) * 60) % 60);
            return sign + (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;
           }
        


         const convertDecimalToTime = minTommss(resPace);




       const li = document.createElement('li');
       li.appendChild(document.createTextNode(`${kmtInput.value} km/t = pace ${convertDecimalToTime}`));
        userList.appendChild(li);


   
       } 

if(paceInput.value) { 
        // converting pace to speed
        function timeStringToFloat(time) {
            const hoursMinutes = time.split(/[.:]/);
            const hours = parseInt(hoursMinutes[0], 10);
            const minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
            return hours + minutes / 60;
          }

          const timeToDecimal = timeStringToFloat(paceInput.value);
         
          const DecimalTokmt = 60 / timeToDecimal;
         let OutputKmtDecimal = DecimalTokmt;
            OutputKmtDecimal = OutputKmtDecimal.toFixed(1);

        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${paceInput.value} pace = ${OutputKmtDecimal} km/t`));
        userList.appendChild(li);



    }

kmtInput.value = '';
paceInput.value = '';



}
