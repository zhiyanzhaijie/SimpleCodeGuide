class Subscriber {
  
  constructor() {
    this.item = {}   
  }

  subscribe(season, theDo) {
    if (!this.item[season]) {
      this.item[season] = []
    }
    this.item[season].push(theDo)
  }

  noticfy(season, ...args) {
    this.item[season].forEach(theDo => {
      theDo(...args)
    })
  }

}

export default Subscriber
