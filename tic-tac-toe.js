function myfunction(item){
	item.addEventListener("click",function(){
		if(item.textContent=="X")
			item.textContent="O";
		else if(item.textContent=="O")
			item.textContent="";
		else
			item.textContent="X";

		
	})
}




var element=document.querySelectorAll("td");
element.forEach(myfunction);