<template lang="">
    <div>
        <h1>{{ name }}</h1>
        <h2>{{ counter }}</h2>
        <button @click="inc({data: 2})">Inc from SX</button>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    computed: {
        // counter() {
        //     return this.$store.getters.getCounter;
        // },
        // name() {
        //     return this.$store.getters.getName;
        // }
    ...mapGetters('counter', {
        'name': 'getName',
        'counter': 'getCounter'
    })

    },
    methods: {
        // inc() {
        //     this.$store.dispatch('increment', {data: 1})
        // }
        ...mapActions('counter', {'inc': 'increment'})
    },
}
</script>
<style lang="">
    
</style>