import { Node } from 'vue-eslint-parser/ast/nodes'
import * as OperationUtils from '../src/operationUtils'
import type { Operation } from '../src/operationUtils'
import {
  default as wrap,
  createTransformAST
} from '../src/wrapVueTransformation'

export const transformAST = createTransformAST(nodeFilter, fix, 'remove-filter')

export default wrap(transformAST)

function nodeFilter(node: Node): boolean {
  return node.type === 'VFilterSequenceExpression' && node.filters.length > 0
}

function fix(node: Node, source: string): Operation[] {
  let fixOperations: Operation[] = []
  const names = global.buffers[0].names
  // @ts-ignore
  let msg = node.expression.name
  // @ts-ignore
  const filters = node.filters
  for (let i = 0; i < filters.length; i++) {
    const name = filters[i].callee.name
    if (names.indexOf(name) !== -1) {
      msg = name + '(' + msg + ')'
    } else {
      msg = '$filters.' + name + '(' + msg + ')'
    }
  }
  fixOperations.push(
    // @ts-ignore
    OperationUtils.replaceText(node, msg)
  )

  return fixOperations
}
