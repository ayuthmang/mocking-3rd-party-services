import axios from 'axios'

export async function getBooks() {
  return (await axios.get('https://some-books-url.xyz')).data
}
