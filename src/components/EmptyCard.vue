<template>
  <div
    @click="goTo()"
    class="flex justify-center items-center h-full max-w-sm border-dashed border-4 border-gray-400 rounded overflow-hidden shadow-lg cursor-pointer"
  >
      <svg class="w-10 h-10 text-gray-400" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" viewBox="0 0 24 24" fill="none"/>
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
      </svg>

  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  methods: {
    goTo: function () {
      this.$router.push('/new');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
