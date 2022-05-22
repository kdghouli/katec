<template>
  <table-main :donnee="$store.state.donnee" />
</template>

<script>
import TableMain from "../components/TableMain.vue";


export default {
  name: "home",
  data() {
    return {
      
    };
  },
  components: {
    TableMain,
  },

  mounted() {
    this.$store.dispatch('getDonnees');
    this.$store.dispatch('getCamions');

  },
}
</script>
