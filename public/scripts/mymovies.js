

window.onload = function () {
	
	var synopsis = document.querySelectorAll('.synopsis')
	synopsis.onclick = showHide(this)



}
var showHide = function (element){
    element.children[1].classList.toggle('hide')
};
console.log({movies})