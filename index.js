module.exports = {
  type: 'example',
  handlers: {
    init() {
      console.log('example init')
    },
    beforePost(lastRes, content, otherParams) {
      console.log('post', content)
      return content + ', beforePost'
    },
    post(lastRes, content, otherParams) {
      console.log('post', content, otherParams)
      return lastRes + ', post'
    },
    posted(lastRes, content, otherParams) {
      console.log('posted', content, otherParams)
      return lastRes + ', posted'
    },
  }
}
