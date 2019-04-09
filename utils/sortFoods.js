const sortFoods = (array) => {
    return array.sort((a, b) => (a.foodTitle > b.foodTitle) ? 1 : -1)
};

module.exports = sortFoods;
