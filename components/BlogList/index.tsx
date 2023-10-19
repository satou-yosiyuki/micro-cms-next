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
                <span>{blog.category.name}</span>
                <h2>{blog.title}</h2>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
