module.exports = function (oldCart) {
  this._items = oldCart._items || {}
  this._totalQty = oldCart._totalQty || 0
  this._totalPrice = oldCart._totalPrice || 0

  this.add = (item, id) => {
    var storedItem = this._items[id]
    if (!storedItem) {
      storedItem = this._items[id] = { item: item, qty: 0, price: 0 }
    }
    storedItem.qty += 1
    storedItem.price = storedItem.item.price * storedItem.qty
    this._totalQty++
    this._totalPrice += storedItem.item.price
  }
  this.generateArray = () => {
    let arr = []
    for (let id in this._items) {
      arr.push(this._items[id])
    }
    return arr
  }
}

