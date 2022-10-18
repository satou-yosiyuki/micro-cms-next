import React from "react";
import Link from "next/link";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Header } from "../components/Header";
import { client } from "../libs/client";

export default function Home({
  blog,
}): DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  return (
    <div>
      <Header />
      <ul style={{ listStyle: "none" }}>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a style={{ fontWeight: "bold", fontSize: "20px" }}>
                {blog.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};
