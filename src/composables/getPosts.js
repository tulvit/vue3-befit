import { ref } from 'vue'

const getPosts = () => {
  const posts = ref([])
  const error = ref(null)
  
  const load = async () => {
    try {
      let data = await fetch('https://jsonplaceholder.typicode.com/posts')
      if (!data.ok) {
        throw Error('no data available');
      }
      //console.log('data json', data.json())
      posts.value = await data.json();
      console.log('posts should be there', posts.value)
      if (!posts.value) {
        throw Error('error')
      }
    }
    catch (err) {
      error.value = err.message
    }
  }
  
  return { posts, error, load }
}

export default getPosts