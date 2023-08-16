var gNums = []
var currNum = 1
var gInterval
var gClickTime = 0
var gLevel = 16

function onInit(num = 16) {
    // MODEL
    gLevel = num
    currNum = 1
    resetNums(num)
    clearInterval(gInterval)

    // DOM
    renderTime('0.000')
    renderBoard(num)
}


function resetNums(num) {
    var nums = getNums(num)
    gNums = shuffle(nums)

}

function getNums(length) {
    var nums = []
    for (var i = 1; i <= length; i++) {
        nums.push(i)
    }

    return nums
}

function renderBoard() {
    strHtml = ''

    var size = gLevel ** 0.5

    for (var i = 0; i < size; i++) {
        strHtml += '<tr>\n'
        for (var j = 0; j < size; j++) {
            var num = gNums.pop()
            strHtml += `<td onclick="cellClicked(${num}, this)">${num}</td>\n`

        }
        strHtml += '</tr>\n'

    }
    var elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHtml
}

function cellClicked(clickedNum, elCell) {
    if (+clickedNum !== currNum) return

    if (+clickedNum === 1) {
        gClickTime = Date.now()
        gInterval = setInterval("timeUp(gClickTime)", 10)
    }
   
    elCell.classList.add('mark')
    
    if (+clickedNum === gLevel) {
        clearInterval(gInterval)
        alert('Congratulations, You Finished The game')
    }

    currNum++
}

function timeUp(gClickTime) {
    var nowTime = Date.now()
    var strText
    var time = ((nowTime) - (gClickTime)) / 1000
    strText = time
    renderTime(strText)
}

function renderTime(time) {
    var elH2Time = document.querySelector('h2')
    elH2Time.innerText = time
}



