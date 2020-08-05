function myfunction(item){
	item.addEventListener("click",function(){
		if(item.textContent=="X")
			item.textContent="O";
		else if(item.textContent=="O")
			item.textContent="";
		else
			item.textContent="X";

		if(document.getElementById("td1").textContent!="" && document.getElementById("td1").textContent==document.getElementById("td2").textContent && document.getElementById("td2").textContent==document.getElementById("td3").textContent)
		{
			alert("game ends");
			location.reload();
		}

		if(document.getElementById("td4").textContent!="" && document.getElementById("td4").textContent==document.getElementById("td5").textContent && document.getElementById("td5").textContent==document.getElementById("td6").textContent)
		{
			alert("game ends");
			location.reload();
		}

		if(document.getElementById("td7").textContent!="" && document.getElementById("td7").textContent==document.getElementById("td8").textContent && document.getElementById("td8").textContent==document.getElementById("td9").textContent)
		{
			alert("game ends");
			location.reload();
		}

		if(document.getElementById("td1").textContent!="" && document.getElementById("td1").textContent==document.getElementById("td4").textContent && document.getElementById("td4").textContent==document.getElementById("td7").textContent)
		{
			alert("game ends");
			location.reload();
		}

		if(document.getElementById("td2").textContent!="" && document.getElementById("td2").textContent==document.getElementById("td5").textContent && document.getElementById("td5").textContent==document.getElementById("td8").textContent)
		{
			alert("game ends");
			location.reload();
		}

		if(document.getElementById("td3").textContent!="" && document.getElementById("td3").textContent==document.getElementById("td6").textContent && document.getElementById("td6").textContent==document.getElementById("td9").textContent)
		{
			alert("game ends");
			location.reload();
		}

		if(document.getElementById("td1").textContent!="" && document.getElementById("td1").textContent==document.getElementById("td5").textContent && document.getElementById("td5").textContent==document.getElementById("td9").textContent)
		{
			alert("game ends");
			location.reload();
		}

		if(document.getElementById("td3").textContent!="" && document.getElementById("td3").textContent==document.getElementById("td5").textContent && document.getElementById("td5").textContent==document.getElementById("td7").textContent)
		{
			alert("game ends");
			location.reload();
		}

	})


}




var element=document.querySelectorAll("td");
element.forEach(myfunction);
