<template>
    <nav class="nav">
        <router-link :to="{name: 'overview-route'}">OverView</router-link>
        <router-link :to="{name: 'transactions-route'}">Transactions</router-link>
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