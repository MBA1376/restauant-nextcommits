const subtractQuantity = (array , id) => {
    var index = array.indexOf(id);
    if (index >= 0) {
    array.splice( index, 1 );
    return array;
    }
}

module.exports = subtractQuantity;