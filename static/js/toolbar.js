function showC() {
    const catoms = document.querySelectorAll('.c-atom');
    catoms.forEach(element => {
        element.classList.add('active-c-atom')
    });
}

function hideC() {
    const catoms = document.querySelectorAll('.c-atom');
    catoms.forEach(element => {
        element.classList.remove('active-c-atom')
    });
}

function showH() {
    const catoms = document.querySelectorAll('.h-atom');
    catoms.forEach(element => {
        element.classList.add('active-h-atom')
    });
}

function hideH() {
    const catoms = document.querySelectorAll('.h-atom');
    catoms.forEach(element => {
        element.classList.remove('active-h-atom')
    });
}