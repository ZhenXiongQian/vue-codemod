import wrap from '../src/wrapAstTransformation'
import type { ASTTransformation } from '../src/wrapAstTransformation'



export const transformAST: ASTTransformation = ({ root, j }) => {

  const methods=root.find(j.ObjectMethod);
  if (methods.length){
    // @ts-ignore
    methods.forEach((method:any)=>{
      method?.value?.body?.body.forEach((expressionStatement:any)=>{
        if (
          expressionStatement?.expression?.callee?.property?.name.indexOf('on')!==-1&&
          expressionStatement?.expression?.arguments?.length>0&&
          expressionStatement?.expression?.arguments[0]?.value.indexOf('hook:')===0
        ){
          var temp:string=expressionStatement?.expression?.arguments[0].value;
          temp=temp.replace('hook:','vnode-')
          // @ts-ignore
          expressionStatement?.expression?.arguments[0].value=temp;
        }
      })
    })
  }
}

export default wrap(transformAST)
export const parser = 'babylon'
