import { defineInlineTest } from 'jscodeshift/src/testUtils'

const hookToVnodeJsSpec = require('../hook-to-vnode-js')

defineInlineTest(
  hookToVnodeJsSpec,
  {},
  `
    export default{
      components:{
      child
      },
      data(){
        return{
          msg:'test'
        }
      },
      methods:{
        onUpdated(){
          console.log('hook:updated');
        },
        changeMsg(){
          this.msg=this.msg+"*";
          this.$once("hook:updated",function(){
            console.log('test')
          })
        }
      },
      mounted(){
        emitter.on("hook:updated",function(){
          console.log('test')
        })
      }
    }
  `,
  `
  export default{
      components:{
      child
      },
      data(){
        return{
          msg:'test'
        }
      },
      methods:{
        onUpdated(){
          console.log('hook:updated');
        },
        changeMsg(){
          this.msg=this.msg+"*";
          this.$once("vnode-updated",function(){
            console.log('test')
          })
        }
      },
      mounted(){
        emitter.on("vnode-updated",function(){
          console.log('test')
        })
      }
    }
  `
)
