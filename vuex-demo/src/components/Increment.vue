<template>
    <div>
        <button @click='increment'>Increte 1</button>
    </div>
</template>
<style>
    body{
    }
</style>
<script>
    import {incrementCounter} from '../vuex/actions'

    export default{
        vuex: {
            actions: {
                increment: incrementCounter
            }
        }
    }
</script>
