import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    // 必需字段
    title: z.string(),
    description: z.string(),
    author: z.string(),
    pubDate: z.date(),
    lang: z.enum(["en", "zh"]),

    // 可选字段
    updatedDate: z.date().optional(),
    coverImage: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
};
