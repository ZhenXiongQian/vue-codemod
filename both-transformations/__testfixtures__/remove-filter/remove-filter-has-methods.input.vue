<template>
  <div>
    <p>{{ msg | local_filter }}</p>
    <p>{{ message | global_filter }}</p>
    <p>{{ message | local_filter | global_filter }}</p>
    <p>{{ message | local_filter | global_filter | second_filter }}</p>
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
    test2(value) {
      console.log(value)
    }
  },
  filters: {
    local_filter(value) {
      return value.toUpperCase()
    },
    local_filter2(value) {
      return value.toUpperCase()
    }
  }
};
</script>

<style scoped>

</style>
