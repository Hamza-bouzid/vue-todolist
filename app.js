let app = new Vue({
  el: "#app",
  data: {
    nome: "",
    toDoList: [],
    fatto: "fatto",
  },
  methods: {
    aggiungi: function () {
      if (!this.nome == "") {
        this.toDoList.push({ text: this.nome, done: false });
      }
      this.nome = "";
    },

    elimina: function (indice) {
      this.toDoList.splice(indice, 1);
    },

    isDone: function (indice) {
      this.toDoList[indice].done = !this.toDoList[indice].done;
    },
  }
});
