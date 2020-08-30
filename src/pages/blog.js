import React, { useState, useReducer, useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Card } from "react-bootstrap"
import queryString from "query-string"

import SEO from "../components/seo"
import BigSearchDisplay from "../components/Search/BigSearchDisplay"

//component
import Header from "../layouts/slider/Header"

export const BlogContext = React.createContext()

const BlogIndex = props => {
  const { location } = props

  const data = useStaticQuery(
    graphql`
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
  )

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
    <BlogContext.Provider value={{ posts, tags, activeTag, setActiveTag }}>
      <SEO title="All posts" />
      <Header {...props} />
      <main>
        <div className={`container-fluid clear-top`}>
          <div className={`container`}>
            <div className={`row`}>
              <div className={`col-lg-8 offset-lg-2`}>
                <BigSearchDisplay />
              </div>
            </div>
            <div className={`row pt-5`}>
              <div className={`col-lg-8 offset-lg-2`}>
                <div className={`row`}>
                  {posts.map(({ node }) => {
                    const title = node.frontmatter.title || node.fields.slug
                    return (
                      <div className={`col-md-6 col-12 mb-3`}>
                        <Card key={`/blog/${node.fields.slug}`}>
                          <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                              {node.frontmatter.date}
                            </Card.Subtitle>
                            {/* <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle> */}
                            <Card.Text>
                              {/* A demo design for mobile and desktop responsiveness */}
                              <p
                                dangerouslySetInnerHTML={{
                                  __html:
                                    node.frontmatter.description ||
                                    node.excerpt,
                                }}
                              />
                            </Card.Text>
                            {/* card-link */}
                            <Link
                              className={`card-link btn btn-primary`}
                              to={`/blog/${node.fields.slug}`}
                            >
                              Read
                            </Link>
                          </Card.Body>
                        </Card>
                      </div>
                      // <article key={`/blog/${node.fields.slug}`}>
                      //   <header>
                      //     <h3>
                      //       <Link
                      //         style={{ boxShadow: `none` }}
                      //         to={`/blog/${node.fields.slug}`}
                      //       >
                      //         {title}
                      //       </Link>
                      //     </h3>
                      //     <small>{node.frontmatter.date}</small>
                      //   </header>
                      //   <section>
                      //     <p
                      //       dangerouslySetInnerHTML={{
                      //         __html:
                      //           node.frontmatter.description || node.excerpt,
                      //       }}
                      //     />
                      //   </section>
                      // </article>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div></div>
    </BlogContext.Provider>
  )
}

export default BlogIndex
