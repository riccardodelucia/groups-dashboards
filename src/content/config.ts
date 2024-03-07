import { defineCollection, z } from "astro:content";

const groupsCollection = defineCollection({
  schema: ({ image }) => z.object({
    name: z.string(),
    cover: image().refine((img) => img.width >= 300, {
      message: "Cover image must be at least 300 pixels wide!",
    }),
    coverAlt: z.string(),
    center: z.string(),
    url: z.string()
  }),
});

export const collections = {
  groups: groupsCollection,
};