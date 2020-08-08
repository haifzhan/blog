<template>
  <div class="container mx-auto">
    <div class="flex flex-col justify-center items-center">
      <h2 class="mb-4 font-bold text-2xl">Blog List</h2>
    </div>
    <div class="flex">
      <div v-for="(blog, index) in blogs" :key="index">
        <div class="px-2">
          <BlogCard :blog="blog" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogCard from "./BlogCard";
export default {
  props: {
    msg: String,
  },
  components: {
    BlogCard,
  },
  data() {
    return {
      blogs: [
        {
          id: 1,
          title: "Title 1",
          content: "This is blog content for title 1",
          author: 'Haifeng Zhang',
          date: 'Aug 18th, 2020'
        },
        {
          id: 2,
          title: "Title 2",
          content: "This is blog content for title 2",
          author: 'Haifeng Zhang',
          date: 'Aug 18th, 2020'
        },
        {
          id: 3,
          title: "Title 3",
          content: "This is blog content for title 3",
          author: 'Haifeng Zhang',
          date: 'Aug 18th, 2020'
        },
        {
          id: 4,
          title: "Title 4",
          content: "This is blog content for title 4",
          author: 'Haifeng Zhang',
          date: 'Aug 18th, 2020'
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
