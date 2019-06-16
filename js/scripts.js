
var counter = 0

//Objects

function Pizza(size, name) {
  this.ingredients = [];
  this.size = size;
  this.price = 800;
  this.name = name;
}
//Pizza Object Methods

Pizza.prototype.addTops = function(array) {
  for(i=0;i<array.length;i++) {
    this.ingredients.push(parseInt(array[i]));
  }

  Pizza.prototype.calcCost = function() {
    for(i=0;i<this.ingredients.length;i++) {
      if ((this.ingredients[i]>=1)&&(this.ingredients[i]<=6)) {
        this.price += 2;
      } else if (this.ingredients[i]>=7 && this.ingredients[i]<=12){
        this.price +=1;
      }
    }
    if (this.size==="1") {
      this.price+=0
    } else if (this.size==="2") {
      this.price+=2
    } else if (this.size==="3") {
      this.price+=4
    } else if (this.size==="4") {
      this.price+=5
    }
    return this.price;
  }
  function Order() {
    this.items = [];
    this.rush = false;
    this.grandTotal = 0;
  }
