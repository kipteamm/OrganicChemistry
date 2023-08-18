/* ATOM TYPES

0 - C

*/

function addAtom(type, createButton) {
    addAtomIcon.style.display = 'none'

    row = createButton.closest('.row')

    atoms = ['h-atom', 'horizontal-connection', 'c-atom', 'horizontal-connection', 'h-atom']

    appendToRow(row, atoms, elementIDs)

    elementIDs ++
}

function editAtom(type) {
    const editedAtom = document.getElementById(elementOptions.getAttribute('data-atom-id'))
    const row = editedAtom.closest('.row')

    switch (editedAtom.getAttribute('data-index')) {
        case '0':
            atoms = ['h-atom', 'horizontal-connection', 'c-atom', null, null]

            insertBeforeOnRow(row, atoms, editedAtom, elementIDs)

            elementIDs ++

            break;

        case '2':
            if (!editedAtom.classList.contains(type)) {
                atoms = ['h-atom', 'horizontal-connection', 'c-atom', 'horizontal-connection', 'h-atom']

                replaceOnRow(row, atoms, editedAtom.classList[0], elementIDs)

                elementIDs ++
            }

            break;

        case '4':        
            atoms = [null, null, 'c-atom', 'horizontal-connection', 'h-atom']

            insertBeforeOnRow(row, atoms, editedAtom, elementIDs)

            elementIDs ++

            break;
    }

    closeAllEditMenus()
}