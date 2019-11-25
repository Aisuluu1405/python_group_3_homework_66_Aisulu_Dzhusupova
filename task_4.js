function add() { 
    let div = document.createElement('div');
	div.className = 'element';
	let text = document.createTextNode("Element ");      
	div.appendChild(text);                        
	document.getElementById("container").appendChild(div);
} 