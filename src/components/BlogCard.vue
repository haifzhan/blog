<template>
  <div @click="goTo(blog)" class="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer">
    <img class="w-full h-64" :src="imageUrl(blog)" alt="Sunset in the mountains" />
    <div class="px-6 py-4">
      <div class="text-teal-800 font-bold text-xl mb-2">{{ blog.title }}</div>
      <p
        class="text-teal-600 text-base"
      >{{ blog.content }}</p>
    </div>
    <div class="flex items-center px-6 py-4">
      <img
        class="w-10 h-10 rounded-full mr-4"
        src="../assets/avatar.jpg"
        alt="Avatar of Jonathan Reinink"
      />
      <div class="text-sm">
        <p class="text-gray-900 leading-none">{{ blog.author }}</p>
        <p class="text-gray-600">{{ blog.date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blog: Object
  },
  data() {
    return {
    };
  },
  methods: {
      imageUrl: function(blog) {
        var images = require.context('../assets/', false, /\.jpg$/)
         return images('./' + blog.image)
      },
      goTo: function(blog) {
          this.$router.push({name: 'detail', params: { id: blog.id, blog: blog }})
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
