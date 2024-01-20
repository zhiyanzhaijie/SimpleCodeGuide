window.onload = () => { 
  console.log(1)
  var boxDom = document.querySelector('.box')

  var dom1 = document.querySelector('#go')
  var dom2 = document.querySelector('#back')

  var leftDom = document.querySelector('.left')
  var rightDom = document.querySelector('.right')

  function initBox() {
    // 获取当前 URL
    var search = window.location.search;
    let page = ''
    if (!search) {
      page = 'go'
    } else {
      page =  search.split('=')[1]
    }
    // 输出参数值
    // boxDom.innerHTML = null
    switch(page) {
      case 'go':
        // boxDom.appendChild(dom1.cloneNode(true))
        rightDom.style.display = 'none'
        leftDom.style.display = 'block'
        break;
      case 'back':
        // boxDom.appendChild(dom2.cloneNode(true))
        leftDom.style.display = 'none'
        rightDom.style.display = 'block'
        break;
    }
  }

  initBox()

  dom1.addEventListener('click', () => {
    history.pushState({ page: 2 }, "", "?page=go");
    window.dispatchEvent(new PopStateEvent('popstate', { state: history.state }));
    initBox()
  })

  dom2.addEventListener('click', () => {
    history.pushState({ page: 1 }, "", "?page=back");
    window.dispatchEvent(new PopStateEvent('popstate', { state: history.state }));
    initBox()
  })


  window.addEventListener('popstate', (e) => {
    
  })  
}


 

