<template>
  <div>
    <h1 class="font-bold text-2xl" >Todo's Component</h1>
    <div class="flex justify-center">
      <input
        type="text"
        class="bg-white focus:outline-none focus:shadow-outline border border-gray rounded-lg py-2 px-4 block appearance-none leading-normal"
        v-model="todo"
      />
      <!-- <button type="button" @click="this.addTodo">Add</button> -->
      <button
        @click="this.addTodo"
        class="ml-5 bg-transparent hover:bg-blue text-blue font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded"
      >Add</button>
    </div>
    <div>
      <div
        class="flex justify-center mt-3 font-hairline "
        v-for="(data,index) in this.todos"
        :key="index"
      >
        <span class="border border-gray-200 p-3 px-8 rounded">{{data}}</span>
      </div>
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