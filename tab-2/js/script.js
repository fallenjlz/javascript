
function $(id){
	return typeof id==='string'?document.getElementById(id):id;  
}

window.onload= function (){
	var index=0;
	var timer=null;

	var lis=$('notice-tit').getElementsByTagName('li'),
	    divs=$('notice-con').getElementsByTagName('div');

	 if(lis.length!=divs.length) return;

	 for(var i=0;i<lis.length;i++){
	 	lis[i].id = i;
	 	lis[i].onmouseover=function(){
	 		//用that这个变量来引用当前滑过的li
	 		var that = this;
	 		//如果存在准备执行的定时器,立刻清除，只有当前停留时间大于500MS，才开始执行
	 		if(timer){
               clearTimeout(timer);
               timer=null;
	 		}
	 		timer=setTimeout(function(){
              for(var j=0;j<lis.length;j++){
              	lis[j].className='';
              	divs[j].style.display='none';
              }
              lis[that.id].className='select';
              divs[that.id].style.display='block';
	 		},500);
	 	}
	 }
}