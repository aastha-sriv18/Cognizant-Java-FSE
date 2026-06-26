import React from "react";

function BlogDetails(props) {

    const content = props.blogs.map(blog => (

        <div key={blog.id}>
            <h3>{blog.title}</h3>
            <h4>{blog.author}</h4>
            <p>{blog.description}</p>
        </div>

    ));

    return (

        <div>
            <h1>Blog Details</h1>
            {content}
        </div>

    );
}

export default BlogDetails;