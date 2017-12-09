var addElement = function(e) {
    var list = document.getElementById('thelist');
    //console.log(list);
    
    var element = document.createElement('li');
    element.innerHTML = 'Stuff';

    //mouseover
    element.addEventListener('mouseover',changeHeading);
    element.addEventListener('mouseout',changeBack);
    
    list.appendChild(element);
}

var addMouseover = function(){
    var list = document.getElementsByTagName('li');
    console.log(list);
    console.log(list[0]);
    var len = list.length;
    var i = 0;
    for (;i < len; i++){
	list[i].addEventListener('mouseover',changeHeading);
	list[i].addEventListener('mouseout',changeBack);
    }
}

var changeHeading = function(e) {
    var headings = document.getElementsByTagName('h1');
    var h = headings[0];   
    h.innerHTML = e.srcElement.innerText;
}

var changeBack = function(e){
    var list = document.getElementsByTagName('h1');
    list[0].innerHTML = "Hello World!"
}

var b = document.getElementById('b');
b.addEventListener('click', addElement);

addMouseover();
