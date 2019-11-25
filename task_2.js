let element = document.querySelectorAll(".element");
let i;
let red = 3;
for (i = 0; i < element.length; i++){
	if (i < red) {
	element[i].style.backgroundColor = "red";
	}else {
	element[i].style.backgroundColor = "green";
	}
}