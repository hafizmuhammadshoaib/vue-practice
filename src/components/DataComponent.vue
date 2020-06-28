<template>
  <div>
    <h1>Todo's Component</h1>
    <div>
      <input type="text" v-model="todo" />
      <button type="button" @click="this.addTodo">Add</button>
    </div>
    <div>
      <div v-for="(data,index) in this.todos" :key="index">{{data}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      todo: ""
    };
  },
  methods: {
    addTodo() {
      // this.$store.dispatch("addTodo", {
      //   todo: this.todo
      // });
      this.$store.commit("add", { todo: this.todo });
      this.todo = "";
    }
  },
  // mounted() {
  //   console.log(this.$store.state.todoModule.todos);
  // },
  computed: {
    todos: function() {
      return this.$store.state.todoModule.todos;
    }
  }
};
</script>