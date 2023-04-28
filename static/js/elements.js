function getRow(row, is_top) {
    if (document.getElementById(row) != null) {
        return document.getElementById(row) 
    }

    new_row = document.createElement('div')

    new_row.id = row
    new_row.setAttribute("data-top-row", "row-" + row_ids)

    row_ids += 1

    new_row.setAttribute("data-bottom-row", "row-" + row_ids)

    if (is_top) {
        container.prepend(new_row)
    } else {
        container.appendChild(new_row)
    }

    return new_row
}

/*
    types:
        0 = C-ATOM
        1 = OH-ATOM
        2 = O-ATOM
        3 = NH2-ATOM

    rows:
        arr[0] = MAIN ATOM
        arr[1] = TOP ATOM
        arr[2] = BOTTOM ATOM
*/

function addAtom(type, row_id) {
    let new_atoms = [];

    if (element_ids === 1) {
        document.getElementById('row-1').innerHTML = '';
    }

    if (type === 0) {
        new_atoms.push(createC());
        new_atoms.push(createH());
        new_atoms.push(createH());
    }

    for (var i = 0; i < new_atoms.length; i++) {
        let row;

        if (i === 0) {
            row = getRow(row_id)    
        } else if (i === 1) {
            row = getRow(row_id)

            row = getRow(row.getAttribute("data-top-row"), true)
        } else if (i === 2) {
            row = getRow(row_id)

            row = getRow(row.getAttribute("data-bottom-row"), false)
        }

        row.appendChild(new_atoms[i])
    }
}