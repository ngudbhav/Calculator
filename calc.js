var val1 = 0;
var val2 = 0;
var opnum = 0;
window.onload = function(){
	var input = document.getElementsByName("field")[0].focus();
}
function checknum(e){
	var keynum = e.which;
	if(keynum>=48 && keynum<=57){
		console.log(keynum);
	}
	else if(keynum === 8 || keynum === 116 || keynum === 0){}
	else if(keynum >=42 && keynum <= 47){
		e.preventDefault();
		op(String.fromCharCode(keynum));
	}
	else if(keynum === 13){equal();}
	else{
		e.preventDefault();
		console.log(keynum);
		alert('No String Allowed!');
	}
}
function selectnum(e){
	var number = e.value;
	document.getElementsByName("field")[0].value = document.getElementsByName("field")[0].value + 	e.value;
}
//FUNCTION FOR UNARY OPERATORS
function unary(e){
	var symbol = e.value;
	if(document.getElementsByName("field")[0].value === "")
	{
	}
	else
	{
		val1 = parseInt(document.getElementsByName("field")[0].value);
		if(symbol === "1/x")
		{
			document.getElementsByName("field")[0].value = 1.00/val1;
		}
		else if(e.id === "root")
		{
			document.getElementsByName("field")[0].value = Math.sqrt(val1);
		}
		else if(symbol === "%")
		{
			document.getElementsByName("field")[0].value = val1 * 100;
		}
	}
}
//FUNCTION FOR THE BINARY OPERATORS
function op(e)
{//4,5,9,10
	console.log(e);
	var operation = e.value;
	val1 = val1 + parseInt(document.getElementsByName("field")[0].value);
	document.getElementsByName("field")[0].value = "";
	if(e === document.getElementsByTagName("INPUT")[4] || e === "+"){
		console.log("adding");
		opnum = 1;
	}
	else if(e === document.getElementsByTagName("INPUT")[5] || e === "-"){
		console.log("subtracting");
		opnum = 2;
	}
	else if(e === document.getElementsByTagName("INPUT")[9] || e === "*"){
		console.log("multiplying");
		opnum = 3;
	}
	else if(e === document.getElementsByTagName("INPUT")[10] || e === "/"){
		console.log("division");
		opnum = 4;
	}
}
function equal(){
	if(document.getElementsByName("field")[0].value === ""){
		val2 = 0;
	}
	else{
		val2 = parseInt(document.getElementsByName("field")[0].value);
	}
	switch(opnum){
		case 1:
			document.getElementsByName("field")[0].value = val1 + val2;
			val1 = 0;
			val2 = 0;
			break;
		case 2:
			document.getElementsByName("field")[0].value = val1 - val2;
			val1 = 0;
			val2 = 0;
			break;
		case 3:
			document.getElementsByName("field")[0].value = val1 * val2;
			val1 = 0;
			val2 = 0;
			break;
		case 4:
			document.getElementsByName("field")[0].value = val1 / val2;
			val1 = 0;
			val2 = 0;
			break;
		default:
			break;
	}
}