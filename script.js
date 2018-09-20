var result=0;
var c=['YELLOW','RED','PINK','GREEN','BLUE','BROWN','GRAY','VIOLET','PURPLE'];
 function str()
{   
	var time=20;
	
   jsplay1();
	document.getElementById('title').style.backgroundColor="green";
     var x=setInterval(function()
	{
		time--;
		document.getElementById('my').disabled=true;
		document.getElementById('title').textContent=time;
         if (time <0) {
       	 alert("GAME OVER!!!!!  YOUR SCORE IS "+ result);
       	 location.reload();
     comp();
       document.getElementById('title').style.backgroundColor="red";
     }

	},1000);
}
function comp(i){
	var l1=i;
	var n = document.getElementById('detect').innerHTML;
	if(n ===l1)
{
    ++result;
}
  document.getElementById('res').innerHTML = result;
  return result;
}
function jsplay1()
{
    var rnd1=Math.floor(Math.random()*9);
    document.getElementById('cl1').innerHTML = c[rnd1];
    var rnd2=Math.floor(Math.random()*9);
    document.getElementById('cl2').innerHTML = c[rnd2];
    var rnd3=Math.floor(Math.random()*9);
    document.getElementById('cl3').innerHTML = c[rnd3];
    var rnd4=Math.floor(Math.random()*9);
    document.getElementById('cl4').innerHTML = c[rnd4];
    var rnd5=Math.floor(Math.random()*9);
    document.getElementById('cl5').innerHTML = c[rnd5];
    var rnd6=Math.floor(Math.random()*9);
    document.getElementById('cl6').innerHTML = c[rnd6];
    var rnd7=Math.floor(Math.random()*9);
    document.getElementById('cl7').innerHTML = c[rnd7];
    var rnd8=Math.floor(Math.random()*9);
    document.getElementById('cl8').innerHTML = c[rnd8];
    var rnd9=Math.floor(Math.random()*9);
    document.getElementById('cl9').innerHTML = c[rnd9];
    var abc= [rnd1,rnd2,rnd3,rnd4,rnd5,rnd6,rnd7,rnd8,rnd9];
	var rnd=Math.floor(Math.random()*9);
	var tr = abc[rnd];
    document.getElementById('detect').innerHTML = c[tr];
 }