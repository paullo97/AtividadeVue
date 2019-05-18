<template>
    <div id="comp1">
        <p>Inputs: </p>
        <br><br>
        <!-- <input type="text" :value="x1" @input="Passar1"><br>
        <input type="text" :value="y1" @input="Passar2"><br> --> 
        <!-- <p>{{x1}} - {{y1}}</p> 
        <p>{{x1}} - {{y1}} = {{1*x1-1*y1}}</p> 
        <button v-on:click.stop="passarnumeros">Chamar $Emit</button> --> 
        <input type="text" v-model="numero1"><br>
        <input type="text" v-model="numero2"><br>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {mapActions} from 'vuex'

export default {
    name: 'comp1',
    /*data(){
        return{
            x1: '',
            y1: ''
        }
    }, */ 
    //VUEX
    computed:{
        numero1: {
            get(){
                return this.$store.state.numero1
            },
            set(valor){
                //this.$store.state.numero1 = valor
                this.setNumero1(valor)
                
            }
        },
        numero2: {
            get(){
                return this.$store.state.numero2
            },
            set(valor){
                //this.$store.state.numero2 = valor
                //this.setNumero2(valor)
                this.setNumero2Delay(valor)
            }
        }
    },
    //FINISH VUEX 
    methods: {
        /*passarnumeros(){
            this.$emit('entrada');
        },
        Passar1(event){
            this.x1 = event.target.value; 
            this.$emit('PassaX', this.x1);
        },
        Passar2(event){
            this.y1 = event.target.value; 
            this.$emit('PassaY', this.y1);
        }*/
        ...mapMutations([
            'setNumero1',
            'setNumero2'
        ]),
        ...mapActions([
            'setNumero2Delay'
        ]),
        tratarNumero1(event){
            this.numero1 = event.target.value
        },
        tratarNumero2(event){
            this.numero2 = event.target.value
        }
    }
}
</script>

