// Get the modal
var modal = document.getElementById('popup');

// Get the button that opens the modal
var btn = document.getElementById("modal-button");

// Get the element that closes the modal
var close = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.classList.add('overlay-transition');
    modal.classList.remove('overlay-close');
}

// When the user clicks on <span> (x), close the modal
close.onclick = function() {
    modal.classList.remove('overlay-transition');
    modal.classList.add('overlay-close');
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.remove('overlay-transition');
    	modal.classList.add('overlay-close');
    }
}