import loadingReducer, { setLoading } from '../../src/modules/loading'

describe('loading reducer', () => {
  it('sets loading', () => {
    const originalLoading = false
    const newLoading = false
    const action = setLoading(newLoading)
    const reducedLoading = loadingReducer(originalLoading, action)

    expect(reducedLoading).toBe(newLoading)
  })
})
