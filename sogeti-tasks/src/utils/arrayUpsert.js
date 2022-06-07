const arrayUpsert = (array, idableElement) => {
    return array.map(e => {
        if (e.id === idableElement.id) {
            return idableElement;
        } else {
            return e;
        }
    });
};

export default arrayUpsert;