<template>
  <div class="hello">
    <div class="holder">

      <form @submit.prevent="addTodo">
        <h1>My to do list</h1>
        <p class="betica">Things to do :D</p>

        <input class="todoinput" type="text" placeholder="To do..." v-model="todo">
      </form>

      <ul>
        <li v-for="(todo,index) in todos" :key='index'>
          <input type="checkbox" id="check-1" v-model="todo.clear" v-on:change="setMyDateToToday(index)">
          <span class="beta" :class="{'completed': todo.clear}"> {{todo.text}}</span> <span> {{todo.finished | moment("dddd, MMMM Do YYYY")}} </span>
          <i class="fas fa-ban delete" v-on:click="deleteTodo(index)"></i>
        </li>
      </ul>
      <p>Done :D</p>

    </div>
  </div>
</template>

<script>
  export default {
    name: "Todolist",
    data() {
      return {
        todo: '',
        todos: []
      }
    },

    methods: {
      addTodo() {
        this.todos.push({
          text: this.todo,
          clear: false,
          finished: ''
        }),
          this.todo = ''
      },

      deleteTodo(a) {
        this.todos.splice(a, 1);
      },
      setMyDateToToday(index){
        console.log(index)
        if(this.todos[index].clear){
          // Add date
          this.todos[index].finished = new Date()
          return
        }
        this.todos[index].finished = ''
      }
    }
  }

</script>

<style scoped>
  @import "https://use.fontawesome.com/releases/v5.0.12/css/all.css";

  .holder {
    background: #ffffff;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  ul li {
    padding: 20px;
    justify-content: center;
    font-size: 1.3em;
    background-color: #e0edf4;
    border-left: 5px solid #3eb3f6;
    margin-bottom: 3px;
    color: #3e5252;
    overflow: hidden;
  }

  p, h1 {
    text-align: center;
    padding: 30px 0;
    color: gray;
  }

  .todoinput {
    width: calc(100% - 40px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: #687f7f;

  }

  .delete {
    color: #94272b;
    float: right;
    cursor: pointer;
  }

  .beta {
    font-size: 25px;
    text-transform: uppercase;
  }

  i {
    margin-top: 5px;
  }

  .betica {
    text-align: center;
    padding: 5px 0;
    color: gray;
  }

  .date {
    font-size: 10px;
  }

  .completed {
    text-decoration: line-through;
    color: grey;
  }
</style>
