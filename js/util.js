function shuffle(tBoard) {
    var idx, temp

    for(var i = 0; i < tBoard.length; i++){
        idx = getRandomInt(0, tBoard.length)

        temp = tBoard[idx]
        tBoard[idx] = tBoard[i]
        tBoard[i] = temp
    }
    return tBoard
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min)

}