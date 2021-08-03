<template>
  <div>
    <p>{{ msg | local_filter }}</p>
    <p>{{ message | global_filter }}</p>
  </div>
</template>

<script>
export default {
  name: 'remove-filter.input',
  data() {
    return {
      msg: 'test',
      message: 'test'
    }
  },

  filters: {
    local_filter(value) {
      return value.toUpperCase();
    }
  }
};
</script>

<style scoped>

</style>
