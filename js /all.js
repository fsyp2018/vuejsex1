
var app = new Vue({
  el: '.app',
  data:{
    todos:[],
    newTodo:''
  },
  methods:{
    addTodo: function(todo){
      this.todos.push({content:todo,completed: false,show:true})
    },
    removeTodo: function(todo){
      this.todos.splice(this.todos.indexOf(todo), 1);
    },
    completeAll:function(){
    this.todos.forEach(todo =>todo.completed =true);
  },
    showAll: function () {
            for (let i = 0; i < this.todos.length; i++) {
                this.todos[i].show = true;
            }
        },
    showComplete: function () {
            for (let i = 0; i < this.todos.length; i++) {
                if (this.todos[i].completed === true) {
                    this.todos[i].show = true;
                } else { this.todos[i].show = false }
            };
        },
    showIncomplete: function () {
            for (let i = 0; i < this.todos.length; i++) {
                if (this.todos[i].completed === false) {
                    this.todos[i].show = true;
                } else { this.todos[i].show = false }
            }
        },
removeTodoAll:function(){
 this.todos.splice(0,this.todos.length);
} 
  }
})
