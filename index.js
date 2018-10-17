var start_btn = document.getElementById('start'),
		stop_btn = document.getElementById('stop'),
		continue_btn = document.getElementById('continue'),
		display_time = document.getElementById('time'),
		audio = document.getElementById('audio'),
		div = document.getElementById('list'),
		duration = 25 * 60 , timer = duration, minutes, seconds;

function startTimer() {
	start = setInterval(function() {
	minutes = parseInt(timer / 60, 10),
	seconds = timer % 60;

	minutes = minutes < 10 ? '0' + minutes : minutes;
	seconds = seconds < 10 ? '0' + seconds : seconds;

	display_time.innerText = minutes + ':' + seconds;
	start_btn.style.display = 'none';
	stop_btn.style.display = 'block' ;
	audio.pause();
	audio.currentTime = 0;

	if(--timer < 0 ){
		fullStop();	
		}
	}, 1000)
}
function stopTimer() {
	stop_btn.style.display = 'none';
	continue_btn.style.display = 'block';
	clearInterval(start);
	var li = document.createElement('li');
	li.innerText = display_time.innerText;
	var ul = document.getElementById('list');
	ul.appendChild(li);
}

function continueTimer(){
	stop_btn.style.display = 'block';
	continue_btn.style.display = 'none'
	setTimeout(startTimer, 1000)
}

function fullStop() {
	stopTimer();
	continue_btn.style.display = 'none';
	start_btn.style.display = 'block';
	timer = duration;
	audio.currentTime = 0;
	audio.play();
}