let box = document.getElementById("box");


// To check current status of elements
let menuObj = {
	btnPlayS : true,
	btnHtpS : true,
	btnAboutS : true,
	btnExitS : true,
	btnSingleS : false,
	btnMultiS : false,
	btnBackS : false,
	btnBackS2 : false,
	btnBackS3 : false,
	btnBackS4 : false,
	btnBackS5 : false,
	btnBackS6 : false,
	htpTextS : false,
	aboutTextS : false
}

 var btnPlay = document.createElement("button"),
        btnHtp = document.createElement("button"),
        btnAbout = document.createElement("button"),
        btnExit = document.createElement("button"),
        btnSingle = document.createElement("button"),
        btnMulti = document.createElement("button"),
        // btnBack = document.createElement("button");
        btnBack2 = document.createElement("button");
        btnBack3 = document.createElement("button");
        btnBack4 = document.createElement("button");
        btnBack5 = document.createElement("button");
        btnBack6 = document.createElement("button");

        htpText = document.createElement("p");
        aboutText = document.createElement("p");


btnPlay.innerHTML = "PLAY"
btnHtp.innerHTML = "HOW TO PLAY"
btnAbout.innerHTML = "ABOUT"
btnExit.innerHTML = "EXIT"
btnSingle.innerHTML = "SINGLE PLAYER"
btnMulti.innerHTML = "MULTI PLAYER"
// btnBack.innerHTML = "BACK"
btnBack2.innerHTML = "BACK"
btnBack3.innerHTML = "BACK"
btnBack4.innerHTML = "BACK"
btnBack5.innerHTML = "BACK"
btnBack6.innerHTML = "BACK"

// Contents
htpText.innerHTML = "Instructions on how to play the game."
aboutText.innerHTML = "Creator : Prince Agrawal"

box.appendChild(btnPlay);
box.appendChild(btnHtp);
box.appendChild(btnAbout);
box.appendChild(btnExit);
box.appendChild(btnSingle);
box.appendChild(btnMulti);
// box.appendChild(btnBack);
box.appendChild(btnBack2);
box.appendChild(btnBack3);
box.appendChild(btnBack4);
box.appendChild(btnBack5);
box.appendChild(btnBack6);

box.appendChild(htpText);
box.appendChild(aboutText);


function menucheck(){
	// Front Menu

	if(menuObj.btnPlayS){
		btnPlay.style.display = "flex"
	}else{
		btnPlay.style.display = "none"
	}
	if(menuObj.btnHtpS){
		btnHtp.style.display = "flex"
	}else{
		btnHtp.style.display = "none"
	}
	if(menuObj.btnAboutS){
		btnAbout.style.display = "flex"
	}else{
		btnAbout.style.display = "none"
	}
	if(menuObj.btnExitS){
		btnExit.style.display = "flex"
	}else{
		btnExit.style.display = "none"
	}

	//  Play menu
	if(menuObj.btnSingleS){
		btnSingle.style.display = "flex"
	}else{
		btnSingle.style.display = "none"
	}
	if(menuObj.btnMultiS){
		btnMulti.style.display = "flex"
	}else{
		btnMulti.style.display = "none"
	}

	// Back btns
	// if(menuObj.btnBackS){
	// 	btnBack.style.display = "flex"
	// }else{
	// 	btnBack.style.display = "none"
	// }

	if(menuObj.btnBackS2){
		btnBack2.style.display = "flex"
	}else{
		btnBack2.style.display = "none"
	}

	if(menuObj.btnBackS3){
		btnBack3.style.display = "flex"
	}else{
		btnBack3.style.display = "none"
	}

	if(menuObj.btnBackS4){
		btnBack4.style.display = "flex"
	}else{
		btnBack4.style.display = "none"
	}

	if(menuObj.btnBackS5){
		btnBack5.style.display = "flex"
	}else{
		btnBack5.style.display = "none"
	}

	if(menuObj.btnBackS6){
		btnBack6.style.display = "flex"
	}else{
		btnBack6.style.display = "none"
	}

	if(menuObj.htpTextS){
		htpText.style.display = "flex"
	}else{
		htpText.style.display = "none"
	}

	if(menuObj.aboutTextS){
		aboutText.style.display = "flex"
	}else{
		aboutText.style.display = "none"
	}
}

menucheck()
	
	

btnPlay.addEventListener('click',playEvent);
btnHtp.addEventListener('click', htpEvent);
btnAbout.addEventListener('click', aboutEvent);
btnExit.addEventListener('click', exitEvent);

//  Back Buttons Event Listeners
btnBack2.addEventListener('click', btnBack2Event);

function btnBack2Event(e){
	menuObj.btnPlayS = true
	menuObj.btnHtpS = true
	menuObj.btnAboutS = true
	menuObj.btnExitS = true
	menuObj.btnSingleS = false
	menuObj.btnMultiS = false
	menuObj.btnBackS2 = false
	menuObj.btnBackS3 = false
	menuObj.btnBackS4 = false
	menuObj.btnBackS5 = false
	menuObj.btnBackS6 = false
	menuObj.htpTextS = false
	menuObj.aboutTextS = false


	menucheck()
}

btnBack3.addEventListener('click', btnBack3Event);

function btnBack3Event(e){
	menuObj.btnPlayS = true
	menuObj.btnHtpS = true
	menuObj.btnAboutS = true
	menuObj.btnExitS = true
	menuObj.btnSingleS = false
	menuObj.btnMultiS = false
	menuObj.btnBackS2 = false
	menuObj.btnBackS3 = false
	menuObj.btnBackS4 = false
	menuObj.btnBackS5 = false
	menuObj.btnBackS6 = false
	menuObj.htpTextS = false
	menuObj.aboutTextS = false
	menucheck()
}

btnBack4.addEventListener('click', btnBack4Event);

function btnBack4Event(e){
	menuObj.btnPlayS = true
	menuObj.btnHtpS = true
	menuObj.btnAboutS = true
	menuObj.btnExitS = true
	menuObj.btnSingleS = false
	menuObj.btnMultiS = false
	menuObj.btnBackS2 = false
	menuObj.btnBackS3 = false
	menuObj.btnBackS4 = false
	menuObj.btnBackS5 = false
	menuObj.btnBackS6 = false
	menuObj.htpTextS = false
	menuObj.aboutTextS = false
	menucheck()
}

function playEvent(e){
	menuObj.btnPlayS = false
	menuObj.btnHtpS = false
	menuObj.btnAboutS = false
	menuObj.btnExitS = false
	menuObj.btnSingleS = true
	menuObj.btnMultiS = true
	menuObj.btnBackS2 = false
	menuObj.btnBackS3 = false
	menuObj.btnBackS4 = true
	menuObj.btnBackS5 = false
	menuObj.btnBackS6 = false
	menuObj.htpTextS = false
	menuObj.aboutTextS = false
	menucheck()
}

function htpEvent(e){
	// console.log("hi")
	menuObj.btnPlayS = false
	menuObj.btnHtpS = false
	menuObj.btnAboutS = false
	menuObj.btnExitS = false
	menuObj.btnSingleS = false
	menuObj.btnMultiS = false
	menuObj.btnBackS2 = true
	menuObj.btnBackS3 = false
	menuObj.btnBackS4 = false
	menuObj.btnBackS5 = false
	menuObj.btnBackS6 = false
	menuObj.htpTextS = true
	menuObj.aboutTextS = false
	menucheck()
}

function aboutEvent(e){
	menuObj.btnPlayS = false
	menuObj.btnHtpS = false
	menuObj.btnAboutS = false
	menuObj.btnExitS = false
	menuObj.btnSingleS = false
	menuObj.btnMultiS = false
	menuObj.btnBackS2 = false
	menuObj.btnBackS3 = true
	menuObj.btnBackS4 = false
	menuObj.btnBackS5 = false
	menuObj.btnBackS6 = false
	menuObj.htpTextS = false
	menuObj.aboutTextS = true
	menucheck()
}

function exitEvent(e){
	window.close()
}