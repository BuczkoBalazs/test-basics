const dataBase = ["majom", "kolbász", "rája", "pizza", "gibbon", "taliga", "blood", "sweat", "beer"];

const searchMyShit = (arr, word) => {
    const result = arr.filter(item => item.includes(word))

    return result.length > 5 ? result.slice(0, 5) : result
}

// console.log(searchMyShit(dataBase, "a"))

module.exports = searchMyShit