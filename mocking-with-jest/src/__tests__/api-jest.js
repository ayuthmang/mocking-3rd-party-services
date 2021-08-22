import axiosMock from 'axios';
import { getBooks } from '../api';

jest.mock('axios')

beforeEach(() => {
  jest.resetAllMocks()
})

test('get books', async () => {
  const books = [
    {
      id: 1,
      title:
        'The Bitcoin Standard: The Decentralized Alternative to Central Banking',
      author: 'Saifedean Ammous',
    },
  ]
  axiosMock.get.mockResolvedValueOnce({
    data: books,
    status: 200,
  })
  const response = await getBooks()
  expect(response).toEqual(books)
})
