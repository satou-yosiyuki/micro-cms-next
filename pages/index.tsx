import React from "react";
import Link from "next/link";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Header } from "../components/Header";
import { client } from "../libs/client";
import { Grid } from "@mui/material";

export default function Home({
  blog,
}): DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  return (
    <>
      <Header />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {blog.map((blog) => (
          <Grid item xs={2} sm={4} md={4} key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a style={{ fontWeight: "bold", fontSize: "20px" }}>
                {blog.title}
              </a>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
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
