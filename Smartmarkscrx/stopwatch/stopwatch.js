document.getElementById('start').onclick=function(){startTimer(minutes, seconds, milliseconds)};
document.getElementById('stop').onclick=function(){stopTimer()};
document.getElementById('cont').onclick=function(){continueTimer()};
document.getElementById('reset').onclick=function(){resetTimer()};
			var	watch, milliInterval, secInterval, minInterval;
			var stop = document.getElementById("stop");
			var watch = StopWatch();

			minutes.focus();

			function StopWatch() {

				var start;

				var millis,
					secs,
					mins;

				var stopmillis = 0,
					stopsecs = 0,
					stopmins = 0;

				var started = false;

				return {

					start: function() {
						start = new Date().getTime();
					},

					setTime: function(milliseconds, seconds, minutes) {
						stopmillis = parseInt(milliseconds);
						stopsecs = parseInt(seconds);
						stopmins = parseInt(minutes);
					},

					reset: function() {
						millis = 0;
						secs = 0;
						mins = 0;

						started = false;
					},

					update: function(time) {
						if (time === "milliseconds") {
							/* minimum browser interval is 5 milliseconds */
							millis = (stopmillis + new Date().getTime() - start) % 1000;
							return millis;
						}
						else if (time === "seconds") {
							secs = stopsecs + Math.floor(((new Date().getTime() - start)/1000)) % 60;
							return secs;
						}
						else if (time === "minutes") {
							mins = stopmins + Math.floor((new Date().getTime() - start)/60000);
							return mins;
						}
						else {
							return;
						}
							
					},

					started: function() {
						return started;
					},
				};

			};

			function startTimer(minutes, seconds, millseconds) {

				watch.setTime(milliseconds.innerText, seconds.innerText, minutes.innerText);
				watch.start();

				milliInterval = window.setInterval(function() {
					current = String(watch.update("milliseconds"));
					if (current.length === 3) {
						milliseconds.innerText = current;
					}
					else if (current.length === 2) {
						milliseconds.innerText = "0" + current;
					}
					else {
						milliseconds.innerText = "00" + current;
					}
				}, 5);

				secInterval = window.setInterval(function() {
					current = String(watch.update("seconds"));
					seconds.innerText = (current.length === 2) ? current : "0" + current;
				}, 5);

				minInterval = window.setInterval(function() {
					current = String(watch.update("minutes"));
					minutes.innerText = (current.length === 2) ? current : "0" + current;
				}, 5);

				start.style.display = "none";
				stop.style.display = "block";

			};

			function stopTimer() {
				window.clearInterval(milliInterval);
				window.clearInterval(secInterval);
				window.clearInterval(minInterval);

				stop.style.display = "none";
				cont.style.display = "block";
				reset.style.display = "block";
			};

			function continueTimer() {
				cont.style.display = "none";
				reset.style.display = "none";

				startTimer(minutes, seconds, milliseconds);
			};

			function resetTimer() {
				cont.style.display = "none";
				reset.style.display = "none";

				clearTimer();
			};

			function clearTimer() {
				window.clearInterval(milliInterval);
				window.clearInterval(secInterval);
				window.clearInterval(minInterval);

				watch.reset();

				start.style.display = "block";
				minutes.innerText = "00";
				seconds.innerText = "00";
				milliseconds.innerText = "000";
			};
