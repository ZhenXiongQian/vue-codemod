<template>
  <div>
    <p>{{ local_filter(msg) }}</p>
    <p>{{ $filters.global_filter(message) }}</p>
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

  methods: {
    local_filter(value) {
      return value.toUpperCase();
    }
  }
};
</script>

<style scoped>

</style>
