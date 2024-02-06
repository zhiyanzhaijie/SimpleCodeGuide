class Subscriber {
  constructor() {
    this.item = {}
  }

  subscribe(season, doFn) {
    if (!this.item[season]) {
      this.item[season] = []
    }
    if (doFn) {
      this.item[season].push(doFn)
    }
  }

  publish(season) {
    this.item[season].forEach(doFn => {
      doFn()
    })
  }
}

export default Subscriber
