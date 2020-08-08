<template>
  <div class="w-1/2 mx-auto">
    <div class="flex flex-col">
      <div
        class="mt-4 px-4 py-2 text-teal-800 font-bold text-2xl text-white"
      >Detail page about {{ blog.title }}</div>
      <div class="mt-4 flex flex-col items-start">
        <span class="block font-semibold">{{ blog.content }}</span>
        <span
          class="block text-left"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus voluptate quae ducimus eveniet, ullam quibusdam aliquid soluta voluptas praesentium dicta earum consequatur similique ipsum ad quam doloremque amet unde voluptates. Fugiat aut expedita quasi adipisci culpa dolore natus ullam voluptates porro omnis, qui magni libero harum minima nulla dicta possimus reprehenderit? Debitis deserunt quasi fugit hic, eum pariatur et tenetur sed officia omnis illum. Excepturi, nam. Eius ex sit excepturi nobis doloremque dolorem, minus voluptas amet rem error asperiores ducimus, praesentium distinctio, quod fugit laborum vel officia maxime. Minus laborum enim aspernatur veritatis! Molestias ipsam adipisci esse consequuntur sit architecto impedit tenetur provident vitae dolorum. Perferendis fugit explicabo, aspernatur quibusdam nisi expedita corrupti harum laboriosam accusamus vel porro id exercitationem suscipit quas commodi. Nobis atque dolorem harum voluptatibus et, eos voluptas. Molestiae laborum velit repudiandae voluptatibus, consequuntur molestias, ipsum, facere deleniti nam quaerat impedit enim aliquam repellat in excepturi quisquam quam! Totam ducimus vitae sint explicabo distinctio et expedita commodi provident, facilis dolore dolores corporis consequuntur quis magni perspiciatis quisquam officia cum laudantium at id sapiente reprehenderit! Corrupti deserunt ullam nostrum quasi expedita. Tempore et, ducimus quasi quam commodi, iste dolorum quos repudiandae aut quas eaque eligendi fugit dolore. Maxime!</span>

        <div class="mt-4 self-end">
          <span class="block font-bold">{{ blog.author }}</span>
          <span class="block text-gray-600">{{ blog.date }}</span>
        </div>
      </div>
      <button
        @click="goBack()"
        class="mt-4 bg-transparent hover:bg-teal-500 text-teal-700 font-semibold hover:text-white py-1 px-4 border border-teal-500 hover:border-transparent rounded"
      >Go Back</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blog: Object,
  },
  data() {
    return {};
  },
  methods: {
    goBack: function () {
      console.log("click go back....");
      this.$router.go(-1);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
