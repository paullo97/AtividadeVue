<template>
    <div id="out">
        <!-- <p> Soma = {{1*SendX + 1*SendY}} </p>
        <p> Subitracao = {{SendX - SendY}} </p>
        <p> Multiplicacao = {{SendX * SendY}} </p> --> 
        <p>{{soma}}</p>
        <p>{{subtracao}}</p>
        <p>{{multiplicacao}}</p>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'

export default {
    name: 'out',
    /*props:{
        SendX: String,
        SendY: String
    }*/ 
    computed:{
        ...mapState([
            'numero1',
            'numero2'
        ]),
        ...mapGetters([
            'soma',
            'subtracao',
            'multiplicacao'
        ])
    }
}
</script>
