function check(){

var question1 = document.question1.choice.value;


	if (question1 == "tetris") { document.getElementById("certo1").style.visibility = "visible"; document.getElementById("falha").style.visibility = "hidden"; }
		else { document.getElementById("falha").style.visibility = "visible"; document.getElementById("certo1").style.visibility = "hidden";
}

}