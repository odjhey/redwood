import os from 'node:os'
import path from 'node:path'

import { exec } from '@actions/exec'
import * as core from '@actions/core'

const test_project_path = path.join(
  os.tmpdir(),
  'test-project',
  // ":" is problematic with paths
  new Date().toISOString().split(':').join('-')
)

console.log({
  test_project_path
})

core.setOutput('test_project_path', test_project_path)


await exec(`yarn build:test-project --ts --link ${test_project_path}`)
