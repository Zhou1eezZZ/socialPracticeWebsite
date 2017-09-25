// JavaScript Document
function closeWindow(){
	var float1 = document.getElementById("floatTop");
	var float2 = document.getElementById("floatTopRegister");
	float1.style.display = "none";
	float2.style.display = "none";
}
function showSignInWindow(){
	var float = document.getElementById("floatTop");
	float.style.display = "block";
}
function showRegisterWindow(){
	var float = document.getElementById("floatTopRegister");
	float.style.display = "block";
}
function registerSignIn(){
	var float1 = document.getElementById("floatTop");
	var float2 = document.getElementById("floatTopRegister");
	float2.style.display = "none";
	float1.style.display = "block"
}
function signInRegister(){
	var float1 = document.getElementById("floatTop");
	var float2 = document.getElementById("floatTopRegister");
	float2.style.display = "block";
	float1.style.display = "none"
}
function getId(){
	var D1 = document.getElementById("D1");
	var D2 = document.getElementById("D2");
	var D3 = document.getElementById("D3");
	var D4 = document.getElementById("D4");
	var D5 = document.getElementById("D5");
	var D6 = document.getElementById("D6");
	var D7 = document.getElementById("D7");
	var D8 = document.getElementById("D8");
	var D9 = document.getElementById("D9");
	var D10 = document.getElementById("D10");
	var D11 = document.getElementById("D11");
	var D12 = document.getElementById("D12");
	var A1 = document.getElementById("A1");
	var A2 = document.getElementById("A2");
	var A3 = document.getElementById("A3");
	var A4 = document.getElementById("A4");
	var A5 = document.getElementById("A5");
	var A6 = document.getElementById("A6");
	var A7 = document.getElementById("A7");
	var A8 = document.getElementById("A8");
	var A9 = document.getElementById("A9");
	var A10 = document.getElementById("A10");
	var A11 = document.getElementById("A11");
	var A12 = document.getElementById("A12");
}
function resetDisplay(){
	D1.style.display = "none";
	D2.style.display = "none";
	D3.style.display = "none";
	D4.style.display = "none";
	D5.style.display = "none";
	D6.style.display = "none";
	D7.style.display = "none";
	D8.style.display = "none";
	D9.style.display = "none";
	D10.style.display = "none";
	D11.style.display = "none";
	D12.style.display = "none";
}
function resetColor(){
	A1.style.color = "#797777";
	A2.style.color = "#797777";
	A3.style.color = "#797777";
	A4.style.color = "#797777";
	A5.style.color = "#797777";
	A6.style.color = "#797777";
	A7.style.color = "#797777";
	A8.style.color = "#797777";
	A9.style.color = "#797777";
	A10.style.color = "#797777";
	A11.style.color = "#797777";
	A12.style.color = "#797777";
}
function searchInformation1(){
	getId();
	resetDisplay();
	D1.style.display = "block";
	resetColor();
	A1.style.color = "#00aeff";
}
function searchInformation2(){
	getId();
	resetDisplay();
	D2.style.display = "block";
	resetColor();
	A2.style.color = "#00aeff";
}
function searchInformation3(){
	getId();
	resetDisplay();
	D3.style.display = "block";
	resetColor();
	A3.style.color = "#00aeff";
}
function searchInformation4(){
	getId();
	resetDisplay();
	D4.style.display = "block";
	resetColor();
	A4.style.color = "#00aeff";
}
function searchInformation5(){
	getId();
	resetDisplay();
	D5.style.display = "block";
	resetColor();
	A5.style.color = "#00aeff";
}
function searchInformation6(){
	getId();
	resetDisplay();
	D6.style.display = "block";
	resetColor();
	A6.style.color = "#00aeff";
}
function searchInformation7(){
	getId();
	resetDisplay();
	D7.style.display = "block";
	resetColor();
	A7.style.color = "#00aeff";
}
function searchInformation8(){
	getId();
	resetDisplay();
	D8.style.display = "block";
	resetColor();
	A8.style.color = "#00aeff";
}
function searchInformation9(){
	getId();
	resetDisplay();
	D9.style.display = "block";
	resetColor();
	A9.style.color = "#00aeff";
}
function searchInformation10(){
	getId();
	resetDisplay();
	D10.style.display = "block";
	resetColor();
	A10.style.color = "#00aeff";
}
function searchInformation11(){
	getId();
	resetDisplay();
	D11.style.display = "block";
	resetColor();
	A11.style.color = "#00aeff";
}
function searchInformation12(){
	getId();
	resetDisplay();
	D12.style.display = "block";
	resetColor();
	A12.style.color = "#00aeff";
}

//播放点击事件
function getIdVideo(){
	var video = document.getElementById("video");
	var play = document.getElementById("play");
	var pause = document.getElementById("pause");
}
function openVideo(){
	getIdVideo();
	video.style.display = "block";
	play.style.display = "none";
	pause.style.display = "block";
	video.play();
}
function pauseVideo(){
	getIdVideo();
	video.style.display = "none";
	play.style.display = "block";
	pause.style.display = "none";
	video.pause();
}