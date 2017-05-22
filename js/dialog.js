/**
 * 游戏对话组件
 * @param {string} id	  对话框的id
 * @param {string} text  对话文本
 * @param {number} speed 速度
 */
var gameDialog = function(id,text,speed){
	var innerBox = document.getElementById(id); 
	var text = text; 
	var len = text.length; 
	var index = 0;
	var timer = null;
	timer = setInterval(function(){
		if(index == len){
			clearInterval(timer);
		}
		var scrollHeight = innerBox.scrollHeight; //内容的滚动高度
		innerBox.innerHTML += text.charAt(index++); //charAt() 方法可返回指定位置的字符。
		if(innerBox.clientHeight <  innerBox.scrollHeight){  //.clientWidth可见区域的宽度
			console.log('溢出啦');
			innerBox.innerHTML = '';
			scrollHeight +=  25;
		}
	},speed);
}
