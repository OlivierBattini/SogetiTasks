// Previous implementation was missing the insert bit...

const arrayUpsert = (array, idableElement) => {
    let updated = false;
    let i = 0;
    let newArray = array.map(e => {
        i = Math.max(i, e.id);
        if (e.id === idableElement.id) {
            updated = true;
            return idableElement;
        } else {
            return e;
        }
    });
    if (!updated) {
        idableElement.id = i + 1;
        newArray.unshift(idableElement);
    }
    return newArray;
};

export default arrayUpsert;