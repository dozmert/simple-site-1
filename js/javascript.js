// Randomize background - 5 background files found in /img
var date = new Date();
var hour = date.getHours();
var bgpath = "img/";
var bgd = [ 'bgd1', 'bgd2', 'bgd3', 'bgd4', 'bgd5' ];
var bgd = bgd[Math.floor(Math.random() * bgd.length)];
document.querySelector('.bg').classList.add(bgd);
bgpath += bgd;
bgpath += ".jpg";
var image = document.createElement("img");
image.id = "bgimg";
image.src = bgpath;    
// Menu bar

// Title Date bar
function clock(){
function refreshTime() {
	const timeDisplay = document.getElementById("dateTime1");
	const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	const dayString = new Date().getDay();
	const dateString = new Date().toLocaleString();
	const formattedString = weekday[dayString] + " - " + dateString.replace(", ", " - ");
	timeDisplay.textContent = formattedString;}
	setInterval(refreshTime, 1000);
};
// Menu button functions
function menuButton1() {
	var varCont1 = document.getElementById("content-1");
	var varCont2 = document.getElementById("content-2");
	var varCont3 = document.getElementById("content-3");
	var varCont4 = document.getElementById("content-4");
	var varCont5 = document.getElementById("content-5");
	var varCont6 = document.getElementById("content-6");
	var varCont7 = document.getElementById("content-7");
	var varCont8 = document.getElementById("content-8");
	var varCont9 = document.getElementById("content-9");
	if (varCont1.style.display === "none")
		{varCont1.style.display = "block"; varCont2.style.display = "none"; varCont3.style.display = "none"; varCont4.style.display = "none"; varCont5.style.display = "none"; varCont6.style.display = "none"; varCont7.style.display = "none"; varCont8.style.display = "none"; varCont9.style.display = "none";}
};
function menuButton2() {
	var varCont1 = document.getElementById("content-1"); 
	var varCont2 = document.getElementById("content-2"); 
	var varCont3 = document.getElementById("content-3"); 
	var varCont4 = document.getElementById("content-4"); 
	var varCont5 = document.getElementById("content-5"); 
	var varCont6 = document.getElementById("content-6"); 
	var varCont7 = document.getElementById("content-7"); 
	var varCont8 = document.getElementById("content-8"); 
	var varCont9 = document.getElementById("content-9"); 
	if (varCont2.style.display === "none")
		{varCont2.style.display = "block";varCont1.style.display = "none"; varCont3.style.display = "none";varCont4.style.display = "none"; varCont5.style.display = "none";varCont6.style.display = "none"; varCont7.style.display = "none";varCont8.style.display = "none"; varCont9.style.display = "none";}
};
function menuButton3() {
	var varCont1 = document.getElementById("content-1");
	var varCont2 = document.getElementById("content-2");
	var varCont3 = document.getElementById("content-3");
	var varCont4 = document.getElementById("content-4");
	var varCont5 = document.getElementById("content-5");
	var varCont6 = document.getElementById("content-6");
	var varCont7 = document.getElementById("content-7");
	var varCont8 = document.getElementById("content-8");
	var varCont9 = document.getElementById("content-9");
	if (varCont3.style.display === "none")
		{varCont3.style.display = "block";varCont2.style.display = "none"; varCont1.style.display = "none";varCont4.style.display = "none"; varCont5.style.display = "none";varCont6.style.display = "none"; varCont7.style.display = "none";varCont8.style.display = "none"; varCont9.style.display = "none";}
};
function menuButton4() {
	var varCont1 = document.getElementById("content-1");
	var varCont2 = document.getElementById("content-2");
	var varCont3 = document.getElementById("content-3");
	var varCont4 = document.getElementById("content-4");
	var varCont5 = document.getElementById("content-5");
	var varCont6 = document.getElementById("content-6");
	var varCont7 = document.getElementById("content-7");
	var varCont8 = document.getElementById("content-8");
	var varCont9 = document.getElementById("content-9");
	if (varCont4.style.display === "none")
		{varCont4.style.display = "block";varCont2.style.display = "none"; varCont3.style.display = "none";varCont1.style.display = "none"; varCont5.style.display = "none";varCont6.style.display = "none"; varCont7.style.display = "none";varCont8.style.display = "none"; varCont9.style.display = "none";}
};
function menuButton5() {
	var varCont1 = document.getElementById("content-1");
	var varCont2 = document.getElementById("content-2");
	var varCont3 = document.getElementById("content-3");
	var varCont4 = document.getElementById("content-4");
	var varCont5 = document.getElementById("content-5");
	var varCont6 = document.getElementById("content-6");
	var varCont7 = document.getElementById("content-7");
	var varCont8 = document.getElementById("content-8");
	var varCont9 = document.getElementById("content-9");
	if (varCont5.style.display === "none")
		{varCont5.style.display = "block";varCont2.style.display = "none"; varCont3.style.display = "none";varCont4.style.display = "none"; varCont1.style.display = "none";varCont6.style.display = "none"; varCont7.style.display = "none";varCont8.style.display = "none"; varCont9.style.display = "none";}
};
function menuButton6() {
	var varCont1 = document.getElementById("content-1");
	var varCont2 = document.getElementById("content-2");
	var varCont3 = document.getElementById("content-3");
	var varCont4 = document.getElementById("content-4");
	var varCont5 = document.getElementById("content-5");
	var varCont6 = document.getElementById("content-6");
	var varCont7 = document.getElementById("content-7");
	var varCont8 = document.getElementById("content-8");
	var varCont9 = document.getElementById("content-9");
	if (varCont6.style.display === "none")
		{varCont6.style.display = "block";varCont2.style.display = "none"; varCont3.style.display = "none";varCont4.style.display = "none"; varCont5.style.display = "none";varCont1.style.display = "none"; varCont7.style.display = "none";varCont8.style.display = "none"; varCont9.style.display = "none";}
};
function menuButton7() {
	var varCont1 = document.getElementById("content-1");
	var varCont2 = document.getElementById("content-2");
	var varCont3 = document.getElementById("content-3");
	var varCont4 = document.getElementById("content-4");
	var varCont5 = document.getElementById("content-5");
	var varCont6 = document.getElementById("content-6");
	var varCont7 = document.getElementById("content-7");
	var varCont8 = document.getElementById("content-8");
	var varCont9 = document.getElementById("content-9");
	if (varCont7.style.display === "none")
		{varCont7.style.display = "block";varCont2.style.display = "none"; varCont3.style.display = "none";varCont4.style.display = "none"; varCont5.style.display = "none";varCont6.style.display = "none"; varCont1.style.display = "none";varCont8.style.display = "none"; varCont9.style.display = "none";}
};
function menuButton8() {
	var varCont1 = document.getElementById("content-1");
	var varCont2 = document.getElementById("content-2");
	var varCont3 = document.getElementById("content-3");
	var varCont4 = document.getElementById("content-4");
	var varCont5 = document.getElementById("content-5");
	var varCont6 = document.getElementById("content-6");
	var varCont7 = document.getElementById("content-7");
	var varCont8 = document.getElementById("content-8");
	var varCont9 = document.getElementById("content-9");
	if (varCont8.style.display === "none")
		{varCont8.style.display = "block";varCont2.style.display = "none"; varCont3.style.display = "none";varCont4.style.display = "none"; varCont5.style.display = "none";varCont6.style.display = "none"; varCont7.style.display = "none";varCont1.style.display = "none"; varCont9.style.display = "none";}
};
function menuButton9() {
	var varCont1 = document.getElementById("content-1");
	var varCont2 = document.getElementById("content-2");
	var varCont3 = document.getElementById("content-3");
	var varCont4 = document.getElementById("content-4");
	var varCont5 = document.getElementById("content-5");
	var varCont6 = document.getElementById("content-6");
	var varCont7 = document.getElementById("content-7");
	var varCont8 = document.getElementById("content-8");
	var varCont9 = document.getElementById("content-9");
	if (varCont9.style.display === "none")
		{varCont9.style.display = "block";varCont2.style.display = "none"; varCont3.style.display = "none";varCont4.style.display = "none"; varCont5.style.display = "none";varCont6.style.display = "none"; varCont7.style.display = "none";varCont8.style.display = "none"; varCont1.style.display = "none";}
};
// Content 1 Menu button functions
function contentMenuButton1() {
	var varCont1 = document.getElementById("content-1-1");
	var varCont2 = document.getElementById("content-1-2");
	var varCont3 = document.getElementById("content-1-3");
	var varCont4 = document.getElementById("content-1-4");
	var varCont5 = document.getElementById("content-1-5");
	var varCont6 = document.getElementById("content-1-6");
	var varCont7 = document.getElementById("content-1-7");
	var varCont8 = document.getElementById("content-1-8");
	var varCont9 = document.getElementById("content-1-9");
	if (varCont1.style.display === "none")
		{varCont1.style.display = "block"; varCont2.style.display = "none"; varCont3.style.display = "none"; varCont4.style.display = "none"; varCont5.style.display = "none"; varCont6.style.display = "none"; varCont7.style.display = "none"; varCont8.style.display = "none"; varCont9.style.display = "none";}
};
function contentMenuButton2() {
	var varCont1 = document.getElementById("content-1-1"); 
	var varCont2 = document.getElementById("content-1-2"); 
	var varCont3 = document.getElementById("content-1-3"); 
	var varCont4 = document.getElementById("content-1-4"); 
	var varCont5 = document.getElementById("content-1-5"); 
	var varCont6 = document.getElementById("content-1-6"); 
	var varCont7 = document.getElementById("content-1-7"); 
	var varCont8 = document.getElementById("content-1-8"); 
	var varCont9 = document.getElementById("content-1-9"); 
	if (varCont2.style.display === "none")
		{varCont2.style.display = "block";varCont1.style.display = "none"; varCont3.style.display = "none";varCont4.style.display = "none"; varCont5.style.display = "none";varCont6.style.display = "none"; varCont7.style.display = "none";varCont8.style.display = "none"; varCont9.style.display = "none";}
};
function contentMenuButton3() {
	var varCont1 = document.getElementById("content-1-1"); 
	var varCont2 = document.getElementById("content-1-2"); 
	var varCont3 = document.getElementById("content-1-3"); 
	var varCont4 = document.getElementById("content-1-4"); 
	var varCont5 = document.getElementById("content-1-5"); 
	var varCont6 = document.getElementById("content-1-6"); 
	var varCont7 = document.getElementById("content-1-7"); 
	var varCont8 = document.getElementById("content-1-8"); 
	var varCont9 = document.getElementById("content-1-9"); 
	if (varCont3.style.display === "none")
		{varCont3.style.display = "block";varCont2.style.display = "none"; varCont1.style.display = "none";varCont4.style.display = "none"; varCont5.style.display = "none";varCont6.style.display = "none"; varCont7.style.display = "none";varCont8.style.display = "none"; varCont9.style.display = "none";}
};
function contentMenuButton4() {
	var varCont1 = document.getElementById("content-1-1"); 
	var varCont2 = document.getElementById("content-1-2"); 
	var varCont3 = document.getElementById("content-1-3"); 
	var varCont4 = document.getElementById("content-1-4"); 
	var varCont5 = document.getElementById("content-1-5"); 
	var varCont6 = document.getElementById("content-1-6"); 
	var varCont7 = document.getElementById("content-1-7"); 
	var varCont8 = document.getElementById("content-1-8"); 
	var varCont9 = document.getElementById("content-1-9"); 
	if (varCont4.style.display === "none")
		{varCont4.style.display = "block";varCont2.style.display = "none"; varCont3.style.display = "none";varCont1.style.display = "none"; varCont5.style.display = "none";varCont6.style.display = "none"; varCont7.style.display = "none";varCont8.style.display = "none"; varCont9.style.display = "none";}
};
function contentMenuButton5() {
	var varCont1 = document.getElementById("content-1-1"); 
	var varCont2 = document.getElementById("content-1-2"); 
	var varCont3 = document.getElementById("content-1-3"); 
	var varCont4 = document.getElementById("content-1-4"); 
	var varCont5 = document.getElementById("content-1-5"); 
	var varCont6 = document.getElementById("content-1-6"); 
	var varCont7 = document.getElementById("content-1-7"); 
	var varCont8 = document.getElementById("content-1-8"); 
	var varCont9 = document.getElementById("content-1-9"); 
	if (varCont5.style.display === "none")
		{varCont5.style.display = "block";varCont2.style.display = "none"; varCont3.style.display = "none";varCont4.style.display = "none"; varCont1.style.display = "none";varCont6.style.display = "none"; varCont7.style.display = "none";varCont8.style.display = "none"; varCont9.style.display = "none";}
};
function contentMenuButton6() {
	var varCont1 = document.getElementById("content-1-1"); 
	var varCont2 = document.getElementById("content-1-2"); 
	var varCont3 = document.getElementById("content-1-3"); 
	var varCont4 = document.getElementById("content-1-4"); 
	var varCont5 = document.getElementById("content-1-5"); 
	var varCont6 = document.getElementById("content-1-6"); 
	var varCont7 = document.getElementById("content-1-7"); 
	var varCont8 = document.getElementById("content-1-8"); 
	var varCont9 = document.getElementById("content-1-9"); 
	if (varCont6.style.display === "none")
		{varCont6.style.display = "block";varCont2.style.display = "none"; varCont3.style.display = "none";varCont4.style.display = "none"; varCont5.style.display = "none";varCont1.style.display = "none"; varCont7.style.display = "none";varCont8.style.display = "none"; varCont9.style.display = "none";}
};
function contentMenuButton7() {
	var varCont1 = document.getElementById("content-1-1"); 
	var varCont2 = document.getElementById("content-1-2"); 
	var varCont3 = document.getElementById("content-1-3"); 
	var varCont4 = document.getElementById("content-1-4"); 
	var varCont5 = document.getElementById("content-1-5"); 
	var varCont6 = document.getElementById("content-1-6"); 
	var varCont7 = document.getElementById("content-1-7"); 
	var varCont8 = document.getElementById("content-1-8"); 
	var varCont9 = document.getElementById("content-1-9"); 
	if (varCont7.style.display === "none")
		{varCont7.style.display = "block";varCont2.style.display = "none"; varCont3.style.display = "none";varCont4.style.display = "none"; varCont5.style.display = "none";varCont6.style.display = "none"; varCont1.style.display = "none";varCont8.style.display = "none"; varCont9.style.display = "none";}
};
function contentMenuButton8() {
	var varCont1 = document.getElementById("content-1-1"); 
	var varCont2 = document.getElementById("content-1-2"); 
	var varCont3 = document.getElementById("content-1-3"); 
	var varCont4 = document.getElementById("content-1-4"); 
	var varCont5 = document.getElementById("content-1-5"); 
	var varCont6 = document.getElementById("content-1-6"); 
	var varCont7 = document.getElementById("content-1-7"); 
	var varCont8 = document.getElementById("content-1-8"); 
	var varCont9 = document.getElementById("content-1-9"); 
	if (varCont8.style.display === "none")
		{varCont8.style.display = "block";varCont2.style.display = "none"; varCont3.style.display = "none";varCont4.style.display = "none"; varCont5.style.display = "none";varCont6.style.display = "none"; varCont7.style.display = "none";varCont1.style.display = "none"; varCont9.style.display = "none";}
};
function contentMenuButton9() {
	var varCont1 = document.getElementById("content-1-1"); 
	var varCont2 = document.getElementById("content-1-2"); 
	var varCont3 = document.getElementById("content-1-3"); 
	var varCont4 = document.getElementById("content-1-4"); 
	var varCont5 = document.getElementById("content-1-5"); 
	var varCont6 = document.getElementById("content-1-6"); 
	var varCont7 = document.getElementById("content-1-7"); 
	var varCont8 = document.getElementById("content-1-8"); 
	var varCont9 = document.getElementById("content-1-9"); 
	if (varCont9.style.display === "none")
		{varCont9.style.display = "block";varCont2.style.display = "none"; varCont3.style.display = "none";varCont4.style.display = "none"; varCont5.style.display = "none";varCont6.style.display = "none"; varCont7.style.display = "none";varCont8.style.display = "none"; varCont1.style.display = "none";}
};





