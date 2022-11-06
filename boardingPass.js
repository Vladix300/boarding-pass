let today = new Date().getDate();
let month = new Date().getMonth() + 1;
let year = new Date().getFullYear();

const months = ['', 'JAN', 'FEB', 'APR', 'MAR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

const departDate = document.getElementById('departDate');

departDate.textContent = today + ' ' + months[month] + ' ' + year

const depTime =  document.getElementById('depTime');


const depDateInp = document.getElementById('depDateInp');

const moonDay = document.getElementById('moonDay');

const moonNight = document.getElementById('moonNight');

const boardingPass = document.getElementById('boardingPass');

const logo = document.getElementById("logo")

const pax = document.getElementById("pax")

const carrier = document.getElementById('carrier');

const destinationCity = document.getElementById('dest');

const arrivalCity = document.getElementById('arr');

const boardingContainer = document.getElementById('boarding');

const boardBtn = document.getElementById('boardSpan');
const planeIcon = document.getElementById('planeIcon');

const unboardBtn = document.getElementById('unboardSpan');

const alertMsgContainer = document.getElementById('alertMsgContainer')



const airlinesSelect = document.getElementById('airlinesSelect');


const forma = document.getElementById('forma');
let formOpen = false;

const bolt = document.getElementById('bolt');

const paxNameInp = document.getElementById('paxNameInp');


bolt.addEventListener('click', () => {
  // bolt.style.display = 'none';
  
  if (formOpen) {
   forma.style.left = '-1000px';
    
   formOpen = false;
   
   return
  }
  
  if (!formOpen) {
  forma.style.left = '300px';
  formOpen = true;

  boardBtn.textContent = 'BOARD'
  boardingContainer.classList.add('boardingHover');
  }
  
})


// Random number to determine SAS destination and time 
// *Renvoie un entier aléatoire entre une valeur min (incluse)
// et une valeur max (exclue)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}




// class for animation is removed after timeout - therefore 'forwards' effect from animation is also removed and form bar re-appears, that's why - style.left -1000px is applied to keep form bar hidden

const actualBpassColors = {
  bgColor : '',
  fontColor: ''
}

const norwegian = {
  destination: 'Oslo Gardermoen',
   depTime: '13:00',
  bgColor : '#d91e50',
  fontColor: 'white',
  logo : 'https://aviokase.lv/userfiles/7ab28a8dbd7b2a03d1078269ca15e9a6.png'
}

const icelandair = {  
  destination: 'Reykjavik Keflavik',
  depTime: '13:00',
  bgColor :  'white',
  fontColor: 'blue',
  logo : 'https://pixels-cache.icelandair.com/upload/w_1200%2Ch_630%2Cg_auto%2Cc_fill%2Cf_auto%2Cq_auto/icelandair/blt6eac8632ab59a2f8.jpg'
}

const lot = {
   destination: 'Warszawa',
   depTime: '19:45',
   bgColor: "#100a5e",
   fontColor: 'white',
   logo : 'https://upload.wikimedia.org/wikipedia/commons/4/4c/LOT_logo.png'
   
}

const scandinavian = {
   destination: ['Stockholm Arlanda', 'Oslo Gardermoen', 'Copenhagen', 'Oslo Gardermoen', 'Copenhagen', 'Stockholm Arlanda'],
   depTime: ['12:30', '12:55', '14:20', '20:00', '20:10', '20:55'],
   bgColor: "#5975ff",
   fontColor: 'white',
   logo : 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Scandinavian_Airlines_logo.svg/1200px-Scandinavian_Airlines_logo.svg.png'
}

const play = {
  destination: 'Reykjavik Keflavik',
   depTime: '11:30',
   bgColor: "white",
   fontColor: 'red',
   logo : 'https://images.prismic.io/wab-website/0b3dbe63-ec92-4086-bd2d-5eee8ee8c625_PLAY_Logo_Web_RED_300.png?auto=compress,format'
}

const af = {
   destination: 'Seattle',
   depTime: '11:15',
   bgColor: "white",
   fontColor: 'black',
   logo : 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Air_France_Logo.svg/2560px-Air_France_Logo.svg.png'
}



// actualBpassColors.bgColor = norwegian.bgColor;
// actualBpassColors.fontColor = norwegian.fontColor;


moonDay.addEventListener('click', () => {
  moonDay.style.display = 'none';
  moonNight.style.display = 'block';
  document.body.style.backgroundColor = '#5b628f';
  
  boardingPass.style.color = 'black';
  boardingPass.style.backgroundColor = 'white';
})

moonNight.addEventListener('click', () => {
  moonNight.style.display = 'none';
  moonDay.style.display = 'block';
  document.body.style.backgroundColor = 'white';
  
  boardingPass.style.color = actualBpassColors.fontColor;
  boardingPass.style.backgroundColor = actualBpassColors.bgColor;
})


boardingContainer.addEventListener('click', () => {
  
  // animation HIDING form (if it's opened)
  
  if (formOpen) {
   forma.classList.add('formDisappear');
   formOpen = false;
    
    setTimeout( () => {
       forma.classList.remove('formDisappear'); 
       forma.style.left = '-1000px'; 
   }, 2000)
    
   }
  
 

alertMsgContainer.classList.add('alertMsgAnim');  


 planeIcon.style.display = 'none'; 
  // document.getElementById('boardSpan').style.display = 'none';
document.getElementById('boardSpan').textContent = 'BOARDED';
boardingContainer.classList.remove('boardingHover');
 
  unboardBtn.style.display = 'block';
  
 setTimeout( () => { alertMsgContainer.classList.remove('alertMsgAnim') }, 10000); 
  // document.getElementById('boardedSpan').style.display = 'block';
 
})

unboardBtn.addEventListener('click', () => {
  alertMsgContainer.classList.remove('alertMsgAnim')
  boardBtn.textContent = 'BOARD';
 planeIcon.style.display = 'block'; 
 boardingContainer.classList.add('boardingHover');

  unboardBtn.style.display = 'none';
  
})

 function applyAirlineStyle(airlineLogo, dest, flightDep, bpBack, bpColor) {
    logo.setAttribute('src', airlineLogo);
    destinationCity.textContent = dest.toUpperCase();
    depTime.textContent = flightDep;
    boardingPass.style.backgroundColor = bpBack;
    boardingPass.style.color = bpColor;
    
    actualBpassColors.fontColor = bpColor;
    actualBpassColors.bgColor = bpBack;

    alertMsgContainer.style.backgroundColor = bpBack
    alertMsgContainer.style.color = bpColor
  }


airlinesSelect.addEventListener('change', () => {
 
  carrier.textContent = airlinesSelect.value.toUpperCase();
  
  console.log(depDateInp.value);
  
  switch (airlinesSelect.value.toUpperCase()) {
    case 'ICELANDAIR' :
    
      applyAirlineStyle(icelandair.logo, icelandair.destination, icelandair.depTime, icelandair.bgColor, icelandair.fontColor)

    
    break;
      
   case 'NORWEGIAN' :
      
      
    applyAirlineStyle(norwegian.logo, norwegian.destination, norwegian.depTime, norwegian.bgColor, norwegian.fontColor)
      
      break;
      
      
    case 'LOT POLISH AIRLINES' :
      
      applyAirlineStyle(lot.logo, lot.destination, lot.depTime, lot.bgColor, lot.fontColor)
      
      break;
      
    case 'SAS SCANDINAVIAN' : 
      
    let randomFlight = getRandomInt(0, scandinavian.destination.length)
    console.log(randomFlight)
      
    applyAirlineStyle(scandinavian.logo, scandinavian.destination[randomFlight], scandinavian.depTime[randomFlight],
scandinavian.bgColor, scandinavian.fontColor)
      
     break;
      
    case 'PLAY' : 
      
    applyAirlineStyle(play.logo, play.destination, play.depTime, play.bgColor, play.fontColor)
      
    break;
      
    case 'AIR FRANCE' :
    
    applyAirlineStyle(af.logo, af.destination, af.depTime, af.bgColor, af.fontColor)
      
     document.getElementById('boarding').classList.add('boardingHoverAF')
  
    break;
  }
  
  

        
})
// airlinesSelect 'onchange' (picking airline change event)

depDateInp.addEventListener('change', () => { 
  departDate.textContent = depDateInp.value.substr(-2, 2) + ' ' + months[Number(depDateInp.value.substr(-5,2))] + ' ' + depDateInp.value.substr(0,4)

})
  
  
 

const gateInp = document.getElementById('gateInp');

const seatInp = document.getElementById('seatInp');

gateInp.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    document.getElementById('gate').textContent = gateInp.value.substr(0,3).toUpperCase();
  }
})

seatInp.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    document.getElementById('seat').textContent = seatInp.value.substr(0,3).toUpperCase();
  }
})

paxNameInp.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    
    if (paxNameInp.value.length <= 3 ) {
       document.getElementById('nameWarningP').style.visibility = 'visible';
       pax.textContent = '';
    }
   else {
     document.getElementById('nameWarningP').style.visibility = 'hidden'
     pax.textContent = paxNameInp.value.toUpperCase().replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
   }
    
    
  }
})



// window.onclick = (e) => {
//   console.log(e.target);
  
//   if (!e.target.contains()) {
    
//   }
// }

