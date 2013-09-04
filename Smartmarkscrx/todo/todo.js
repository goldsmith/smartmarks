var input = document.getElementsByTagName('textarea')[0];

		function on_checkbox_click(e) {
			if (this.innerText === "") {
				this.innerText = "X";
				this.parentElement.classList.add("completed");
			}
			else {
				this.innerText = "";
				this.parentElement.classList.remove("completed");
			}
		}

		function on_x_click(e) {
			tasks.removeChild(this.parentElement)
		}
		function delall() {
			console.log('asdf')
			while (tasks.firstChild)
				tasks.removeChild(tasks.firstChild);
		}
		input.onkeydown = function(e) {
			if (e.which === 13) {
				var task = document.createElement("div");
				task.className = "task";
				task.innerHTML = "<div class='checkbox'></div>" + input.value + "<span>X</span>";
				task.getElementsByClassName('checkbox')[0].onclick = on_checkbox_click;
				task.getElementsByTagName('span')[0].onclick = on_x_click;
				tasks.appendChild(task);	
				input.value = '';
				return false;
			}
		};
		document.getElementById('delall').onclick=function(){delall()};