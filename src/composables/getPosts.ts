import { ref } from 'vue'

const getPosts = () => {
  const posts = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      const data = await fetch('https://jsonplaceholder.typicode.com/posts')
      if (!data.ok) {
        throw Error('no data available')
      }
      posts.value = await data.json()
      if (!posts.value) {
        throw Error('error')
      }
    } catch (err: any) {
      error.value = err.message
    }
  }

  return { posts, error, load }
}

export default getPosts
