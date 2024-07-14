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

export const BlogPost = () => {
  const { loading, error, data } = useQuery(getBlogPostBySlug, {
    variables: { slug: "ai-and-its-emerging-challanges" },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const post = data["allBlogPost"][0];

  const myPortableTextComponents = {
    types: {
      image: ({ value }: { value: Image }) => <img className="mx-auto" src={urlForImage(value)} />,
    },

    // block
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
        <Head>
          <meta charSet="utf-8" />

          <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />

          <meta
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
            name="viewport"
          />

          {/* <title>{blog.title}</title> */}

          <meta
            property="og:title"
            content="How to become a frontend developer | Atom Template"
          />

          <meta property="og:locale" content="en_US" />

          <link rel="canonical" href="//post" />

          <meta property="og:url" content="//post" />

          <meta
            name="description"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />

          <link rel="icon" type="image/png" href="/assets/img/favicon.png" />

          <meta name="theme-color" content="#5540af" />

          <meta property="og:site_name" content="Atom Template" />

          <meta property="og:image" content="//assets/img/social.jpg" />

          <meta name="twitter:card" content="summary_large_image" />

          <meta name="twitter:site" content="@tailwindmade" />

          <link
            crossOrigin="anonymous"
            href="https://fonts.gstatic.com"
            rel="preconnect"
          />

          <link
            as="style"
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
            rel="preload"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />

          <link
            href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
            rel="stylesheet"
          />

          <link
            crossOrigin="anonymous"
            href="/assets/styles/main.min.css"
            media="screen"
            rel="stylesheet"
          />

          <script
            defer
            src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"
          ></script>

          <script
            defer
            src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"
          ></script>

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/atom-one-dark.min.css"
          />
        </Head>
        <NavBar />

        <div>
          <div className="container py-6 md:py-10">
            <div className="mx-auto max-w-4xl">
              <div className="">
                <h1 className="pt-5 font-body text-3xl font-semibold text-primary sm:text-4xl md:text-5xl xl:text-6xl">
                  {/* {blog.title} */} Blog Title
                </h1>
                <div className="flex items-center pt-5 md:pt-10">
                  <div>
                    <img
                      src="/assets/img/blog-author.jpg"
                      className="h-20 w-20 rounded-full border-2 border-grey-70 shadow"
                      alt="author image"
                    />
                  </div>
                  <div className="pl-5">
                    <span className="block font-body text-xl font-bold text-grey-10">
                      By Christy Smith
                    </span>
                    <span className="block pt-1 font-body text-xl font-bold text-grey-30">
                      February 27, 2022
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
      </>{" "}
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
