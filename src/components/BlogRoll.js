import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className='columns is-multiline blog-list'>
        {posts &&
          posts.map(({ node: post }) => (
            <div
              className='column is-4'
              style={{ display: "flex" }}
              key={post.id}>
              <div
                className={`card${
                  post.frontmatter.featuredpost ? " is-featured" : ""
                }`}>
                {post.frontmatter.featuredimage ? (
                  <div className='card-image'>
                    <figure className='image'>
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </figure>
                  </div>
                ) : null}
                <div className='card-content'>
                  <div className='media'>
                    <div className='media-content'>
                      <p>
                        <Link
                          className='title has-text-primary is-size-4'
                          to={post.fields.slug}>
                          {post.frontmatter.title}
                        </Link>
                      </p>
                      <p className='subtitle is-size-7'>
                        {post.frontmatter.date}
                      </p>
                    </div>
                  </div>
                  <div className='content'>
                    <p>{post.excerpt}</p>
                    <Link className='button is-primary is-outlined' to={post.fields.slug}>
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
