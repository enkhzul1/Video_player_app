import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "uj7qugz1",
  dataset: "production",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
