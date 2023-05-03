// Constants
const container = document.getElementById('container');
const element_options = document.getElementById('element-options');
const overlay = document.getElementById('overlay');

const atom = document.getElementById('atom');
const hatom = document.getElementById('h-atom');

// IDs
let elementIds = 1;
let atomIds = 1;
let rowIds = 4;

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