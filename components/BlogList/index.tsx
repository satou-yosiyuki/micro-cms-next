import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";

const BlogList = ({ blog }) => {
  return (
    <div>
      {" "}
      <div className={styles.container}>
        <div className={styles.blogGrid}>
          {blog.map((blog) => (
            <Link key={blog.id} href={`/blog/${blog.id}`}>
              <a className={styles.blogItem}>
                <h2>{blog.title}</h2>
                <p>{blog.content}</p>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
