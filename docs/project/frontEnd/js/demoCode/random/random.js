window.onload = () => {
  // 游戏逻辑

  // 抓取dom
  const inputDom = document.querySelector('#input')
  const buttonDom = document.querySelector('#button')
  const infoDom = document.querySelector('.info')
  const infoTitleDom = document.querySelector('.info_title')
  const infoTipDom = document.querySelector('.info_tip')

  // 生成目标数字 target
  const target = Number.parseInt(Math.random() * 100); // [0, 100)

  // 玩家猜测数字 gamerValue
  let gamerValue = 0;


  // input值赋值给gamerValue
  inputDom.addEventListener('input', (e) => {
    gamerValue = Number.parseInt(e.target.value)
  })

  // button点击会进行判断
  buttonDom.addEventListener('click', () => {

    // 判断逻辑
    

    // infotitle的文字会变成gamerValue
    infoTitleDom.innerText = gamerValue

    // target gamerValue
    let tipText = '提示词'
    let infoClass = ''

    if (gamerValue > target) {
      tipText = '大了'
      infoClass = 'bigger'
    } else if (gamerValue < target) {
      tipText = '小了'
      infoClass = 'smaller'
    } else {
      tipText = '对了'
      infoClass = 'right'
    }

    infoTipDom.innerText = tipText

    infoDom.className = `info ${infoClass}`

    setTimeout(() => {
      infoDom.className = 'info'
    }, 1000)
  })
}
