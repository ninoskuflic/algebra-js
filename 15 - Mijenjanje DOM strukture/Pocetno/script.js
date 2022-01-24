var descriptionNode = document.querySelector('.description');
var footer = document.getElementById('footer');
var h1 = document.createElement('h1');
var infoDiv = document.createElement('div');
infoDiv.setAttribute("class", "info");
var li = document.createElement('li');

descriptionNode.parentNode.prepend(h1);
descriptionNode.parentNode.insertBefore(infoDiv, descriptionNode.nextSibling);

// To be debugged, list item not being created.

for (var i = 0; i < 3; i++) {
	footer.appendChild(li);
}