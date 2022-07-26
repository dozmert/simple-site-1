// Randomize background
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
function menuBar1() {
	var varBar0 = document.getElementById("menu-0");
	var varBar1 = document.getElementById("menu-1");
	if (varBar1.style.display === "none")
		{varBar0.style.display = "none"; varBar1.style.display = "block";}
	else{varBar0.style.display = "block"; varBar1.style.display = "none";}
};
function menuBar2() {
	var varBar0 = document.getElementById("menu-0");
	var varBar1 = document.getElementById("menu-1");
	if (varBar0.style.display === "none")
		{varBar0.style.display = "block"; varBar1.style.display = "none";}
	else{varBar0.style.display = "none"; varBar1.style.display = "block";}
};
// Title Date bar
	var datetime = new Date();
	console.log(datetime);
	document.getElementById("datetime1").textContent = datetime; //it will print on html page
		setInterval(clock, 1000);
// Menu button functions
function menuButton1() {
	var varTitle1 = document.getElementById("title-1");
	var varTitle2 = document.getElementById("title-2");
	var varTitle3 = document.getElementById("title-3");
	var varTitle4 = document.getElementById("title-4");
	var varTitle5 = document.getElementById("title-5");
	var varTitle6 = document.getElementById("title-6");
	var varTitle7 = document.getElementById("title-7");
	var varTitle8 = document.getElementById("title-8");
	var varTitle9 = document.getElementById("title-9");
	if (varTitle1.style.display === "none")
		{varTitle1.style.display = "block"; varTitle2.style.display = "none"; varTitle3.style.display = "none"; varTitle4.style.display = "none"; varTitle5.style.display = "none"; varTitle6.style.display = "none"; varTitle7.style.display = "none"; varTitle8.style.display = "none"; varTitle9.style.display = "none";}
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
	var varTitle1 = document.getElementById("title-1");
	var varTitle2 = document.getElementById("title-2");
	var varTitle3 = document.getElementById("title-3");
	var varTitle4 = document.getElementById("title-4");
	var varTitle5 = document.getElementById("title-5");
	var varTitle6 = document.getElementById("title-6");
	var varTitle7 = document.getElementById("title-7");
	var varTitle8 = document.getElementById("title-8");
	var varTitle9 = document.getElementById("title-9");
	if (varTitle2.style.display === "none")
		{varTitle2.style.display = "block"; varTitle1.style.display = "none"; varTitle3.style.display = "none"; varTitle4.style.display = "none"; varTitle5.style.display = "none"; varTitle6.style.display = "none"; varTitle7.style.display = "none"; varTitle8.style.display = "none"; varTitle9.style.display = "none";}
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
	var varTitle1 = document.getElementById("title-1");
	var varTitle2 = document.getElementById("title-2");
	var varTitle3 = document.getElementById("title-3");
	var varTitle4 = document.getElementById("title-4");
	var varTitle5 = document.getElementById("title-5");
	var varTitle6 = document.getElementById("title-6");
	var varTitle7 = document.getElementById("title-7");
	var varTitle8 = document.getElementById("title-8");
	var varTitle9 = document.getElementById("title-9");
	if (varTitle3.style.display === "none")
		{varTitle3.style.display = "block"; varTitle2.style.display = "none"; varTitle1.style.display = "none"; varTitle4.style.display = "none"; varTitle5.style.display = "none"; varTitle6.style.display = "none"; varTitle7.style.display = "none"; varTitle8.style.display = "none"; varTitle9.style.display = "none";}	
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
	var varTitle1 = document.getElementById("title-1");
	var varTitle2 = document.getElementById("title-2");
	var varTitle3 = document.getElementById("title-3");
	var varTitle4 = document.getElementById("title-4");
	var varTitle5 = document.getElementById("title-5");
	var varTitle6 = document.getElementById("title-6");
	var varTitle7 = document.getElementById("title-7");
	var varTitle8 = document.getElementById("title-8");
	var varTitle9 = document.getElementById("title-9");
	if (varTitle4.style.display === "none")
		{varTitle4.style.display = "block"; varTitle2.style.display = "none"; varTitle3.style.display = "none"; varTitle1.style.display = "none"; varTitle5.style.display = "none"; varTitle6.style.display = "none"; varTitle7.style.display = "none"; varTitle8.style.display = "none"; varTitle9.style.display = "none";}	
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
	var varTitle1 = document.getElementById("title-1");
	var varTitle2 = document.getElementById("title-2");
	var varTitle3 = document.getElementById("title-3");
	var varTitle4 = document.getElementById("title-4");
	var varTitle5 = document.getElementById("title-5");
	var varTitle6 = document.getElementById("title-6");
	var varTitle7 = document.getElementById("title-7");
	var varTitle8 = document.getElementById("title-8");
	var varTitle9 = document.getElementById("title-9");
	if (varTitle5.style.display === "none")
		{varTitle5.style.display = "block"; varTitle2.style.display = "none"; varTitle3.style.display = "none"; varTitle4.style.display = "none"; varTitle1.style.display = "none"; varTitle6.style.display = "none"; varTitle7.style.display = "none"; varTitle8.style.display = "none"; varTitle9.style.display = "none";}
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
	var varTitle1 = document.getElementById("title-1");
	var varTitle2 = document.getElementById("title-2");
	var varTitle3 = document.getElementById("title-3");
	var varTitle4 = document.getElementById("title-4");
	var varTitle5 = document.getElementById("title-5");
	var varTitle6 = document.getElementById("title-6");
	var varTitle7 = document.getElementById("title-7");
	var varTitle8 = document.getElementById("title-8");
	var varTitle9 = document.getElementById("title-9");
	if (varTitle6.style.display === "none")
		{varTitle6.style.display = "block"; varTitle2.style.display = "none"; varTitle3.style.display = "none"; varTitle4.style.display = "none"; varTitle5.style.display = "none"; varTitle1.style.display = "none"; varTitle7.style.display = "none"; varTitle8.style.display = "none"; varTitle9.style.display = "none";}	
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
	var varTitle1 = document.getElementById("title-1");
	var varTitle2 = document.getElementById("title-2");
	var varTitle3 = document.getElementById("title-3");
	var varTitle4 = document.getElementById("title-4");
	var varTitle5 = document.getElementById("title-5");
	var varTitle6 = document.getElementById("title-6");
	var varTitle7 = document.getElementById("title-7");
	var varTitle8 = document.getElementById("title-8");
	var varTitle9 = document.getElementById("title-9");
	if (varTitle7.style.display === "none")
		{varTitle7.style.display = "block"; varTitle2.style.display = "none"; varTitle3.style.display = "none"; varTitle4.style.display = "none"; varTitle5.style.display = "none"; varTitle6.style.display = "none"; varTitle1.style.display = "none"; varTitle8.style.display = "none"; varTitle9.style.display = "none";}	
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
	var varTitle1 = document.getElementById("title-1");
	var varTitle2 = document.getElementById("title-2");
	var varTitle3 = document.getElementById("title-3");
	var varTitle4 = document.getElementById("title-4");
	var varTitle5 = document.getElementById("title-5");
	var varTitle6 = document.getElementById("title-6");
	var varTitle7 = document.getElementById("title-7");
	var varTitle8 = document.getElementById("title-8");
	var varTitle9 = document.getElementById("title-9");
	if (varTitle8.style.display === "none")
		{varTitle8.style.display = "block"; varTitle2.style.display = "none"; varTitle3.style.display = "none"; varTitle4.style.display = "none"; varTitle5.style.display = "none"; varTitle6.style.display = "none"; varTitle7.style.display = "none"; varTitle1.style.display = "none"; varTitle9.style.display = "none";}
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
	var varTitle1 = document.getElementById("title-1");
	var varTitle2 = document.getElementById("title-2");
	var varTitle3 = document.getElementById("title-3");
	var varTitle4 = document.getElementById("title-4");
	var varTitle5 = document.getElementById("title-5");
	var varTitle6 = document.getElementById("title-6");
	var varTitle7 = document.getElementById("title-7");
	var varTitle8 = document.getElementById("title-8");
	var varTitle9 = document.getElementById("title-9");
	if (varTitle9.style.display === "none")
		{varTitle9.style.display = "block"; varTitle2.style.display = "none"; varTitle3.style.display = "none"; varTitle4.style.display = "none"; varTitle5.style.display = "none"; varTitle6.style.display = "none"; varTitle7.style.display = "none"; varTitle8.style.display = "none"; varTitle1.style.display = "none";}	
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







