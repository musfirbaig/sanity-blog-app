import {useQuery, gql} from "@apollo/client";
import React from "react";

const getBlogPosts = gql`
query GetAllBlogPosts {
    allBlogPost{
    _id
    title
    slug{
      current
    }
    author {
    name
    }
    publishedAt
  }
}
`;

type BlogPost = {
    _id: string,
    title: string,
    slug : {
        current: string
    }
    author: {
        name: string
    }
    publishedAt: string
}

type BlogPosts = {
    allBlogPost : BlogPost[]
};

export const BlogPostsList = () =>{
    const {loading, error, data} = useQuery<BlogPosts>(getBlogPosts)
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error.message}</p>
    // console.log(data)
    return (
        <div>
            <h1>Blog Posts</h1>
            {/* TODO : i need to make card comp that will accept post prop */}
            <ul>
                {data!.allBlogPost.map((post:BlogPost) => (
                    <li key={post._id}>
                        <h2>{post.title}</h2>
                        <p>Author: {post.author.name}</p>
                        <p>Published at: {post.publishedAt}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}