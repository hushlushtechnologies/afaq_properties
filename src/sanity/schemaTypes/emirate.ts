import { defineField, defineType } from "sanity";

export const emirate = defineType({
  name: "emirate",
  title: "Emirate",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Emirate Name",
      type: "string",
      description: "e.g. Dubai, Abu Dhabi, Sharjah",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Auto-generated from the name. Used internally for filtering — don't change unless necessary.",
      options: { source: "name" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      description:
        "Optional — not currently shown on the website, reserved for future use.",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: { title: "name" },
  },
});
