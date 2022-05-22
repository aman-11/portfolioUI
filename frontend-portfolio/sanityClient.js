// client.js
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "zahbe4dj", // you can find this in sanity.json
  dataset: "production", // or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
  token: process.env.SANITY_TOKEN,
  apiVersion: "2022-05-21",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
