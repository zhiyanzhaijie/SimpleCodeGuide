import Subscriber from './class.js'

const solorTerms = [
  '立春', '雨水', '惊蛰', '春分', '清明', '谷雨', 
  '立夏', '小满', '芒种', '夏至', '小暑', '大暑', 
  '立秋', '处暑', '白露', '秋分', '寒露', '霜降', 
  '立冬', '小雪', '大雪', '冬至', '小寒', '大寒'
]

window.onload = () => {
  
  const ulDom = document.querySelector('.observer')
  const selectDom = document.querySelector('#select')
  
  const seasonSubscriber = new Subscriber()

  initUI() 
  function initUI() {
    solorTerms.forEach((term, idx) => {
      
      const liDom = document.createElement('li')
      liDom.innerText = term
      ulDom.appendChild(liDom)

      if (idx <= 5) {
        seasonSubscriber.subscribe('spring', () => {
          liDom.style.color = 'green'
        })
        seasonSubscriber.subscribe('unspring', () => {
          liDom.style.color = 'black'
        })
      } else if (idx <= 11) {
        seasonSubscriber.subscribe('summer', () => {
          liDom.style.color = 'red'
        })
        seasonSubscriber.subscribe('unsummer', () => {
          liDom.style.color = 'black'
        })
      } else if (idx <= 17) {
        seasonSubscriber.subscribe('autumn', () => {
          liDom.style.color = 'brown'
        })
        seasonSubscriber.subscribe('unautumn', () => {
          liDom.style.color = 'black'
        })
      } else {
        seasonSubscriber.subscribe('winter', () => {
          liDom.style.color = 'rgba(128, 128, 128, 1)'
          liDom.className = 'animate__bounce'
          liDom.style.fontSize = '32px'
        })
        seasonSubscriber.subscribe('unwinter', () => {
          liDom.style.color = 'black'
          liDom.style.fontSize = '16px'
        })
      }
    })
  }

  bindEvent()
  function bindEvent() {
    selectDom.addEventListener('change', (e) => {
      const selectVals = [
        'spring',
        'summer',
        'autumn',
        'winter'
      ]
      selectVals.forEach(val => {
        if (val === e.target.value) {
          seasonSubscriber.noticfy(val)
        } else {
          seasonSubscriber.noticfy(`un${val}`)
        }
      })
     
    })
  }
}
