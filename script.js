var counter=0;
function setup() {
no canvas();
 var timer=select('#timer');
 timer.html(counter);
 function timeup()
 {
 	counter++;
 	 timer.html("abhi");
 }
 setInterval(timeup,1000);
}