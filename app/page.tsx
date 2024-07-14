'use client'
import Image from "next/image";

import { BlogPostsList } from "@/components/BlogPostsList";



// It is for testing purpose - test passed, query working fine

// client.query({
//   query: gql`
//     query {
//       allAuthor {
//         name
//         _id
//       }
//     }
//   `
// }).then(result => JSON.stringify(result)).then(result => console.log(result))

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 border-[10px] border-blue-500">
      <div className="border-2 border-red-500">
        hello world
      </div>
      <BlogPostsList />
    </main>
  );
}
