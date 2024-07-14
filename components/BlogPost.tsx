'use client'

import {useQuery, gql} from "@apollo/client";
import React, { useState } from "react";
import {PortableText} from '@portabletext/react'

import { urlForImage } from "@/sanity/lib/image";
import type { Image } from 'sanity'



const getBlogPostBySlug = gql`
query BlogPostBySlug($slug: String) {
  allBlogPost(where: {slug: {current: {eq: $slug}}}) {
    title
    _id
    bodyRaw
  }
}
`;





export const BlogPost = () =>{
    const {loading, error, data} = useQuery(
        getBlogPostBySlug, {
        variables: {slug: "ai-and-its-emerging-challanges"}
    }
    )

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error.message}</p>

    const post = data['allBlogPost'][0]

    const myPortableTextComponents = {
        types: {
          image: ({value}: {value: Image}) => <img src={urlForImage(value)} />,
        }
    }
    
    // console.log(data)
    return (
        <div>

            
            {/* <PortableText
                value={post.bodyRaw}
                components={myPortableTextComponents}
/> */}

            {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}

            
        </div>
    )
}