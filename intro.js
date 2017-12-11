var addElement = function(e) {
    var list = document.getElementById('thelist');
    //console.log(list);

    var element = document.createElement('li');
    element.innerHTML = 'Stuff';

    //mouseover
    element.addEventListener('mouseover',changeHeading);
    element.addEventListener('mouseout',changeBack);

    list.appendChild(element);
    removeElement();
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

var removeElement = function(){
  var listElements = document.getElementsByTagName("LI");
  for (var i = 0; i < listElements.length; i++) {
    listElements[i].addEventListener('click', remove);
  }
};

var remove = function(e){
    var list = document.getElementById("thelist");
    list.removeChild(this);
  };

removeElement();

/*var fibonacci = function(n){
  if (n <= 1){
    return 1;
  }
  else
   {
     return fibonacci(n - 1) + fibonacci(n - 2);
   }
   };*/

var fibonacci = function (n){
  var a = 1, b = 1;
  
  while (n >= 2){
    var temp = a;
    a = a + b;
    b = temp;
    n--;
  }
  return b;
}

fibNum = 1;


var addFib= function(e){
    var list = document.getElementById('theSecond');
    //console.log(list);

    var element = document.createElement('li');
    element.innerHTML = fibonacci(fibNum);
    fibNum++;
    //mouseover
  //  element.addEventListener('mouseover',changeHeading);
  //  element.addEventListener('mouseout',changeBack);

    list.appendChild(element);
    //removeElement();
}


var b2 = document.getElementById('b2');
b2.addEventListener('click', addFib);
