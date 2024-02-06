import Subscriber from "./class.js"


window.onload = () => {

  // dom区域
  const ulDom = document.querySelector('.term_box')
  const selectDom = document.querySelector('#select')

  // 数据区
  const solorTerms = [
    '立春', '雨水', '惊蛰', '春分', '清明', '谷雨', 
    '立夏', '小满' , '芒种', '夏至', '小暑', '大暑', 
    '立秋', '处暑', '白露', '秋分', '寒露', '霜降', 
    '立冬', '小雪', '大雪','冬至', '小寒', '大寒'
  ]

  
  // UI 
  const seasonSubscriber = new Subscriber()

  renderUI() 
  function renderUI() {
    solorTerms.forEach((term, idx) => {
      // 根据节气插入liDom到ulDom
      
      const liDom = document.createElement('li')
      liDom.innerText = term
      ulDom.appendChild(liDom)

      if (idx < 6) {
        seasonSubscriber.subscribe('spring', () => {
          liDom.style.color = 'green'
        })
      
      } else if (idx < 12) {
        seasonSubscriber.subscribe('summer', () => {
          liDom.style.color = 'red'
        })
      } else if (idx < 18) {
        seasonSubscriber.subscribe('autumn', () => {
          liDom.style.color = 'brown'
        })
      } else {
        seasonSubscriber.subscribe('winter', () => {
          liDom.style.color = 'grey'
        })
      }
      seasonSubscriber.subscribe('unseason', () => {
        liDom.style.color = 'black'
      })
    })
  }


  // Event
  bindEvent() 
  function bindEvent() {

    selectDom.addEventListener('change', (e) => {
      let selectVal = e.target.value
      seasonSubscriber.publish('unseason')
      seasonSubscriber.publish(selectVal)
    })





    // selectDom.addEventListener('change', (e) => {
    //   let selectVal = e.target.value
    //   let effectLiDoms
    //   allLiDoms.forEach(dom => {
    //     dom.style.color = 'black'
    //   })
    //   switch(selectVal) {
    //     case 'spring':
    //       effectLiDoms = allLiDoms.slice(0, 6)
    //       effectLiDoms.forEach(dom => {
    //         dom.style.color = 'green'
    //       })
    //       break;
    //     case 'summer':
    //       effectLiDoms = allLiDoms.slice(6, 12)
    //       effectLiDoms.forEach(dom => {
    //         dom.style.color = 'red'
    //       })
    //       break;
    //     case 'autumn':
    //       effectLiDoms = allLiDoms.slice(12, 18)
    //         effectLiDoms.forEach(dom => {
    //         dom.style.color = 'brown'
    //       })
    //       break;
    //     case 'winter':
    //       effectLiDoms = allLiDoms.slice(18)
    //         effectLiDoms.forEach(dom => {
    //         dom.style.color = 'grey'
    //       })
    //       break;
    //   }
    // })
  }

}
