'use client'
import Image from "next/image";

import { ApolloProvider, ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { BlogPostsList } from "@/components/BlogPostsList";

const client = new ApolloClient({
  uri : "https://vx614itu.api.sanity.io/v2023-08-01/graphql/production/default",
  cache: new InMemoryCache(),
})


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
    <ApolloProvider client={client}>
    <main className="flex min-h-screen flex-col items-center justify-between p-24 border-[10px] border-blue-500">
      <div className="border-2 border-red-500">
        hello world
      </div>
      <BlogPostsList />
    </main>
    </ApolloProvider>
  );
}
