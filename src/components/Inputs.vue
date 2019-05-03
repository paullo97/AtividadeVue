<template>
    <div id="comp1">
        <p>Inputs: </p>
        <br><br>
        <input type="text" :value="x1" @input="Passar1"><br>
        <input type="text" :value="y1" @input="Passar2"><br>
        <!-- <p>{{x1}} - {{y1}}</p> <!-- 
        <p>{{x1}} - {{y1}} = {{1*x1-1*y1}}</p> 
        <button v-on:click.stop="passarnumeros">Chamar $Emit</button> --> 
    </div>
</template>

<script>
export default {
    name: 'comp1',
    data(){
        return{
            x1: '',
            y1: ''
        }
    }, 
    methods: {
        passarnumeros(){
            this.$emit('entrada');
        },
        Passar1(event){
            this.x1 = event.target.value; 
            this.$emit('PassaX', this.x1);
        },
        Passar2(event){
            this.y1 = event.target.value; 
            this.$emit('PassaY', this.y1);
        }
    }
}
</script>

