import axios from 'axios'

export async function getBooks() {
  return axios.get('https://some-books-url.xyz')
}
