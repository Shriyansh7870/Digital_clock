var assigntime = document.getElementsByClassName("box") 
let timedepend= document.getElementById('TimeDepend')
function clocktime()
{
	let time = new Date();
	let hrs = time.getHours();
	let min =time.getMinutes();
	let sec = time.getSeconds();
	let AMPM="";
	console.log(hrs);
	console.log(min);
	console.log(sec);
	console.log(assigntime);
	if(hrs>12)
	{
		hrs =hrs-12;
		AMPM = "PM"
	}
	else{
		AMPM = "AM"
	}
	assigntime[1].innerText =`${hrs} \n hrs`
	assigntime[2].innerText =`${min} \n mins`
	assigntime[3].innerText =`${sec} \n sec`
	assigntime[4].innerText =`${AMPM}`
	if(hrs>=10  && AMPM ==='AM')
	{
	   timedepend.innerHTML="GRAB SOME HEALTHY BREAKFAST!!!";
	}
	else if(hrs<4 && hrs>=1 && AMPM==='PM'){
	   timedepend.innerHTML="LETS HAVE SOME LUNCH !!";
	}
	else if(hrs>=4 && hrs<=8 && AMPM==='PM')
	{
		timedepend.innerHTML="STOP VAWNING,GET SOME TEA... ITS JUST EVENING!";
	}
	else if(hrs>=8 && hrs<=12 && AMPM==='PM')
		{
		timedepend.innerHTML="CLOSE YOUR EYES AND GO TO SLEEP";
	}
	else{
		timedepend.innerHTML='Good Night!! Go Do What You Want!!'
	}
	
}
        
setInterval(()=>
{
	clocktime();
	

},1000)

let Balcony1 =document.getElementsByClassName('change2')
let good = document.getElementById('Good')
let inputValue=document.getElementsByClassName('Drop') 
function callFunction()
{
	let time=new Date();
	let hrs=time.getHours();
	const box5=inputValue[0].options[inputValue[0].value]
	const box6=inputValue[1].options[inputValue[1].value]
	const box7=inputValue[2].options[inputValue[2].value]
	const box8=inputValue[3].options[inputValue[3].value]
	con1.innerHTML=`Wake Up Time:${box5.text}`
	con2.innerHTML=`Lunch Time: Up${box6.text}`
	con3.innerHTML=`Nap Time:${box7.text}`
	con4.innerHTML=`Night Time:${box8.text}`
	if(parseInt(inputValue[0].value)===hrs)
	{
		good.innerHTML = "GOOD MORNING WAKE UP !!"
		Balcony1[0].src='./morning.svg'

	}
	else if(parseInt(inputValue[1].value)===hrs )
	{
		good.innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP"
	    Balcony1[0].src="./Party.svg"

	}
	else if(parseInt(inputValue[2].value)===hrs)
	{
		good.innerHTML= "GOOD EVENING !!"
		Balcony1[0].src='./evening.png'
	}
	else if (parseInt(inputValue[3].value)===hrs){
		good.innerHTML = "GOOD NIGHT !!"
		Balcony1[0].src='./sleep.svg'
}
}

