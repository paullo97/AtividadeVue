<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <input-entrada @PassaX="Atri1" @PassaY="Atri2"></input-entrada>
    <output-saida :SendX="this.x" :SendY="this.y"></output-saida> --> 
    <input-entrada></input-entrada>
    <output-saida></output-saida>
  </div>
</template>

<script>
import Inputs from './components/Inputs.vue'
import Outputs from './components/Outputs.vue'

export default {
  name: 'app',
  components:{
        'input-entrada': Inputs,
        'output-saida': Outputs
    },
  data(){
    return{
      x: '',
      y: ''
    }
  },
  methods:{
    numeros(){
      alert('Ta funcionando!'); 
      console.log('Ta funcionando');
    },
    Atri1(x1){
      this.x = x1;
    },
    Atri2(y1){
      this.y = y1;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; 
}

p{font-size: 2em;}
</style>
