import React, { useState, useReducer, useEffect } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import queryString from "query-string"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BigSearchDisplay from "../components/Search/BigSearchDisplay"

export const BlogContext = React.createContext()

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const sitePosts = data.allMarkdownRemark.edges

  // gets the tag param if in url.
  const [activeTag, setActiveTag] = useState(
    queryString.parse(location?.search)?.tag
  )

  const [posts, dispatchPosts] = useReducer(
    (state, action) => action,
    sitePosts
  )
  const [tags, dispatchTags] = useReducer((state, action) => action, [])

  useEffect(() => {
    const newTags = posts.map(({ node }) => node.frontmatter.tags).flat()
    // console.log("newTags", newTags)
    dispatchTags(Array.from(new Set(newTags)))
  }, [])

  useEffect(() => {
    if (!activeTag) {
      dispatchPosts(sitePosts)
      return
    }

    const newPosts = data.allMarkdownRemark.edges.filter(({ node }) => {
      return node.frontmatter.tags.includes(activeTag)
    })
    dispatchPosts(newPosts)
  }, [activeTag])

  return (
    <BlogContext.Provider
      value={{ posts, tags, activeTag, setActiveTag }}
    >
      <Layout
        location={location}
        title={siteTitle}
        titleOnClick={() => setActiveTag(undefined)}
      >
        <SEO title="All posts" />
        <BigSearchDisplay />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={`/blog/${node.fields.slug}`}>
              <header>
                <h3>
                  <Link style={{ boxShadow: `none` }} to={`/blog/${node.fields.slug}`}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          )
        })}
      </Layout>
    </BlogContext.Provider>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`
