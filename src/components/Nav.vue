<template>
    <nav class="nav">
        <router-link to="/">OverView</router-link>
        <router-link to="/transactions">Transactions</router-link>
        <router-link to="budgets">Budgets</router-link>
        <router-link to="reports">Reports</router-link>
        <router-link to="settings">Settings</router-link>
    </nav>
</template>
    
<script>
    export default {
        name: 'navBar',
        data() {
            return{

            }
        }
    }
    
</script>
    
<style>
    
</style>