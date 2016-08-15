<template>
    <header-component></header-component>
    <div class="main">
        <router-view></router-view>
    </div>
</template>

<script>
    import HeaderComponent from './components/header.vue';

    export default {
        name: 'app',
        components: {
            HeaderComponent
        }
    };
</script>
