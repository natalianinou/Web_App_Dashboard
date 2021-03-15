const bellClick = document.getElementById('bell-svg');
const notification = document.querySelector('.dropdown-content');
const alertBanner = document.getElementById('alert');
const trafficCanvas = document.querySelector('#traffic-chart');
const dailyCanvas = document.querySelector('#daily-chart');
const mobileCanvas = document.querySelector('#mobile-chart');
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");


// Alert


alertBanner.innerHTML = `
  <div class="alert-banner">
    <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete!</p>
    <button class="alert-banner-close">x</button>
  </div>
`
;

alertBanner.addEventListener('click', (e) => {
  const element = e.target;
  if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none";
  }
});

//Traffic Chart
let trafficHourlyData =  {
  labels: ['10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'], 
  datasets: [{
      data: [25, 30, 15, 35, 20, 45, 20, 15, 35, 15, 20],
      backgroundColor: 'rgba(116, 119, 191, .3)'
  }]
};

let trafficDailyData =  {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'], 
  datasets: [{
      data: [225, 350, 300, 150, 250, 450, 300, 250, 400, 350, 200],
      backgroundColor: 'rgba(116, 119, 191, .3)'
  }]
};

let trafficWeeklyData =  {
  labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'], 
  datasets: [{
      data: [760, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
      backgroundColor: 'rgba(116, 119, 191, .3)'
  }]
};


let trafficMonthlyData =  {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov'], 
  datasets: [{
      data: [2900, 5100, 4500, 3600, 3200, 5700, 4200, 3100, 5500, 2600, 5400],
      backgroundColor: 'rgba(116, 119, 191, .3)'
  }]
};

let trafficOptions = {
  aspectRatio: 3,
  animation: {
      duration: 0
  }, 
  scales: {
      yAxes: [{
          ticks: {
              beginAtZero: true
          }
      }]
  }, 
  legend: {
      display: false
  }
};
function createTrafficChart(data) {
  let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data,
    options: trafficOptions
  });
}

const trafficNavLinks = document.querySelectorAll('.traffic-nav-link');
const trafficNavUl = document.querySelector('.traffic-nav');

window.addEventListener('DOMContentLoaded', function() {
let trafficChart = new Chart(trafficCanvas, {
  type: 'line',
  data: trafficWeeklyData,
  options: trafficOptions
});
})

trafficNavLinks.forEach(trafficNavLink => {
  trafficNavLink.addEventListener('click', e => {
    let active = e.target;
    trafficNavUl.querySelector('.active').classList.remove('active');
    active.classList.add('active');

    if (active.textContent === 'Weekly') {
      createTrafficChart(trafficWeeklyData);
    }
    if (active.textContent === 'Hourly') {
      createTrafficChart(trafficHourlyData);
    }
    if (active.textContent === 'Daily') {
      createTrafficChart(trafficDailyData);
    }
    if (active.textContent === 'Monthly') {
      createTrafficChart(trafficMonthlyData);
    }
    
  })
})


// Bar Graph

// data for daily traffic bar chart
const dailyData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [{
  label: '# of Hits',
  data: [75, 115, 175, 125, 225, 200, 100],
  backgroundColor: '#7477BF',
  borderWidth: 1
  }]
  };
  const dailyOptions = {
  scales: {
  yAxes: [{
  ticks: {
  beginAtZero:true
  }
  }]
  },
  legend : {
  display: false
  }
  }
  let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
    });

    // Doughnut Chart

    const mobileData = {
      labels: ["Desktop", "Tablet", "Phones"],
      datasets: [{
      label: '# of Users',
      data: [2000, 550, 500],
      borderWidth: 0,
      backgroundColor: [
      '#7477BF',
      '#78CF82',
      '#51B6C8'
      ]
      }]
      };

      const mobileOptions = {
        legend: {
        position: 'right',
        labels: {
        boxWidth: 20,
        fontStyle: 'bold'
        }
        }
        }

        let mobileChart = new Chart(mobileCanvas, {
          type: 'doughnut',
          data: mobileData,
          options: mobileOptions
          });
          

  // Messaging


send.addEventListener('click', () => {
  // ensure user and message fields are filled out
  if (user.value === "" && message.value === "") {
  alert("Please fill out user and message fields before sending");
  } else if (user.value === "" ) {
  alert("Please fill out user field before sending");
  } else if (message.value === "" ) {
  alert("Please fill out message field before sending");
  } else {
  alert(`Message successfully sent to: ${user.value}`);
  }
  });


// BELL NOTIFICATIONS

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content 
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }

} */


// LOCALSTORAGE

const settings = document.getElementById('settings');
const save = document.getElementById('save');
const cancel = document.getElementById('cancel');
const switch1 = document.querySelectorAll('input[type=checkbox]')[0];
const switch2 = document.querySelectorAll('input[type=checkbox]')[1];  
const timezone = document.getElementById('timezone');


settings.addEventListener('click', (e) => {
  if(e.target === cancel) { 
    clearLocalStorage();
    getLocalStorage();
    timezone.selectedIndex = 0; // when cancel button is pressed, first select option becomes default
  } else if (e.target === save) {
    setLocalStorage();
  } 
});

// Clear local storage
function clearLocalStorage() {
  localStorage.clear();
}

// Set Local storage
function setLocalStorage() {
  localStorage.setItem('switch1', switch1.checked);  
  localStorage.setItem('switch2', switch2.checked);
  localStorage.setItem('timezone', timezone.value); 
}

// Get the data from local storage when refreshed
function getLocalStorage () {   
  
  let switch1Load = localStorage.getItem('switch1');
  let switch2Load = localStorage.getItem('switch2');
  let timezoneLoad = localStorage.getItem('timezone');

  controlSwitch(switch1Load, switch1);
  controlSwitch(switch2Load, switch2);

  if(timezoneLoad !== null) {
    timezone.value = timezoneLoad;
  } 
}
// saved switch for toggle buttons & timezone
function controlSwitch (load, switching) {
  if (load !== null && load === 'true') {
    switching.checked = true;
  } else {
    switching.checked = false;
  }
}
// call getLocalStorage function
getLocalStorage ();