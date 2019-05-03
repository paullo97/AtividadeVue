<template>
    <div id="out">
        <p> Soma = {{1*SendX + 1*SendY}} </p>
        <p> Subitracao = {{SendX - SendY}} </p>
        <p> Multiplicacao = {{SendX * SendY}} </p>
    </div>
</template>

<script>
export default {
    name: 'out',
    props:{
        SendX: String,
        SendY: String
    }
}
</script>
