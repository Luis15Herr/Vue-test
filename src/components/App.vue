<template>
  <div id="app">
    <div class="banner">
      <Todolist/>
    </div>
  </div>
</template>

<script>
  import Todolist from './Todolist.vue'

  export default {
    name: 'app',
    components:{
      Todolist
    }
  }
</script>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>

<!-- Global CSS -->
<style>
body{
  background-color: #EEEEEE;
  font-family: 'Montserrat',sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
}
  body,html{
    margin: 0;
    height: 100%;
  }

  #app{
    width: 50%;
  }
</style>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>
</style>
