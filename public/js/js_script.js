class MenuItem {
  constructor(fn, ln, branch, source, cal) {
    this.burger = fn;
    this.pic = ln;
    this.desc = branch;
    this.containing = source;
    this.calories = cal
    //this.name = function() {
     //return this.burger + ' ' + this.calories;
    //};
  }
}

var burgerOne= new MenuItem("The Halloumi burger", "img/burger1.jpg", "Vegetarian", "Halloumi, sweet onion, salad", "750 kCalories");
var burgerTwo= new MenuItem("Chicken burger", "img/burger2.jpg", "Gluten free", "Chicken, cheese, salad", "750 kCalories" );
var burgerThree= new MenuItem("Meat burger", "img/burger3.jpg", "Lactose free", "Beef, cheese, salad, bean bread", "700 kCalories");
var burgerFour= new MenuItem("Burger", "img/burger4.jpg", "Gluten free", "Beef, salad, cheese", "800 kCalories");
var burgerFive= new MenuItem("Vegan burger", "img/vegan5.jpg", "Vegan", "Salad, black beans", "750 kCalories");
var burgerSix= new MenuItem("Texmex burger", "img/burger5.jpg", "Gluten free", "bean-burger, salad", "500 kCalories")
//var menuArray = [burgerOne, burgerTwo, burgerThree, burgerFour, burgerFive, burgerSix];

console.log(menuArray);

var menuArray = []; 
for (i=0;i<6;i++){
  menuArray[i]= new MenuItem(food[i].name, food[i].img, food[i].desc, food[i].containing, food[i].kCal)
}

function answer() {
  var aArray=[document.getElementById('Full name').value, document.getElementById('E-mail').value, document.getElementById('Street name').value, document.getElementById('House number').value, document.getElementById('Payment').value, document.querySelector("input[name=gender]:checked").value]
  if(document.querySelector("input[name=burgerCheck]:checked")!=null){
    var temp = document.getElementsByName('burgerCheck');
    for(i=0;i<temp.length;i++) {
      if(temp[i].checked) {
        aArray[aArray.length]=temp[i].value
      }
    }

  }
  return aArray;
}

var click = new Vue({
  el:'#answers',
  data:{
    output: null
  },
  methods:{
    markDone:function(){
      this.output=answer();
    }
  }

})


var menu = new Vue({
  el: "#wrapper",
  data:{
    burgers: menuArray
  }

})

var BS = new Vue({
el:"#BS",
data:{
SB:"Select a burger"
}

})