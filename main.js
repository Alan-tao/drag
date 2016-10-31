// 2016年10月31日15:31:07

	function drag (id) {
		
		var obj = document.getElementById(id);
		// 鼠标按下
		obj.onmousedown = function (ev) {
			/* body... */
			var disX = ev.pageX - obj.offsetLeft;
			var disY = ev.pageY - obj.offsetTop;
			// 鼠标移动
			console.log(disX);
			console.log(disY);
		}

	}