// Constants
const elementOptions = document.getElementById('element-options');
const addAtomIcon = document.getElementById('add-atom-icon')
const container = document.getElementById('container');
const overlay = document.getElementById('overlay');

// IDs
let elementIDs = 1;
let atomIDs = 1;
let rowIDs = 1;


function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}


function closeAllEditMenus() {
    document.querySelectorAll('.edit-options').forEach(element => {
        element.style.transform = 'scale(0)'
    })

    overlay.style.display = 'none';
}


window.onclick = function(event) {
    if (!event.target.matches('.atom')) {
        closeAllEditMenus()
    }
}