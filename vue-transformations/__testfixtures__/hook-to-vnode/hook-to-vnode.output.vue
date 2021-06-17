<template>
  <div>
    <p @vnode-updated='onUpdated'>{{msg}}</p>
    <button @click='change'></button>
  </div>
</template>

<script>
export default {
  name: 'hook-to-vnode.input',
  data(){
    return{
      msg:'test'
    }
  },
  methods:{
    onUpdated(){
      console.log("updated **");
    },
    change(){
      this.msg=this.msg+"*"
    }
  }
}
</script>

<style scoped>

</style>
