import React from "react";
import dynamic from "next/dynamic";
import Post from "./components/Post/Post";
 //import Header from "./components/Header"; // static import
import styles from "./posts.module.scss";

// use dynamic import 
const Header = dynamic( () => import("./components/Header").then((mod) => mod.PostHeader),{
      loading: () => <p>Loading Header...</p>,
      ssr: false,
    }
  );
 
export default function Posts({ posts }) {
  return (
      <>
    
    <Header/>
    <ul className="row">
      {posts.map((post) => {
        return (
          <li key={post.id} className={"col-md-3 " + styles.post}>
            <Post {...post} />
          </li>
        );
      })}
    </ul>
    </>
  );

}

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${process.env.POST_URL}`);
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

// export async function getServerSideProps() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// }
