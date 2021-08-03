import wrap from '../src/wrapAstTransformation'
import type { ASTTransformation } from '../src/wrapAstTransformation'

export const transformAST: ASTTransformation = ({ root, j }) => {
  let filterParent = root
    .find(j.ObjectProperty, {
      key: {
        name: 'filters'
      }
    })
    .filter(
      // @ts-ignore
      node => node.value.value.properties.length > 0
    )
  if (filterParent.length > 0) {
    const filters = filterParent.find(j.ObjectMethod)
    // @ts-ignore
    let names = []
    filters.forEach(node => {
      // @ts-ignore
      names.push(node.value.key.name)
    })
    global.buffers = []
    // @ts-ignore
    global.buffers.push({ names: names })

    //find methods if exist
    const method = root.find(j.ObjectProperty, {
      key: {
        name: 'methods'
      }
    })
    if (method.length > 0) {
      // if exist push the node of filers to methods
      filters.forEach(node => {
        method.get().value.value.properties.push(node.value)
      })
    } else {
      // if not exist we must create methods
      // @ts-ignore
      filterParent.insertBefore(
        j.objectProperty(
          j.identifier('methods'),
          filterParent.get().value.value.original
        )
      )
    }

    // delete filters
    filterParent.remove()
  }
}

export default wrap(transformAST)
export const parser = 'babylon'
