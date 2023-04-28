function createC() {
    let new_element = atom.cloneNode(true);

    new_element.id = element_ids

    element_ids += 1

    let atoms = new_element.querySelectorAll('.atom')

    for (var i = 0; i < atoms.length; i++) {
        let atom = atoms[i]

        atom.id = atom_ids;

        atom_ids += 1

        if (i % 2 !== 0) {
            atom.innerText = 'C'            

            continue
        }

        atom.innerText = 'H'
    }

    return new_element
}

function createH() {
    let new_element = hatom.cloneNode(true);

    new_element.id = element_ids

    element_ids += 1

    let atom = new_element.querySelector('.atom');

    atom.addEventListener('click', function() {
        openEditMenu(this.id)
    })

    atom.id = atom_ids;

    let element_options = new_element.querySelector('.edit-options');

    element_options.id = "options-" + atom_ids

    atom_ids += 1;

    return new_element
}