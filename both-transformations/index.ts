import type { Transform, Parser } from 'jscodeshift'
import type VueTransformation from '../src/VueTransformation'

type VueTransformationModule = {
  default: VueTransformation
}

type JSTransformationModule = {
  default: Transform
  parser?: string | Parser
}

export type bothTransformationModule = {
  templateBeforeScript: boolean
  js: JSTransformationModule
  vue: VueTransformationModule
}

// set 'templateBeforeScript' to decide if the transformation code of template part run before the transformation code of script part
// please set 'global.buffers=[]' before you add data in buffers first time
const transformationMap: {
  [name: string]: bothTransformationModule
} = {
  'remove-filter': {
    templateBeforeScript: false,
    js: require('./remove-filter-script'),
    vue: require('./remove-filter-template')
  }
}

export default transformationMap
