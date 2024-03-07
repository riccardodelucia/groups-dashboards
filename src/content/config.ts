import { defineCollection, z } from "astro:content";

const groupsCollection = defineCollection({
  schema: ({ image }) => z.object({
    name: z.string(),
    cover: image().refine((img) => img.width >= 300, {
      message: "Cover image must be at least 300 pixels wide!",
    }),
    coverAlt: z.string(),
    center: z.string(),
    url: z.string(),
    collection: z.string()
  }),
});

const cardsCollection = defineCollection({
  schema: ({ image }) => z.object({
    miniLinks: z.array(z.object({type:z.string(), url: z.string()})),
    logo: image(),
  }),
});

export const collections = {
  groups: groupsCollection,
  cards: cardsCollection
};