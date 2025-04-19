import React from "react";

type BlogPageProps = {
    params: {
      slug: string;
    };
};
  
export default async function BlogPage({ params }: BlogPageProps) {
    return <h1>Slug: {params.slug}</h1>;
}