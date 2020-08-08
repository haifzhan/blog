<template>
  <div class="container mx-auto">
    <div class="flex flex-col justify-center items-center">
      <h2 class="mb-4">Add a New Blog</h2>
      <div class="w-full max-w-xs">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="title">title</label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="Title"
              v-model="blog.title"
              required
            />
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="content">Content</label>
            <textarea
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name
              id
              cols="30"
              rows="3"
              v-model="blog.content"
            ></textarea>
          </div>
          <div class="flex items-center justify-between">
            <a
              class="inline-block align-baseline font-bold text-sm text-red-500 hover:text-red-800"
              href="#"
            >Cancel</a>
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >Add</button>
          </div>
        </form>
      </div>
    </div>

    <div id="preview">
      <h3>Preview Blog Data</h3>
      <pre>{{ blog }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "Add a new Blog",
  props: {
    msg: String,
  },
  data() {
    return {
      blog: {
        title: "",
        content: "",
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
