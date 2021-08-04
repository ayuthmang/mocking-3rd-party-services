import axios from 'axios'

export async function getBooks() {
  return axios.get('http://localhost:3000/books')
}
