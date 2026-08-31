import { defineField, defineType } from "sanity";

export const community = defineType({
  name: "community",
  title: "Community",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Community Name",
      type: "string",
      description: "e.g. Dubai Marina, Downtown Dubai",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "emirate",
      title: "Emirate",
      type: "reference",
      to: [{ type: "emirate" }],
      description: "Which emirate this community belongs to.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      description:
        "Shown on the homepage 'Find Your Place in the UAE' section, if this community is marked Featured below.",
      options: { hotspot: true },
    }),
    defineField({
      name: "featured",
      title: "Featured Community",
      type: "boolean",
      description:
        "Turn this on to show the community on the homepage location grid.",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "emirate.name", media: "image" },
  },
});
