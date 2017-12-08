var addElement = function(e) {
    var list = document.getElementById('thelist');
    console.log(list);
    var element = document.createElement("LI");
    var textElement = document.createTextNode('stuff');
    element.appendChild(textElement);
				    
    list.appendChild(element);
}

var b = document.getElementById('b');
b.addEventListener('click', addElement);
