import createImageUrlBuilder from '@sanity/image-url'
import SanityClientConstructor from "@sanity/client";

export const client = SanityClientConstructor({
  projectId: "hexpzwv5",
  dataset: "production",
  apiVersion: "2023-01-11",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = createImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);