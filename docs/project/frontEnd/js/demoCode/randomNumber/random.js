window.onload = () => {
  const infoDom = document.querySelector('.info')
  const numberInput = document.querySelector('#numberInput')
  const guessBtn = document.querySelector('#guessBtn')

  // 游戏开始，生成一个随机数，范围在[1，100]
  const targetNumber = Number.parseInt(Math.random() * 100) + 1
  // 一个玩家填写的数据，默认为0
  let gamerNumber = 0

  infoDom.innerText = `生成了范围[1, 100]随机数${targetNumber}`
  


  // 给右边操作数据的两个dom绑定事件
  numberInput.addEventListener('input', function(e) {
    gamerNumber = Number.parseInt(e.target.value)
  })

  // 点击猜测按钮，判断是否正确
  guessBtn.addEventListener('click', () => {
    let o = gamerNumber - targetNumber
    let text = '猜对了'
    let classList = ['info']
    if (o > 0) {
      text = '太大了'
      classList.push('error')
    } else if (o < 0) {
      text = '太小了'
      classList.push('error')
    } else {
      classList.push('celebration')
    }

    infoDom.innerText = text
    infoDom.classList = classList.join(" ")
    setTimeout(() => {
      infoDom.className = 'info'
    }, 1000)
  })

}
