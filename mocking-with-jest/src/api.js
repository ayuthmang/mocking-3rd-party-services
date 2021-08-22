import axios from 'axios'

export async function getBooks() {
<<<<<<< HEAD
  return (await axios.get('https://some-books-url.xyz')).data
=======
  return axios.get('http://localhost:3000/books')
>>>>>>> 51db44cd9c207291987041569bf101db7e92a486
}
