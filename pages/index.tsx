import React from "react";
import Link from "next/link";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Header } from "../components/Header";
import { client } from "../libs/client";
import { Grid } from "@mui/material";
import BlogList from "../components/BlogList";

export default function Home({
  blog,
}): DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  return (
    <>
      <Header />
      <BlogList blog={blog} />
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
