<template>
    <div>
        count is {{counterValue}}
    </div>
</template>
<style>
    body{
    }
</style>
<script>
    import {getCount} from '../vuex/getters'

    export default{
        vuex:{
            getters:{
                counterValue: getCount
            }
        }
    }
</script>
