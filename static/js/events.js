function openEditMenu(id) {
    closeAllEditMenus()

    elementOptions.setAttribute('data-atom-id', id)
    
    const targetElement = document.getElementById(id)

    // Calculate the center position of the target element
    const targetRect = targetElement.getBoundingClientRect();
    const targetCenterX = targetRect.left + targetRect.width / 2;
    const targetCenterY = targetRect.top + targetRect.height / 2;

    // Calculate the width and height of the centered element
    const centeredWidth = elementOptions.offsetWidth;
    const centeredHeight = elementOptions.offsetHeight;

    // Calculate the position to center the element
    const centeredLeft = targetCenterX - centeredWidth / 2;
    const centeredTop = targetCenterY - centeredHeight / 2;

    // Apply the centered position to the element
    elementOptions.style.left = centeredLeft + 'px';
    elementOptions.style.top = centeredTop + 'px';

    elementOptions.style.transform = `scale(1)`

    overlay.style.display = 'block';
}