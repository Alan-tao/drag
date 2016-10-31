// 2016年10月31日15:31:07
	function drag (id) {
		//获取对象	
		var obj = document.getElementById(id);
		// 鼠标按下
		obj.onmousedown = function (ev) {
			/* body... */
			var disX = ev.pageX - obj.offsetLeft;
			var disY = ev.pageY - obj.offsetTop;
			// 鼠标移动
			document.onmousemove = function (ev) {
				obj.style.left = ev.pageX - disX +"px";
				obj.style.top = ev.pageY - disY +"px";
			}
			// 鼠标离开
			document.onmouseup = function (ev) {
				document.onmousemove = null;
				document.onmouseup = null;
			}
		}
		return false;
	}
