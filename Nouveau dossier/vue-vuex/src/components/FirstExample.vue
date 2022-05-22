<template lang="">
    <div>
        <h1>Vue VUEX</h1>
        <h4>{{ counter }}</h4>
        <button @click="increase">Increase</button>
    </div>
</template>
<script>
export default {
    computed: {
        counter() {
            return this.$store.getters['counter/getCounter'];
        }
    },
    methods: {
        increase() {
            this.$store.dispatch({
                type: 'counter/increment',
                data: 10
            })
        }
    },
}
</script>
<style lang="">
    
</style>