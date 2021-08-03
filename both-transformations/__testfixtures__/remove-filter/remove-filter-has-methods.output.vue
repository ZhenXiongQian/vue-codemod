<template>
  <div>
    <p>{{ local_filter(msg) }}</p>
    <p>{{ $filters.global_filter(message) }}</p>
    <p>{{ $filters.global_filter(local_filter(message)) }}</p>
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
    test(value) {
      console.log(value)
    },

    local_filter(value) {
      return value.toUpperCase()
    }
  }
};
</script>

<style scoped>

</style>
