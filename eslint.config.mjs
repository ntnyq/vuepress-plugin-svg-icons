/**
 * @file ESLint config
 */

import { ntnyq } from '@ntnyq/eslint-config'

export default ntnyq({
  ignores: ['**/.vuepress/.cache', '**/.vuepress/.temp'],
})
