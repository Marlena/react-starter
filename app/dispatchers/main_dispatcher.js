const MainDispatcher = {
  setRoute({data}) {
    this.router.navigate(data);
  },
  todoItemCreate({data}) {
    this.$store.refine('todoItems').push(data);
  },
  userCreate({data}) {
    this.$store.refine('users').push(data);
  },
  userSet({data}) {
    this.$store.merge({userId: data});
  },
  babyAnimalCreate({data}){
    this.$store.refine('babyAnimals').push(data);
  }
};

module.exports = MainDispatcher;
