function mudaTipo() {

	if (document.getElementById("select").value == "pf"){
		document.getElementById("pessoajuridica").style.display = "none";
	} else{
		document.getElementById("pessoajuridica").style.display = "block";
		document.getElementById("pessoafisica").style.display = "none";
	}
}