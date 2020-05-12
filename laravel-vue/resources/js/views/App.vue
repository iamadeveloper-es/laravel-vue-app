<template>
    <div class="app-container">
        <h1>Hola desde App</h1>
        <router-link tag="li" to="/">Home</router-link>
        <router-link tag="li" to="/about">About</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
