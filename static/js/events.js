function openEditMenu(id) {
    closeAllEditMenus()

    let element_options = document.getElementById("options-" + id);

    element_options.style.transform = "scale(1)";

    overlay.style.display = 'block';
}