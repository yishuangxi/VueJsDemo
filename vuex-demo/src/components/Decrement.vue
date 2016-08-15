<template>
    <div>
        <button @click='decrement'>Decrete 1</button>
    </div>
</template>
<style>
    body{
    }
</style>
<script>
    import {decrementCounter} from '../vuex/actions'

    export default{
        vuex: {
            actions: {
                decrement: decrementCounter
            }
        }
    }
</script>
