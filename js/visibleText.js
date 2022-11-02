document.body.addEventListener('mouseover', function(event) {
    let boxOne = event.target.closest('.invisible-text');
 
    if(boxOne) {
        boxOne.innerHTML = 'Main.html'
    } else {
        for (box of document.querySelectorAll('.invisible-text')) box.innerHTML = '(hint)';
    }
});