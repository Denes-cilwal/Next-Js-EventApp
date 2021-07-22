import React from 'react'
import styles from "./Post.module.css"
import Link from "next/link";

export default function FPosts({ id, title, body }) {
    return (
            <>  
            <h3 className={styles.postHeading}>
                <Link href="/posts/[id]" as={"/posts/" + id}>
                  <a>{title}</a>
                </Link>
              </h3>
            <p className={styles.postBody}>{body}</p>
            </>
    );
  }