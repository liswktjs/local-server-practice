//@ts-check

/**
 * @typedef  Post
 * @property {string} id
 * @property {string} title
 * @property {string} content
 */

/** @type {Post[]} */
const posts = [
  {
    id: 'my_first_post',
    title: 'My frist post',
    content: 'hello world',
  },
  {
    id: 'my_second_post',
    title: '나의 두번째 포스트',
    content: 'hello world2',
  },
]

/**
 * @typedef APIResponse
 * @property {number} statusCode
 * @property {string | Object} body
 */

/**
 * @typedef Route
 * @property {RegExp} url
 * @property {'GET' | 'POST'} method
 * @property {(matches: string[], body: Object.<string, *> | undefined) => Promise<APIResponse>} callback
 */

/**@type {Route[]} */
const routes = [
  //post 리스트 조회
  {
    url: /^\/posts$/,
    method: 'GET',
    callback: async () => ({
      statusCode: 200,
      body: posts,
    }),
  },
  //특정 id 소유한 포스트 조회
  {
    url: /^\/posts\/([a-zA-Z0-9-_]+)$/,
    method: 'GET',
    callback: async (matches) => {
      const postId = matches[1]
      if (!postId) {
        return {
          statusCode: 404,
          body: 'Not Found',
        }
      }
      const post = posts.find((_post) => _post.id === postId)

      if (!post) {
        return {
          statusCode: 404,
          body: 'Not Found',
        }
      }
      return {
        statusCode: 200,
        body: post,
      }
    },
  },
  //새로운 포스트 생성
  {
    url: /^\/posts$/,
    method: 'POST',
    callback: async (_, body) => {
      if (!body) {
        return {
          statusCode: 400,
          body: 'it will be formated request',
        }
      }
      /**@type {string} */
      /*eslint-disable-next-line prefer-destructuring */
      const title = body.title
      const newPost = {
        id: title.replace(/\s/g, '_'),
        title,
        content: body.content,
      }
      posts.push(newPost)
      return {
        statusCode: 200,
        body: newPost,
      }
    },
  },
]

module.exports = {
  routes,
}
