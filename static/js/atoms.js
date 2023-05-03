function createC(left, right) {
    const newElement = atom.cloneNode(true);

    newElement.id = elementIds++;

    const atoms = newElement.querySelectorAll('.atom');
    const elementOptions = newElement.querySelectorAll('.edit-options');

    atoms.forEach((atom, i) => {
        const elementOption = elementOptions[i];
        elementOption.id = `options-${atomIds}`;
        atom.id = atomIds++;
        atom.addEventListener('click', () => openEditMenu(atom.id));

        if (i % 2 !== 0) {
            atom.classList.add('c-atom');
            atom.innerText = 'C';
            return;
        }

        if ((i === 0 && left) || (i === 2 && right)) {
            atom.classList.add('h-atom');
            atom.innerText = 'H';
            return;
        }

        newElement.classList.add('attached-element');
        const children = newElement.children;

        if (!left) {
            [0, 0, 3, 3, 6, 6].forEach((index) => {    
                console.log(index, children[index])   

                newElement.removeChild(children[index]);
            });
        } else {
            [3, 3, 6, 6, 9, 9].forEach((index) => {
                newElement.removeChild(children[index]);
            });
        }
    });

    return newElement;
}

function createH(left, right) {
    let new_element = hatom.cloneNode(true);

    new_element.id = elementIds

    elementIds += 1

    let atom = new_element.querySelector('.atom');

    atom.classList.add("h-atom")

    atom.addEventListener('click', function () {
        openEditMenu(this.id)
    })

    atom.id = atomIds;

    let element_options = new_element.querySelector('.edit-options');

    element_options.id = "options-" + atomIds

    atomIds += 1;

    if (!left) {
        new_element.removeChild(new_element.children[0])
        new_element.removeChild(new_element.children[0])
    } else if (!right) {
        new_element.removeChild(new_element.children[3])
        new_element.removeChild(new_element.children[3])
    }

    return new_element
}