import {visit} from 'unist-util-visit'
const siteUrl = "https://zhuye.dev"

const plugin = () => (ast) => {
  visit(ast, 'link', visitor)

  function visitor(node) {
    const data = node.data || (node.data = {})
    const props = data.hProperties || (data.hProperties = {})
    const url = node.url

    console.log('URL: ', url)
    console.log(url.includes(siteUrl))
    const getLinkType = url => {
      // any string that starts with #
      if (url.includes(siteUrl)) {
        return 'internal'

        // catch all the rest
      } else {
        return 'external'
      }
    }

    const linkType = getLinkType(url)

    props.title = node.url

    if (linkType === 'external') {
      props.target = '_blank'
      props.rel = 'noopener'
    }
  }
}

export default plugin