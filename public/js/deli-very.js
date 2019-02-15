/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
var socket = io();

var vm = new Vue({
  el: '#mapnsubmit',
  data: {
    output: null,
    orders: {},
    orderId: 1,
  },
  /*
  created: function () {
    socket.on('initialize', function (data) {
      this.orders = data.orders;
    }.bind(this));

    socket.on('currentQueue', function (data) {
      this.orders = data.orders;
    }.bind(this));
    
},*/

  methods: {
    getNext: function () {
      var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },
    getBurgers: function(aArray) {
      var bArray=[];
      for(i=4;i<aArray.length;i++) {
        bArray[i-4]=aArray[i];
      }
      return bArray;
    },
    
    addOrder: function (event) {
                    this.output=answer();
      socket.emit("addOrder", { orderId: this.orderId,
                                details: this.orders[0].details,
                                
                                orderItems: this.getBurgers(this.output),
                                orderInfo: [this.output[0], this.output[1], this.output[2], this.output[3]],
                              });
                              this.orderId += 1;
    },
      displayOrder: function (event) {
      var offset = {x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top};
      Vue.set(this.orders, 0, {details: { x: event.clientX - 10 - offset.x,
      y: event.clientY - 10 - offset.y }});
                    
    }
  }
});
