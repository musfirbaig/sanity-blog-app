"use client";

import { useQuery, gql } from "@apollo/client";
import React, { useState } from "react";
import { PortableText } from "@portabletext/react";

import { urlForImage } from "@/sanity/lib/image";
import type { Image } from "sanity";
import Head from "next/head";
import NavBar from "./Navbar";

// const getBlogPostBySlug = gql`
//   query BlogPostBySlug($slug: String) {
//     allBlogPost(where: { slug: { current: { eq: $slug } } }) {
//       title
//       _id
//       bodyRaw
//     }
//   }
// `;

const getBlogPostBySlug = gql 
`query BlogPostBySlug($slug: String) {
  allBlogPost(where: {slug: {current: {eq: $slug}}}) {
    title
    mainImage {
      asset{
        url
      }
    }
    
    author {
      name
      image {
        asset {
          url
        }
      }
    }
    
    _createdAt
    
    _id
    bodyRaw
  }
}`;

export const BlogPost = ({slug} : {slug:string}) => {
  const { loading, error, data } = useQuery(getBlogPostBySlug, {
    variables: { slug },
    // variables: { slug: "ai-and-its-emerging-challanges" },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const post = data["allBlogPost"][0];

  const myPortableTextComponents = {
    types: {
      image: ({ value }: { value: Image }) => <img className="mx-auto m-6 p-5" src={urlForImage(value)} />,
    },

    block: {
      // Ex. 1: customizing common block types
      h1: ({children}: any) => <h1 className="text-2xl font-bold text-gray-700">{children}</h1>,
      h2: ({children}: any) => <h2 className="text-xl font-bold text-gray-700">{children}</h2>,
      h3: ({children}: any) => <h3 className="text-lg font-semibold text-gray-600">{children}</h3>,
      h4: ({children}: any) => <h4 className="text-base font-semibold text-gray-600">{children}</h4>,
      normal: ({children}: any) => <p className="text-base font-semibold text-gray-600 ">{children}</p>,
    },
    marks: {
      // Ex. 1: custom renderer for the em / italics decorator
      em: ({children}:any) => <em className="text-gray-600 font-semibold">{children}</em>,
      strong: ({children}:any) => <strong className="text-gray-800 font-bold">{children}</strong>,
    }
  };

  // const triggerNavItem = (id) => {
  //   // Implement the scrolling logic here
  //   document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  // };

  // const triggerMobileNavItem = (id) => {
  //   setMobileMenu(false);
  //   triggerNavItem(id);
  // };

  return (
    <>
      <>

        

        <div>
                <img
                  src={post.mainImage?.asset.url}
                  className="w-full h-96 object-cover"
                  alt="blog image" />
          <div className="container py-6 md:py-10 text-gray-700 mx-auto">
            <div className="mx-auto max-w-4xl">
              <div className="">
                <h1 className="pt-5 font-body text-3xl font-semibold text-primary sm:text-4xl md:text-5xl xl:text-6xl">
                  {/* {blog.title} */} {post.title}
                </h1>
                <div className="flex items-center pt-5 md:pt-10">
                  <div>
                    <img
                      src={post.author.image?.asset.url}
                      className="h-20 w-20 rounded-full border-2 border-grey-70 shadow"
                      alt="author image"
                    />
                  </div>
                  <div className="pl-5">
                    <span className="block font-body text-xl font-bold text-grey-10">
                      {post.author.name}
                    </span>
                    <span className="block pt-1 font-body text-xl font-bold text-grey-30">
                      {post._createdAt.slice(0,10)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="prose max-w-none pt-8">
                <PortableText
                  value={post.bodyRaw}
                  components={myPortableTextComponents}
                />

                {/* <PortableText
              // Pass in block content straight from Sanity.io
              content={blog.content}
              projectId="iytovi01"
              dataset="production"
              // Optionally override marks, decorators, blocks, etc. in a flat
              // structure without doing any gymnastics
              serializers={{
                h1: (props) => <h1 style={{ color: "red" }} {...props} />,
                li: ({ children }) => <li className="special-list-item">{children}</li>,
              }}
            /> */}
              </div>
              <div className="mt-10 flex justify-between border-t border-lila py-12">
                <a href="/" className="flex items-center">
                  <i className="bx bx-left-arrow-alt text-2xl text-primary"></i>
                  <span className="block pl-2 font-body text-lg font-bold uppercase text-primary md:pl-5">
                    Previous Post
                  </span>
                </a>
                <a href="/" className="flex items-center">
                  <span className="block pr-2 font-body text-lg font-bold uppercase text-primary md:pr-5">
                    Next Post
                  </span>
                  <i className="bx bx-right-arrow-alt text-2xl text-primary"></i>
                </a>
              </div>

            </div>
          </div>
        </div>

        <div className="bg-primary">
          <div className="container flex flex-col justify-between py-6 sm:flex-row">
            <p className="text-center font-body text-white md:text-left">
              © Copyright 2022. All right reserved, ATOM.
            </p>
            <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
              <a href="/">
                <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
              </a>
              <a href="/" className="pl-4">
                <i className="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
              </a>
              <a href="/" className="pl-4">
                <i className="bx bxl-dribbble text-2xl text-white hover:text-yellow"></i>
              </a>
              <a href="/" className="pl-4">
                <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
              </a>
              <a href="/" className="pl-4">
                <i className="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
              </a>
            </div>
          </div>
        </div>
      </>

      {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
    </>
  );
};

// export const BlogPost = () =>{
//     const {loading, error, data} = useQuery(
//         getBlogPostBySlug, {
//         variables: {slug: "ai-and-its-emerging-challanges"}
//     }
//     )

//     if(loading) return <p>Loading...</p>
//     if(error) return <p>Error: {error.message}</p>

//     const post = data['allBlogPost'][0]

//     const myPortableTextComponents = {
//         types: {
//           image: ({value}: {value: Image}) => <img src={urlForImage(value)} />,
//         }
//     }

//     // console.log(data)
//     return (
//         <div>
//             <PortableText
//                 value={post.bodyRaw}
//                 components={myPortableTextComponents}
// />

//             {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
//         </div>
//     )
// }
