var app = new Vue({
  el : '#app',
  data : {
    message : 'HI'
  }
})

var app2 = new Vue({
  el : '#app2',
  data : {
    message2 : "wow " +  new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el : '#app3',
  data : {
    seen : false
  }
})

var app4 = new Vue({
  el : '#app4',
  data : {
    todos : [
      {text : 'one'},
      {text : 'two'},
      {text : 'three'}
    ]
  }
})

var app5 = new Vue({
  el : '#app5',
  data : {
    message5 : 'Hello!'
  },
  methods : {
    reverseMessage : function() {
      this.message5 = this.message5.split('').reverse().join('')
    }
  }
})

var app6 = new Vue({
  el : '#app6',
  data : {
    message6 : 123
  }
})

Vue.component('todo-item', {
  props : ['todo'],
  template : '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el : '#app7',
  data : {
    groceryList : [
      {id : 0, text : '蔬菜'},
      {id : 1, text : '奶酪'},
      {id : 2, text : '隨便'}
    ]
  }
})