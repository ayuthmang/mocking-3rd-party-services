import axiosMock from 'axios'
import { getBooks } from '../api'

jest.mock('axios')

beforeEach(() => {
  jest.resetAllMocks()
})

test('get books', async () => {
  axiosMock.get.mockResolvedValueOnce({
    data: [
      {
        id: 1,
        title:
          'The Bitcoin Standard: The Decentralized Alternative to Central Banking',
        author: 'Saifedean Ammous',
      },
    ],
  })
  const response = await getBooks()
  expect(response.data).toEqual([
    {
      id: 1,
      title:
        'The Bitcoin Standard: The Decentralized Alternative to Central Banking',
      author: 'Saifedean Ammous',
    },
  ])
})
