<template>
    <div>
       <a v-link='{name: "index"}'>Index Page</a>
       <a v-link='{name: "about"}'>About Page</a>
    </div>
</template>
<style>
    body{
        background-color:#eee;
    }
</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        }
    }
</script>
