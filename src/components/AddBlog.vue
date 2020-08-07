<template>
    <div>
        <h2>Add a New Blog</h2>
        <form action="">
            <label for="title">Blog Title:</label>
            <input type="text" required>
            <label for="content">Blog Content</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
        </form>

        <div id="preview">
            <h3>Preview Blog</h3>
            <p>Blog title:</p>
            <p>Blog content:</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Add a new Blog',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
