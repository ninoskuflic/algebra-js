var descriptionNode = document.querySelector('.description');
var h1 = document.createElement('h1');
var ul = document.querySelector("ul");
var ul2 = ul.cloneNode(true);
var infoDiv = document.createElement('div');
infoDiv.className = "info";
var li = document.createElement('li');

descriptionNode.parentNode.prepend(h1);
descriptionNode.parentNode.insertBefore(infoDiv, descriptionNode.nextSibling);

for (var i = 0; i < 3; i++) {
	ul.appendChild(li);
    var li = document.createElement('li');
}