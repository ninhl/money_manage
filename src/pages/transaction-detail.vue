<template >
    <div>
        <h1>transaction details here</h1>
        <div v-if="transaction">
            <p>{{ $route.params.id }}</p>
            <h3>Name: {{ transaction.name }}</h3>
            <p>Price: {{ transaction.price }}</p>
        </div>
        <div v-else>
            loading...
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            transaction: null
        }
    },
    created() {
        fetch(`http://localhost:3000/transactions/${this.$route.params.id}` )
            .then((response) => response.json())
            .then((data) => this.transaction = data)
            .then(() =>
                console.log(this.transaction)
            )
    },
}
</script>
<style lang="">
    
</style>