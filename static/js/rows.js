function appendToRow(row, atoms, elementID) {
    atoms.forEach((atom, index) => {
        row.appendChild(createAtom(atom, index, elementID))
    });
}


function insertBeforeOnRow(row, atoms, child, elementID) {
    atoms.forEach((atom, index) => {
        if (atom !== null) {
            row.insertBefore(createAtom(atom, index, elementID), child)
        }
    });

    row.removeChild(child)
}


function insertAfterOnRow(row, atoms, child, elementID) {
    atoms.forEach((atom, index) => {
        if (atom !== null) {
            row.insertAfter(createAtom(atom, index, elementID), child)
        }
    });

    row.removeChild(child)
}


function replaceOnRow(row, atoms, originalElementID, elementID) {
    const children = document.querySelectorAll(`.${originalElementID}`)

    atoms.forEach((atom, index) => {
        if (atom !== null) {
            row.replaceChild(createAtom(atom, index, elementID), children[index])
        }
    });
}