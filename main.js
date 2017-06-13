var start = false;
var timesession = 25 * 60;
var sec = timesession % 60 >= 10 ? timesession % 60 : '0'+timesession % 60;
var min = timesession / 60 >= 10 ? timesession / 60 : '0'+timesession / 60;
var breaktime = parseInt(document.querySelector('.break-time').innerText, 10);
var timer = document.querySelector('.timer');
var circle = document.querySelector(".circle");
timer.innerText = min +':'+sec;
var startInterval, breakInterval;
// -----------------------timer start--------------------------------------//
circle.addEventListener("click", function(e){
	start = !start;
		 timesession = parseInt(document.querySelector('.session-time').innerText, 10) * 60;
		 breaktime *=60;
	
	if(start){
		e.target.style.boxShadow = '12px 12px 12px #0A2239';
		document.querySelector('.display-session').innerText = "Session Start";
		startInterval = setInterval(function(){
			if(timesession > 0){
				timesession --;
         		sec = timesession % 60 >= 10 ? Math.floor(timesession % 60) : '0'+Math.floor(timesession % 60);
		 		min = timesession / 60 >= 10 ? Math.floor(timesession / 60) : '0'+Math.floor(timesession / 60);
				timer.innerText = min +':'+sec;
        }else{
        document.querySelector('.display-session').innerText = "Break Time";
        clearInterval(startInterval);
          breakInterval = setInterval(function(){
        if(breaktime > 0){
                breaktime --;
         sec = breaktime % 60 >= 10 ? Math.floor(breaktime % 60) : '0'+Math.floor(breaktime % 60);
         min = breaktime / 60 >= 10 ? Math.floor(breaktime / 60) : '0'+Math.floor(breaktime / 60);
          timer.innerText = min +':'+sec;  
                        console.log(sec)
                    }else{
                        clearInterval(breakInterval);
                        document.querySelector('.display-session').innerText = "";
                        e.target.style.boxShadow = 'none';
        timesession = 25 * 60;
	 	min = timesession / 60 >= 10 ? timesession / 60 : '0'+timesession / 60;
	 	sec = timesession % 60 >= 10 ? timesession % 60 : '0'+timesession % 60;
	 	document.querySelector('.session-time').innerText = min;
		timer.innerText = min+":"+sec;
                    }
                }, 1000);
			}
		}, 1000);
	}else{
	
		document.querySelector('.display-session').innerText = "";
		e.target.style.boxShadow = 'none';
		clearInterval(startInterval);
        clearInterval(breakInterval);
		timesession = 25 * 60;
	 	min = timesession / 60 >= 10 ? timesession / 60 : '0'+timesession / 60;
	 	sec = timesession % 60 >= 10 ? timesession % 60 : '0'+timesession % 60;
	 	document.querySelector('.session-time').innerText = min;
		timer.innerText = min+":"+sec;
        
        breaktime = 5;
        document.querySelector('.break-time').innerText = 5;
	}

});
//----------------------add break------------------------------------------//
document.querySelector('.add-break').addEventListener('click', function(e){
	if(!start){
		breaktime +=5;
		document.querySelector('.break-time').innerText = breaktime;
	}
});
//----------------------minus break------------------------------------------//
document.querySelector('.minus-break').addEventListener('click', function(e){
	if(!start){
		if(breaktime > 5){
			breaktime -=5;
			document.querySelector('.break-time').innerText = breaktime;
		}
	}
});
//----------------------add session------------------------------------------//
document.querySelector('.add-session').addEventListener('click', function(e){
	if(!start){
		min += 5;
		document.querySelector('.session-time').innerText = min;
		timer.innerText = min +':'+sec;
	}
});
//----------------------minus session------------------------------------------//
document.querySelector('.minus-session').addEventListener('click', function(e){
	if(!start){
		if(min > 5){
			min -= 5;
			document.querySelector('.session-time').innerText = min;
			min = min >=10 ? min : '0'+min;
			timer.innerText = min +':'+sec;
		}
	}
});

