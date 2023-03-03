<template>
    <h1>Transactions</h1>
    <div class="item" v-for="transaction in transactions" :key="transaction.id">
        <router-link 
        :to="{
        name: 'transaction-details-route',
        params: {id: transaction.id}}">{{ transaction.name }}
        </router-link>
        <p class="price">{{ transaction.price }}</p>
    </div>
</template>
    
<script>
export default {
    name: 'transactionsPage',
    data() {
        return {
            transactions: []
        }
    },
    created() {
        fetch(`http://localhost:3000/transactions` )
            .then((response) => response.json())
            .then((data) => this.transactions = data)
            .then(() =>
                console.log(this.transactions)
            )
    },

}
</script>
    
<style></style>