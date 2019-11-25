function addDiv(){
	for(let i=1; i<=5; i++) {
    let div = document.createElement('div');
	div.className = 'element';
	let text = document.createTextNode("Element " + i);      
	div.appendChild(text);                        
	document.getElementById("container").appendChild(div);
}
}
addDiv()