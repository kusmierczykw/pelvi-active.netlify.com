import React from "react";

function Template({data}) {
    const {markdownRemark} = data;
    const {frontmatter} = markdownRemark;

    return (
        <h1>{frontmatter.title}</h1>
    );
}

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
            }
        }
    }
`;

export default Template;