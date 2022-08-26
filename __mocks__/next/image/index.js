jest.mock('next/image', () => ({
  __esModule: true,
  default: () => {
    return 'next/image stub'
  },
}))

module.exports = jest.requireMock('next/image')
