const wordSearch = (letters, word) => {
    if ((letters.length === 0) || typeof (word) === undefined) {
        return false;
    }

    const horizontalJoin = letters.map(ls => ls.join(''));
    for (const horLetter of horizontalJoin) {
        if (horLetter.includes(word)) {
            return true;
        }
    }
    //interchange row and column 
    let toVerticaArr = [];
    for (let column = 0; column < letters[0].length; column++) {
        toVerticaArr.push([]);
        for (let row = 0; row < letters.length; row++) {
            toVerticaArr[column].push(letters[row][column]);
        }
    }

    const vericalJoin = toVerticaArr.map(hs => hs.join(''));
    for (const verLetter of vericalJoin) {
        if (verLetter.includes(word)) {
            return true;
        }
    }
    return false;
};

module.exports = wordSearch;

