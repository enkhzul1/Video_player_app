import { useEffect } from "react";
import groq from "groq";
import client from "@/client";

export default function Posts(props) {
  const { title, playbackId } = suspend(() => client.fetch(query), []);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return <video playbackId={playbackId} metadata={{ video_title: title }} />;
}

const client = createClient({
  projectId: "lb871prh",
  dataset: "codesandbox",
  useCdn: true,
  withCredentials: false,
  apiVersion: "2022-10-10",
});
const query = groq`*[_type == "trailer"][0]{
    title,
    "playbackId": video.asset->playbackId
  }`;

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const post = await client.fetch(
    `
      *[_type == "post" && slug.current == $slug][0]
    `,
    { slug }
  );

  return {
    props: {
      post,
    },
  };
}
