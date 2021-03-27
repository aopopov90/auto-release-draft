import * as core from '@actions/core'
import {run} from '../src/main'

jest.mock('@actions/core')

describe('When running the action with a created version tag event', () => {
  const fakeSetOutput = core.setOutput as jest.MockedFunction<typeof core.setOutput>

  beforeEach(async () => {
    await run()
  })

  test('it should set the created release URL as output parameter', () => {
    expect(fakeSetOutput).toHaveBeenCalledWith('release-url', expect.anything())
  })
})