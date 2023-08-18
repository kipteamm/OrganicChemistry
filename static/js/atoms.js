function createAtom(atom, index, elementID) {
    const span = document.createElement('span')

    span.setAttribute('data-index', index)
    span.classList.add(`element-${elementID}`)

    if (atom.includes('-atom')) {
        span.id = `atom-${atomIDs}`
        span.innerText = atom.split('-atom')[0]

        span.setAttribute('onclick', `openEditMenu('atom-${atomIDs}')`)

        atomIDs ++

        span.classList.add('atom')
        span.classList.add(atom)

        return span
    } 

    if (atom.includes('-connection')) {
        span.innerHTML = '<span></span>'

        span.classList.add(atom.split('-connection')[0])

        return span
    }
}