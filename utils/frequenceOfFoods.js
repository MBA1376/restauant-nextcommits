  const frequenceOfFoods = (array) => {
    const frequenceTable = array.reduce(function (acc, curr) {
        if (typeof acc[curr] == 'undefined') {
          acc[curr] = 1;
        } else {
          acc[curr] += 1;
        }
      
        return acc;
      }, {});

      return frequenceTable;
  }
  
  module.exports = frequenceOfFoods;