<template>
  <div class="container mx-auto my-4">
    <div class="flex flex-col justify-center items-center">
      <h2 class="mb-4 font-bold text-2xl">Blog List</h2>
    </div>
    <div class="grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
      <div v-for="(blog, index) in blogs" :key="index">
        <div class="px-2">
          <BlogCard :blog="blog" />
        </div>
      </div>
      <EmptyCard />
    </div>
  </div>
</template>

<script>
import BlogCard from "./BlogCard";
import EmptyCard from './EmptyCard';

export default {
  props: {
    msg: String,
  },
  components: {
    BlogCard,
    EmptyCard
  },
  data() {
    return {
      blogs: [
        {
          id: 1,
          title: "Title 1",
          content: "This is blog content for title 1",
          author: 'Haifeng Zhang',
          date: 'Aug 18th, 2020',
          image: 'blog1.jpg',
        },
        {
          id: 2,
          title: "Title 2",
          content: "This is blog content for title 2",
          author: 'Haifeng Zhang',
          date: 'Aug 18th, 2020',
          image: 'blog2.jpg',
        },
        {
          id: 3,
          title: "Title 3",
          content: "This is blog content for title 3",
          author: 'Haifeng Zhang',
          date: 'Aug 18th, 2020',
          image: 'blog3.jpg'
        },
        {
          id: 4,
          title: "Title 4",
          content: "This is blog content for title 4",
          author: 'Haifeng Zhang',
          date: 'Aug 18th, 2020',
          image: 'blog4.jpg'
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
