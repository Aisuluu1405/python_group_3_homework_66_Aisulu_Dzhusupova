let element = document.querySelectorAll(".element");
let i;
for (i = 0; i < element.length; i++){
	if (i < 3) {
	element[i].style.backgroundColor = "red";
	}else {
	element[i].style.backgroundColor = "green";
	}
}